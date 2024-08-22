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
  justify-content: center;
  align-items: center;
  background: linear-gradient(125deg, #f45dd3 1%, #fc954b 99%);
  width: 16.7rem;
  height: 4.6rem;
  border-radius: 20px;

  & > span {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body_2m};
  }

  &:hover {
    background: linear-gradient(125deg, #fc954b 1%, #f45dd3 99%);
  }
`;
