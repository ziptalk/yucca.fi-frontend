import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

export const VIEW = {
  TRADE_BOTS: 'Trade Bots',
  DASHBOARD: 'Dashboard',
};

const SelectView = ({ view }: { view: string }) => {
  const navigate = useNavigate();

  const handleView = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === VIEW.TRADE_BOTS) {
      navigate('/tradeBots');
    } else {
      navigate('/dashboard');
    }
  };
  return (
    <StContainer>
      <StBtn
        selectView={view}
        type='button'
        name={VIEW.TRADE_BOTS}
        onClick={handleView}
      >
        {VIEW.TRADE_BOTS}
      </StBtn>
      <StBtn
        selectView={view}
        type='button'
        name={VIEW.DASHBOARD}
        onClick={handleView}
      >
        {VIEW.DASHBOARD}
      </StBtn>
    </StContainer>
  );
};

export default SelectView;

const StContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.pink_sub};
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: space-between;
    border-bottom: none;
  }
`;

const StBtn = styled.button<{
  selectView: string;
  name: string;
}>`
  position: relative;
  width: 17.9rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  border-radius: 20px 20px 0 0;
  border: none;

  ${({ selectView, name }) =>
    selectView === name
      ? css`
          background: linear-gradient(
              180deg,
              #fff -40%,
              rgba(255, 255, 255, 0.1) 100%
            ),
            linear-gradient(
              90deg,
              #fff -20%,
              #ff6e99c2 30.74%,
              #fb905b90 80.26%,
              #fff 120%
            );

          &::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: 0;
            border-radius: 21px 21px 0 0;
            background: linear-gradient(
              180deg,
              #ff6e99b5 0%,
              #ffffff 180%
            ); /* 그라디언트 보더 */
            z-index: -1; /* 버튼 내용보다 뒤에 위치 */
            padding: 2px; /* Border의 두께 */
            box-sizing: border-box; /* padding이 border-box로 작동하도록 설정 */
          }
        `
      : css`
          background-color: transparent;
        `}

  color: ${({ selectView, name, theme }) =>
    selectView === name ? theme.colors.white : theme.colors.gray};

  cursor: pointer;
  ${({ theme }) => theme.fonts.body_1};

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(50% - 0.7rem);
    height: 5rem;
    border-radius: 5px;
    border: ${({ selectView, name, theme }) =>
      selectView === name ? 'none' : `2px solid ${theme.colors.pink_sub}`};
    color: ${({ selectView, name, theme }) =>
      selectView === name ? theme.colors.white : theme.colors.gray};
    ${({ theme }) => theme.fonts.body_2_semibold};

    border-radius: 20px;

    &::before {
      border-radius: 21px;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
    }
  }
`;
