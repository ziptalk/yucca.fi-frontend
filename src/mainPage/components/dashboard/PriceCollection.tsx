import styled from '@emotion/styled';
import { IDashboard } from '../../types/dashboardType';
import { formatPercentValue } from '../../../common/utils/formatPercentValue';
import { formatUnits } from '../../../common/utils/formatUnits';
import { useTokenInfo } from '../../../wallet/hooks/useTokenInfo';
import { WKLAYtokenAddress } from '../../../common/contracts/tokenAddress';

const PriceCollection = ({
  data,
  qveTokenBalance,
  balance,
}: {
  data: IDashboard;
  qveTokenBalance: number | undefined;
  balance: string;
}) => {
  const { symbol } = useTokenInfo(WKLAYtokenAddress);
  return (
    <StContainer>
      <StTopLeft>
        <StTitle>PnL(%)</StTitle>
        <StPrice>
          <StColor isPositive={data.total_pnl >= 0}>
            {formatPercentValue(data.total_pnl)}%
          </StColor>
        </StPrice>
      </StTopLeft>
      <StTopRight>
        <StTitle>To be repaid qveToken</StTitle>
        <StPrice>{formatUnits(data.total_balance * 0.8)}</StPrice>
      </StTopRight>
      <StBottomLeft>
        <StTitle> {symbol} in my wallet</StTitle>
        <StPrice>{formatUnits(balance)}</StPrice>
      </StBottomLeft>
      <StBottomRight>
        <StTitle>qveToken in my wallet</StTitle>
        <StPrice>{qveTokenBalance && formatUnits(qveTokenBalance)}</StPrice>
      </StBottomRight>
    </StContainer>
  );
};

export default PriceCollection;

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white_opacity};
  border-radius: 13px;
  border: 2.4rem solid ${({ theme }) => theme.colors.white_opacity};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const StInnerBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StTopLeft = styled(StInnerBox)`
  border-right: 1px dashed ${({ theme }) => theme.colors.not_important};
  padding-right: 2.4rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.not_important};
  padding-bottom: 2.4rem;
`;

const StTopRight = styled(StInnerBox)`
  padding-left: 2.4rem;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.not_important};
  padding-bottom: 2.4rem;
`;

const StBottomLeft = styled(StInnerBox)`
  border-right: 1px dashed ${({ theme }) => theme.colors.not_important};
  padding-right: 2.4rem;
  padding-top: 2.4rem;
`;

const StBottomRight = styled(StInnerBox)`
  padding-left: 2.4rem;
  padding-top: 2.4rem;
`;

const StTitle = styled.p`
  ${({ theme }) => theme.fonts.index_steptitle};
  color: ${({ theme }) => theme.colors.gray};
`;

const StPrice = styled.p`
  ${({ theme }) => theme.fonts.body_0};
  color: ${({ theme }) => theme.colors.gray};
  justify-self: flex-end;
  align-self: flex-end;
`;

const StColor = styled.span<{ isPositive: boolean }>`
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.positive : theme.colors.negative};
  &::before {
    content: '${({ isPositive }) => (isPositive ? '+' : '-')}';
  }
`;
