import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { IBOTS, IBotPnl } from '../../types/dashboardType';
import { formatUnits } from '../../../common/utils/formatUnits';
import UserPnLChart from './UserPnLChart';
import { IcTriangleDown, IcTriangleUp } from '../../assets/0_index';
interface ITotalAmountProps {
  totalAmount: number;
  domesticRate: number;
  pnlData: IBotPnl[] | undefined;
  bots: IBOTS[];
}

const SELECT_OPTION = {
  bot3: {
    unit: 'BTC',
    label: 'Neutron Cyclic Bot',
  },
};

const TotalAmount = ({
  totalAmount,
  domesticRate,
  pnlData,
  bots,
}: ITotalAmountProps) => {
  const [openSelectOption, setOpenSelectOption] = useState(false);
  const [selected, setSelected] = useState(bots[0].bot_name);
  console.log(bots);

  const dropdownRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenSelectOption(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const findPnlDataByBotName = (botName: string) => {
    const bot = pnlData?.find((bot) => bot.bot_name === botName);
    return bot?.pnlData;
  };

  const render = () => {
    switch (selected) {
      case SELECT_OPTION.bot3.label:
        return (
          <>
            <StRenderHeader>
              <StTotalTokenValue>
                {formatUnits(totalAmount)} {SELECT_OPTION.bot3.unit}
              </StTotalTokenValue>
              <StTotalDollarValue>
                ≈ {formatUnits(totalAmount * domesticRate)} USD
              </StTotalDollarValue>
            </StRenderHeader>
            <UserPnLChart
              chartData={findPnlDataByBotName(SELECT_OPTION.bot3.label)}
            />
          </>
        );
        break;
      default:
        return (
          <>
            <StRenderHeader>
              <StTotalTokenValue>
                {formatUnits(totalAmount)} {SELECT_OPTION.bot3.unit}
              </StTotalTokenValue>
              <StTotalDollarValue>
                ≈ {formatUnits(totalAmount * domesticRate)} USD
              </StTotalDollarValue>
            </StRenderHeader>
            <UserPnLChart
              chartData={findPnlDataByBotName(SELECT_OPTION.bot3.label)}
            />
          </>
        );
        break;
    }
  };

  return (
    <StContainer>
      <StTitle>
        <label>Total Amount</label>
        <StSelectToken
          ref={dropdownRef}
          onClick={() => setOpenSelectOption(!openSelectOption)}
        >
          <StSelected>
            <span>{selected}</span>
            {openSelectOption ? <IcTriangleUp /> : <IcTriangleDown />}
          </StSelected>
          {openSelectOption && (
            <StSelectOption>
              {bots.map((bot) => {
                const { bot_name } = bot;
                return (
                  <StSelectItem
                    key={bot_name}
                    onClick={() => setSelected(bot_name)}
                  >
                    {bot_name}
                  </StSelectItem>
                );
              })}
            </StSelectOption>
          )}
        </StSelectToken>
      </StTitle>
      {render()}
    </StContainer>
  );
};

export default TotalAmount;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white_opacity};
  border-radius: 13px;
  padding: 1rem 2.5rem;
`;

const StTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  & > label {
    ${({ theme }) => theme.fonts.body_2m};
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const StSelectToken = styled.button`
  padding: 0 1rem;
  height: 3rem;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ theme }) => theme.fonts.caption};
  background-color: ${({ theme }) => theme.colors.background_pink};
  color: ${({ theme }) => theme.colors.pink_main};
  & span {
    padding: 0 1rem;
  }
`;

const StSelected = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StSelectOption = styled.div`
  position: absolute;
  width: max-content;
  border-radius: 10px;
  top: 3.4rem;
  gap: 1rem;
  display: flex;
  align-items: start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background_pink};
`;

const StSelectItem = styled.span`
  width: 100%;
  padding: 0 1rem;
  height: 3rem;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background_pink};
  z-index: 1;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light_pink};
  }
`;

const StRenderHeader = styled.div`
  display: flex;
  gap: 1rem;
`;

const StTotalTokenValue = styled.p`
  ${({ theme }) => theme.fonts.body_0};
  color: ${({ theme }) => theme.colors.dark_spring_green};
`;

const StTotalDollarValue = styled.p`
  ${({ theme }) => theme.fonts.body_1};
  color: ${({ theme }) => theme.colors.positive};
`;
