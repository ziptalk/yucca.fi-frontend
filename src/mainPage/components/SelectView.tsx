import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IcDashboard, IcSwap, IcTradeBots } from '../assets/0_index';

export const VIEW = {
  TRADE_BOTS: 'Trade Bots',
  DASHBOARD: 'Dashboard',
  Swap: 'Swap on DEX',
};

const SelectView = ({ view }: { view: string }) => {
  const navigate = useNavigate();

  const handleView = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.name) {
      case VIEW.TRADE_BOTS:
        navigate('/tradeBots');
        break;
      case VIEW.Swap:
        navigate('/swap');
        break;
      case VIEW.DASHBOARD:
        navigate('/dashboard');
        break;
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
        <StIcon>{view === VIEW.TRADE_BOTS ? <IcTradeBots /> : <></>}</StIcon>
        {VIEW.TRADE_BOTS}
      </StBtn>
      <StBtn
        selectView={view}
        type='button'
        name={VIEW.Swap}
        onClick={handleView}
      >
        <StIcon>{view === VIEW.Swap ? <IcSwap /> : <></>}</StIcon>
        {VIEW.Swap}
      </StBtn>
      <StBtn
        selectView={view}
        type='button'
        name={VIEW.DASHBOARD}
        onClick={handleView}
      >
        <StIcon>{view === VIEW.DASHBOARD ? <IcDashboard /> : <></>}</StIcon>
        {VIEW.DASHBOARD}
      </StBtn>
    </StContainer>
  );
};

export default SelectView;

const StContainer = styled.div`
  display: flex;
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
  border: none;
  background-color: transparent;

  color: ${({ selectView, name, theme }) =>
    selectView === name ? theme.colors.deep_dark_green : '#AEAEAE'};
  border-bottom: ${({ selectView, name }) =>
    selectView === name ? '2px solid #337357' : ''};
  cursor: pointer;
  ${({ theme }) => theme.fonts.body_1};

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(50% - 0.7rem);
    height: 5rem;
    border-radius: 10px;
    border: ${({ selectView, name, theme }) =>
      selectView === name ? 'none' : `2px solid ${theme.colors.pink_sub}`};
    color: ${({ selectView, name, theme }) =>
      selectView === name ? theme.colors.white : theme.colors.gray};
    ${({ theme }) => theme.fonts.body_2_semibold};

    &::before {
      border-radius: 11px;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
    }
  }
`;

const StIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
