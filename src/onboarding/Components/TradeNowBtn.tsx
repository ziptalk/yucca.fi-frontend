import styled from '@emotion/styled';
import { IcTradeArrow } from '../../common/assets/0_index';
import { useNavigate } from 'react-router-dom';

const TradeNowBtn = () => {
  const navigate = useNavigate();
  return (
    <StTradeNowBtn
      type='button'
      onClick={() => {
        navigate('/tradeBots');
      }}
    >
      <span>Trade Now</span>
      <IcTradeArrow />
    </StTradeNowBtn>
  );
};

export default TradeNowBtn;

const StTradeNowBtn = styled.button`
  display: flex;
  gap: 0.5rem;
  padding: 1.4rem 2.2rem;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark_spring_green};
  width: fit-content;
  height: fit-content;
  border-radius: 100px;

  & > span {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.kumbh_snas_18_semi};
  }

  &:hover {
    background: linear-gradient(125deg, #fc954b 1%, #f45dd3 99%);
  }
`;
