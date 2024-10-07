import styled from '@emotion/styled';
import { IcModalX, IcNotice } from '../assets/0_index';
import AreaChart from './AreaChart';
import {
  STCOMBackground,
  STCOMActiveBtn,
} from '../../common/styles/commonStyleComs';
import DropDown from './DropDown';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { IPnlChart } from '../types/pnlChartType';
import { DEPOSIT_PLACEHOLDER } from '../constants/DEPOSIT_PLACEHOLDER';
import { formatNumberWithCommas } from '../../common/utils/formatNumberWithCommas';
import { formatPercentValue } from '../../common/utils/formatPercentValue';
import { useOutsideClick } from '../../common/hooks/useOutsideClick';
import { slideUp } from '../../common/utils/animation';
import { useUserAccount } from '../../wallet/hooks/useUserAccount';
import { depositTransfer } from '../../common/contracts/contractFunctions';
import { TOKEN_INFO } from '../../common/constants/TOKEN';
import { walletConfig } from '../../wallet/walletConfig';
import { getBalance } from 'wagmi/actions';
import { convertTokenBalance } from '../../common/utils/convertTokenBalance';
import BotModalReceive from './BotModalReceive';
import { parseNumber } from '../../common/utils/parseNumber';
import { MOCK_PNLCHART } from '../constants/mainPage_MOCK';

const base_url = import.meta.env.VITE_BASE_URL;
const MINVAL = 100;
const BotModal = ({
  isOpen,
  onClose,
  botId,
  showToast,
  onDataRefreshRequest,
}: {
  isOpen: boolean;
  onClose: () => void;
  botId: string | null;
  showToast: (message: string) => void;
  onDataRefreshRequest: () => void;
}) => {
  const [depositValue, setDepositValue] = useState<string>('');
  const [placeholder, setPlaceholder] = useState(DEPOSIT_PLACEHOLDER.default);
  const [data, setData] = useState<IPnlChart>(MOCK_PNLCHART);
  const user_id = useUserAccount();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState('Deposit');
  const [balance, setBalance] = useState<string>();
  const [isFocused, setIsFocused] = useState(false);
  useOutsideClick(wrapperRef, onClose);

  useEffect(() => {
    // if (!user_id) return;
    getData();
    if (!user_id) {
      setPlaceholder(DEPOSIT_PLACEHOLDER.notConnectWallet);
      return;
    }

    getUserBalance();
  }, []);
  if (!isOpen) return null;

  const getUserBalance = async () => {
    if (!user_id) return;
    const tmp = await getBalance(walletConfig, {
      address: user_id,
      token: TOKEN_INFO.tokenAddress,
    });

    setBalance(convertTokenBalance(tmp.value, tmp.decimals));
  };

  // const fetchBalance = async () => {
  //   if (!user_id) return;
  //   const b = await getBalance(user_id);
  //   setBalance(b);
  // };

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/PnLChart?bot_id=${botId}&user_id=${user_id}&timeframe=5`
      );
      // if (data.Available === 0) {
      //   setPlaceholder(DEPOSIT_PLACEHOLDER.lackOfMoney);
      // }
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDepositValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatValue = formatNumberWithCommas(rawValue);
    setDepositValue(formatValue);
  };

  const deposit = async (id: string | null) => {
    if (!id) return;
    const base_url = import.meta.env.VITE_BASE_URL;
    if (!depositValue) return;
    const _amount = Number(depositValue.replace(/,/g, ''));
    try {
      if (!user_id) return;
      setIsLoading('Open Wallet...');
      await depositTransfer(_amount);
      setIsLoading('Depositing...');
      const postData = {
        user_id: user_id, // 지갑 주소
        bot_id: id,
        amount: _amount, // 입금할 금액
      };
      await axios.post(`${base_url}/api/deposit`, postData);
      onClose();
      setIsLoading('Deposit');
      showToast('Your deposit has been successfully completed!');
      onDataRefreshRequest();
    } catch (err) {
      setIsLoading('Deposit');
      console.log(err);
    }
  };

  return data ? (
    <StBotModalBackGround>
      <StScroll>
        <StWrapper ref={wrapperRef}>
          <StSpaceBetween>
            <StModalTitle>{data.bot_name}</StModalTitle>
            <IcModalX onClick={onClose} style={{ cursor: 'pointer' }} />
          </StSpaceBetween>
          <StModalExplain>
            Cyclic arb bot automatically captures recurring price discrepancies
            between multiple exchanges, operating 24/7.
          </StModalExplain>
          <StColumn>
            <StSpaceBetween>
              <StModalLabel>Investment</StModalLabel>
              <StAvailable>
                <span>Available:</span> {balance}
                {TOKEN_INFO.token}
              </StAvailable>
            </StSpaceBetween>
            <StinputContainer isFocused={isFocused || depositValue.length > 0}>
              <input
                placeholder={placeholder}
                value={depositValue}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleDepositValue}
              />
              <button onClick={() => balance && setDepositValue(balance)}>
                Max
              </button>
            </StinputContainer>
            {(isFocused || depositValue) && (
              <BotModalReceive value={parseNumber(depositValue)} />
            )}
          </StColumn>

          <StGraphContaienr>
            <p>Daily PnL(%): {formatPercentValue(data.daily_PnL)}%</p>
            <AreaChart chartData={data.data} />
          </StGraphContaienr>
          <DropDown detailData={data.detailInformation} />
          <StDepositBtn
            disabled={
              placeholder !== DEPOSIT_PLACEHOLDER.default ||
              !depositValue ||
              Number(depositValue.replace(/,/g, '')) < MINVAL
            }
            onClick={() => deposit(botId)}
          >
            {isLoading}
          </StDepositBtn>
          <StModalNotice>
            <IcNotice />
            <span>
              You are using a shared parameter. As market conditions differ,
              these parameters cannot guarantee the same results.
            </span>
          </StModalNotice>
          <StNoticeP>
            If you remove the bot, a 20% fee on the revenue it generated will be
            charged.
          </StNoticeP>
        </StWrapper>
      </StScroll>
    </StBotModalBackGround>
  ) : (
    <>loading...</>
  );
};

export default BotModal;

const StBotModalBackGround = styled(STCOMBackground)`
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    align-items: end;
  }
`;

const StScroll = styled.div`
  overflow-y: auto;
  width: 56rem;
  max-height: 76rem;
  height: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 4;
  padding: 2.4rem;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    animation: ${slideUp} 0.5s ease-out;
  }
`;

const StWrapper = styled.div`
  width: 100%;
  min-height: 69.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;

  & > * {
    width: 100%;
  }
`;

const StSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StModalTitle = styled.p`
  ${({ theme }) => theme.fonts.pretendard_22};
  color: ${({ theme }) => theme.colors.darkgray};
`;

const StModalExplain = styled.p`
  ${({ theme }) => theme.fonts.small_phrase};
  color: ${({ theme }) => theme.colors.gray};
`;

const StColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StModalLabel = styled.label`
  ${({ theme }) => theme.fonts.body_2};
  color: ${({ theme }) => theme.colors.darkgray};
`;

const StAvailable = styled.p`
  ${({ theme }) => theme.fonts.body_3};
  color: ${({ theme }) => theme.colors.black};

  & > span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const StinputContainer = styled.div<{ isFocused: boolean }>`
  width: 100%;
  height: ${({ isFocused }) => (isFocused ? '6rem' : '5rem')};
  padding: 1.4rem 1.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  border: ${({ isFocused }) => (isFocused ? '1px solid #6D9F71' : '')};

  & > input {
    width: 80%;
    background-color: transparent;
    border: none;
    ${({ theme }) => theme.fonts.body_3};
    outline: none;
    color: ${({ theme }) => theme.colors.black};

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_gray};
    }
  }

  & > button {
    position: absolute;
    right: 1.1rem;
    top: 1rem;
    width: 6.6rem;
    height: 3rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.spring_green};
    background: rgba(109, 159, 113, 0.1);
    ${({ theme }) => theme.fonts.pretendard_16};
    color: ${({ theme }) => theme.colors.spring_green};

    &:hover {
      background: rgba(109, 159, 113, 0.4);
    }
  }
`;

const StGraphContaienr = styled.div`
  position: relative;
  width: 100%;
  height: 27.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: 1.6rem;

  & > p {
    ${({ theme }) => theme.fonts.caption};
  }
`;

const StDepositBtn = styled(STCOMActiveBtn)<{ disabled: boolean }>`
  width: 100%;
  min-height: 4.6rem;
  ${(props) => props.disabled && ' background-color: #ccc'};
`;

const StModalNotice = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5.8rem;
  background-color: ${({ theme }) => theme.colors.white_opacity};
  padding: 1.2rem 2.4rem;
  ${({ theme }) => theme.fonts.caption};
  gap: 0.9rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.light_gray};
`;

const StNoticeP = styled.p`
  width: 100%;
  text-align: center;
  ${({ theme }) => theme.fonts.index_steptitle};
  color: ${({ theme }) => theme.colors.not_important};
`;
