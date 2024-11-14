import styled from '@emotion/styled';
import {
  STCOMActiveBtn,
  STCOMBoxWrapper,
} from '../../../common/styles/commonStyleComs';
import {
  IcPersons,
  LogoCyclicArbBot,
  LogoGradationBot,
} from '../../assets/0_index';
import { ITRADEBOTS } from '../../types/dashboardType';
import { formatPriceValue } from '../../../common/utils/formatPriceValue';
import { formatNumberValue } from '../../../common/utils/formatNumberValue';
import { formatPercentValue } from '../../../common/utils/formatPercentValue';
import { useEffect, useState } from 'react';
import { IChartData } from '../../types/pnlChartType';
import { useUserAccount } from '../../../wallet/hooks/useUserWalletInfo';
import instance from '../../../common/apis/instance';
import { Botanix } from '../../../onboarding/assets/0_index';
import { MOCK_PNLCHART } from '../../constants/mainPage_MOCK';
import PreviewChart from './PreviewChart';

interface IBotBoardProps {
  data: ITRADEBOTS;
  active: string;
  openModal: (id: string) => void;
  openUnConnectModal: () => void;
  showToast: (message: string) => void;
}

const base_url = import.meta.env.VITE_BASE_URL;

const BotBoard = ({
  data: propsData,
  active,
  openModal,
  openUnConnectModal,
}: IBotBoardProps) => {
  const [chartData, setChartData] = useState<IChartData[]>(MOCK_PNLCHART.data);

  const user_id = useUserAccount();
  useEffect(() => {
    if (!active) return;
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await instance.get(
        `${base_url}/yucca/PnLChart?bot_id=${active}&user_id=${user_id}&timeframe=5`
      );
      setChartData(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <StGlassWrapper>
      <StContainer>
        <StBotInfo>
          {active ? <StLogoCyclicArbBot /> : <LogoGradationBot />}
          <StBotInfoLayout>
            <StBotName>{propsData.name}</StBotName>
            <div>
              <IcPersons />
              <StSubscriber>
                {formatNumberValue(propsData.subscriber)}
              </StSubscriber>
            </div>
          </StBotInfoLayout>
        </StBotInfo>
        {active ? (
          <>
            <StTotalProfitsContainer>
              <StTotalPRofits>
                <label>Total Profits</label>
                <p>{formatPercentValue(propsData.total_profits)} %</p>
              </StTotalPRofits>
              {chartData && <PreviewChart chartData={chartData} />}
            </StTotalProfitsContainer>
            <StBotSummaryValue>
              <div>
                <label>APY</label>
                <p>{formatPercentValue(propsData.apy)}%</p>
              </div>
              <div>
                <label>Runtime</label>
                <p>{propsData.runtime} Day</p>
              </div>
              <div>
                <label>TVL</label>
                <p>{formatPriceValue(propsData.tvl)} USDT</p>
              </div>
            </StBotSummaryValue>
            <StBottomContainer>
              <StOperated>
                <label>operated in</label>
                <Botanix />
              </StOperated>
              <StDeposit
                onClick={() =>
                  user_id ? openModal(propsData.bot_id) : openUnConnectModal()
                }
              >
                Deposit
              </StDeposit>
            </StBottomContainer>
          </>
        ) : (
          <StComingSoon>Coming Soon.. :)</StComingSoon>
        )}
      </StContainer>
    </StGlassWrapper>
  );
};

export default BotBoard;

const StGlassWrapper = styled(STCOMBoxWrapper)`
  min-width: 30rem;
  width: calc(50% - 1rem);
  max-width: 59rem;
  &:not(:last-child):hover {
    outline: 2px solid ${({ theme }) => theme.colors.dark_spring_green};
  }
  /* min-height: 45.4rem; */
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    min-height: 33rem;
  }
`;

const StLogoCyclicArbBot = styled(LogoCyclicArbBot)`
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 4rem;
  }
`;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3.6rem 4.6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2.8rem 3rem;
    gap: 1.2rem;
  }
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.9rem 2.7rem;
  }
`;

const StBotInfo = styled.section`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding-bottom: 2rem;
  margin-bottom: 0.5rem;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.not_important};

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 1.2rem;
    margin-bottom: 0;
  }
`;

const StSubscriber = styled.p`
  color: ${({ theme }) => theme.colors.darkgray};
  ${({ theme }) => theme.fonts.body_2_auto};
`;

const StBotInfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    color: ${({ theme }) => theme.colors.sub_white};
    ${({ theme }) => theme.fonts.body_2_auto};
  }
`;

const StBotName = styled.p`
  ${({ theme }) => theme.fonts.title_2a};
  color: ${({ theme }) => theme.colors.black};

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    ${({ theme }) => theme.fonts.body_2_semibold};
  }
`;

const StTotalProfitsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StTotalPRofits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  & > label {
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.body_1};
    line-height: 100%;
  }
  & > p {
    color: ${({ theme }) => theme.colors.positive};
    ${({ theme }) => theme.fonts.title_1};
  }

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0.1rem;
    & > label {
      ${({ theme }) => theme.fonts.body_2_semibold};
    }
    & > p {
      color: ${({ theme }) => theme.colors.positive};
      ${({ theme }) => theme.fonts.title_2a};
    }
  }
`;

const StBotSummaryValue = styled.div`
  display: flex;
  justify-content: space-between;
  & div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    & > label {
      color: ${({ theme }) => theme.colors.black};
      ${({ theme }) => theme.fonts.body_2_semibold};
      @media (${({ theme }) => theme.breakpoints.mobile}) {
        ${({ theme }) => theme.fonts.caption};
      }
    }
    & > p {
      color: ${({ theme }) => theme.colors.darkgray};
      ${({ theme }) => theme.fonts.body_2_bold};
      @media (${({ theme }) => theme.breakpoints.mobile}) {
        ${({ theme }) => theme.fonts.caption};
      }
    }

    &:nth-of-type(3) {
      align-items: end;
    }
  }
`;

const StBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const StOperated = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 0.5rem;
  & label {
    color: ${({ theme }) => theme.colors.not_important};
    ${({ theme }) => theme.fonts.body_2_auto};
    @media (${({ theme }) => theme.breakpoints.mobile}) {
      ${({ theme }) => theme.fonts.caption};
    }
  }

  & > img {
    width: 4.5rem;
    @media (${({ theme }) => theme.breakpoints.mobile}) {
      width: 2.8rem;
    }
  }
`;

const StDeposit = styled(STCOMActiveBtn)`
  padding: 1.25rem 3.7rem;
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.2rem 3.7rem;
    ${({ theme }) => theme.fonts.small_phrase};
  }
`;

const StComingSoon = styled.div`
  ${({ theme }) => theme.fonts.title_0_pre};
  color: ${({ theme }) => theme.colors.spring_green};
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
