import styled from '@emotion/styled';
import { IcDropUp, IcDropdown } from '../../assets/0_index';
import { useState } from 'react';
import { IDetail } from '../../types/pnlChartType';
import { formatPercentValue } from '../../../common/utils/formatPercentValue';

const DropDown = ({ detailData }: { detailData: IDetail }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StContainer
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      {isOpen ? (
        <StDropdown.Container>
          <StDropdown.Select>
            Detailed View
            <IcDropUp />
          </StDropdown.Select>
          <StDropdown.List>
            <li>
              <span>APY</span>
              <span>{formatPercentValue(detailData.apy)}%</span>
            </li>
            <li>
              <span>Win rate</span>
              <span>{formatPercentValue(detailData.winRate)}%</span>
            </li>
            <li>
              <span>MDD</span>
              <span>{formatPercentValue(detailData.mdd)}%</span>
            </li>
            <li>
              <span>Health factor</span>
              <span>{formatPercentValue(detailData.mdd)}</span>
            </li>
            <li>
              <StDropdown.Notice>
                If the health factor drops below 1, liquidation occurs.
              </StDropdown.Notice>
            </li>
          </StDropdown.List>
        </StDropdown.Container>
      ) : (
        <StDropUp>
          Detailed View
          <IcDropdown />
        </StDropUp>
      )}
    </StContainer>
  );
};

export default DropDown;

const StContainer = styled.div`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.fonts.caption};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const StDropUp = styled(StContainer)`
  border-radius: 6px;
  padding: 1.6rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StDropdown = {
  Container: styled.div`
    position: relative;
    width: 100%;
    border-radius: 6px;
    padding: 1.6rem 1.6rem 3rem;
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.fonts.caption};
    background-color: ${({ theme }) => theme.colors.white};
  `,
  Select: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ theme }) => theme.fonts.caption};
    color: ${({ theme }) => theme.colors.dark_gray};
  `,
  List: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 3rem 0 0.4rem;
    gap: 1.6rem;
    & > li {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      & span {
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  `,
  Notice: styled.p`
    position: absolute;
    color: ${({ theme }) => theme.colors.light_gray};
    top: -0.8rem;
  `,
};
