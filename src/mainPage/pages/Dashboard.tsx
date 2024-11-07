import { useEffect, useState } from 'react';
import SelectView from '../components/SelectView';
import { VIEW } from '../components/SelectView';
import styled from '@emotion/styled';
import { DASHBORADTABLEHEADER } from '../constants/DASHBOARD';
// import { MOCK_DASHBOARD } from '../constants/mainPage_MOCK';
import {
  STCOMActiveBtn,
  STCOMGreyBtn,
} from '../../common/styles/commonStyleComs';
import { IBOTS, IBotPnl, IDashboard } from '../types/dashboardType';
import { useNavigate, useOutletContext } from 'react-router-dom';
import ConnectWallet from '../../wallet/components/ConnectWallet';
import axios from 'axios';
import useTablet from '../../common/hooks/useTablet';
import TableTablet from '../components/TableTablet';
import { formatUnits } from '../../common/utils/formatUnits';
import { useUserAccount } from '../../wallet/hooks/useUserAccount';
import { TOKEN_INFO } from '../../common/constants/TOKEN';
import { MOCK_DASHBOARD } from '../constants/mainPage_MOCK';
// import instance from '../../common/apis/instance';
import { SadLogo } from '../../common/assets/0_index';
import TotalAmount from '../components/dashboard/TotalAmount';
import PriceCollection from '../components/dashboard/PriceCollection';
import { LogoCyclicArbBot } from '../assets/0_index';
// import { MOCK_DASHBOARD } from '../constants/mainPage_MOCK';

// const base_url = import.meta.env.VITE_BASE_URL;

const ShowDashboardData = ({
  data,
  qveTokenBalance,
  balance,
  pnlData,
}: {
  data: IDashboard;
  qveTokenBalance: number | undefined;
  balance: string;
  pnlData: IBotPnl[] | undefined;
}) => {
  const TOKEN = TOKEN_INFO.token;
  const { openBotModal, openRemoveModal } = useOutletContext<{
    openBotModal: (id: string) => void;
    openRemoveModal: (id: string, totalInvest: number) => void;
  }>();
  const isTablet = useTablet();
  return (
    <StShowDashboard>
      <StTotalContainer>
        <TotalAmount
          totalAmount={data.total_amount}
          pnlData={pnlData}
          domesticRate={data.domesticRate}
          bots={data.bots}
        />
        <PriceCollection
          data={data}
          qveTokenBalance={qveTokenBalance}
          balance={balance}
        />
      </StTotalContainer>
      {isTablet ? (
        <TableTablet
          data={data.bots}
          openBotModal={openBotModal}
          openRemoveModal={openRemoveModal}
        />
      ) : (
        <StTable>
          <thead>
            <StTableRow>
              {DASHBORADTABLEHEADER.map((item) => (
                <StTableHeader key={item}>{item}</StTableHeader>
              ))}
            </StTableRow>
          </thead>
          <tbody>
            {data.bots.map((item) => (
              <StTableRow key={item.bot_id}>
                <StTableCell>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                    }}
                  >
                    <LogoCyclicArbBot width='24' height='24' />
                    {item.bot_name}
                  </div>
                </StTableCell>
                <StTableCell>
                  {formatUnits(item.total_investment)} {TOKEN}
                </StTableCell>
                <StTableCell>
                  {formatUnits(item.current_value)} {TOKEN}
                </StTableCell>
                {/* <StTableCell>
                  <StColor isPositive={item.daily_pnl >= 0}>
                    {formatPriceValue(item.daily_pnl)} %
                  </StColor>
                </StTableCell> */}
                <StTableCell>
                  <StColor isPositive={item.total_profit >= 0}>
                    {formatUnits(item.total_profit)} {TOKEN}
                  </StColor>
                </StTableCell>
                <StTableCell>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <StAddBtn onClick={() => openBotModal(item.bot_id)}>
                      Add
                    </StAddBtn>
                    <StRemoveBtn
                      onClick={() =>
                        openRemoveModal(item.bot_id, item.total_investment)
                      }
                    >
                      Remove
                    </StRemoveBtn>
                  </div>
                </StTableCell>
              </StTableRow>
            ))}
          </tbody>
        </StTable>
      )}
    </StShowDashboard>
  );
};

const ISnotConnectWallet = () => {
  return (
    <StNotConnectContainer>
      <span>
        <SadLogo />
        <StText1>YUCCA.FI is not connected</StText1>
        <StText1>to your wallet</StText1>
        <div />
        <StText2>To see more information about this vault</StText2>
        <StText2>you need to connect your wallet</StText2>
      </span>
      <ConnectWallet />
    </StNotConnectContainer>
  );
};

const ISnotSelectBot = () => {
  const navigate = useNavigate();
  return (
    <StNotConnectContainer>
      <span>
        <SadLogo />
        <StText1>You are not investing in the</StText1>
        <StText1>trading bot. Go invest now!</StText1>
        <div />
        <StText2>You have not deposited to YUCCA.FI.</StText2>
        <StText2>
          If you want to earn profits, go ahead and make a deposit!
        </StText2>
      </span>
      <StConnectWallet
        onClick={() => {
          navigate('/tradeBots');
        }}
      >
        Go Invest Now!
      </StConnectWallet>
    </StNotConnectContainer>
  );
};

const Dashboard = () => {
  const address = useUserAccount();
  const [data, setData] = useState<IDashboard>(MOCK_DASHBOARD);
  // const data = MOCK_DASHBOARD;
  const { refreshTrigger } = useOutletContext<{
    refreshTrigger: boolean;
  }>();

  useEffect(() => {
    getData();
  }, [refreshTrigger, address]);

  const getData = async () => {
    try {
      // const { data } = await instance.get(
      //   `${base_url}/yucca/dashboard?user_id=${address}`
      // );
      // console.log(`🫥dashboard :`, data);
      setData(data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        err.response.status === 404 && setData(MOCK_DASHBOARD);
        return;
      }
    }
  };

  const userPnlDataPerBotList = data?.bots.map((bot: IBOTS) => ({
    bot_name: bot.bot_name,
    pnlData: bot.pnlData,
  }));

  return (
    <StContainer>
      <SelectView view={VIEW.DASHBOARD} />
      {address ? (
        data ? (
          data?.bots?.length ? (
            <ShowDashboardData
              data={data}
              pnlData={userPnlDataPerBotList}
              qveTokenBalance={0}
              balance='0'
            />
          ) : (
            <ISnotSelectBot />
          )
        ) : (
          <>loading..</>
          // <ISnotSelectBot />
        )
      ) : (
        <ISnotConnectWallet />
      )}
    </StContainer>
  );
};

export default Dashboard;

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StShowDashboard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StTotalContainer = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  gap: 1.6rem;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    height: 60rem;
    flex-direction: column;
  }
`;

const StTable = styled.table`
  margin-top: 0.2rem;
  border-collapse: collapse;
  width: 100%;
`;

const StColor = styled.span<{ isPositive: boolean }>`
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.positive : theme.colors.negative};
  &::before {
    content: ${(props) => (props.isPositive ? '+' : '')};
  }
`;

const StTableRow = styled.tr`
  border-bottom: 2px solid ${({ theme }) => theme.colors.not_important};
  text-align: left;
`;

const StTableHeader = styled.th`
  padding: 1.2rem 0 1.2rem 2rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_3m};
`;

const StTableCell = styled.td`
  padding: 3.7rem 0 3.7rem 2rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_2_auto};
  vertical-align: middle;
  text-align: left;
`;

const StAddBtn = styled(STCOMActiveBtn)`
  padding: 1.2rem 2.5rem;
  ${({ theme }) => theme.fonts.body_3m};
  margin-right: 1rem;
`;

const StRemoveBtn = styled(STCOMGreyBtn)`
  padding: 1.3rem 1.6rem;
  ${({ theme }) => theme.fonts.body_3m};
`;

const StNotConnectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55rem;
  gap: 3rem;
  border-radius: 40px;
  border: 0.1rem solid transparent;
  background-image: linear-gradient(
    144deg,
    rgba(255, 255, 255, 0.7) -9.46%,
    rgba(255, 255, 255, 0.1) 115.25%
  );
  background-origin: border-box;
  background-clip: content-box, border-box;

  & > span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    & > div {
      height: 2rem;
    }
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    height: 47rem;
  }
`;

const StText1 = styled.p`
  ${({ theme }) => theme.fonts.kumbh_snas_42};
  color: ${({ theme }) => theme.colors.spring_green};
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    ${({ theme }) => theme.fonts.title_2};
  }
`;

const StText2 = styled.p`
  ${({ theme }) => theme.fonts.pre_18_semi};
  color: ${({ theme }) => theme.colors.light_gray};
`;

const StConnectWallet = styled(STCOMActiveBtn)`
  padding: 1.8rem 3.2rem;
`;
