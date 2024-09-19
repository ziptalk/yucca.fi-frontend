import styled from '@emotion/styled';
import { transformStyles } from '../common/styles/transformStyles';
export const MainContainer = styled.div`
  width: 100vw;
  max-width: 120rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 9.5rem 6.4rem 0;

  ${transformStyles}

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 375px;
    max-width: 480px;
    margin: 0;
    padding: 6.4rem 2.4rem 0;
  }
`;

export const Announcement = {
  GlassWrapper: styled.div`
    position: relative;
    margin-top: 6.4rem;
    width: 100%;
    height: 21.8rem;
    overflow: hidden;
    z-index: -1;
    background: linear-gradient(
      266deg,
      #eeb8c2 14.03%,
      #f4c8da 33.02%,
      #f45dd3 99.76%,
      #f45dd3 100.39%
    );
    border-radius: 20px;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      height: 16rem;
    }
  `,
  Container: styled.div`
    padding: 4.5rem 3rem;
    @media (${({ theme }) => theme.breakpoints.mobile}) {
      padding: 2rem;
    }
  `,
  Background: styled.img`
    height: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.6;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      right: -10rem;
      opacity: 0.8;
    }
  `,
  Label: styled.div`
    width: fit-content;
    height: auto;
    padding: 0.9rem;
    border-radius: 93.75px;
    background-color: transparent;
    border: 0.1rem solid #fff;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.caption};
    margin-bottom: 1.2rem;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      padding: 0.7rem 1.1rem;
    }
  `,
  Text: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_1};
    @media (${({ theme }) => theme.breakpoints.mobile}) {
      ${({ theme }) => theme.fonts.body_1};
    }
  `,
};

export const MainContent = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 4.7rem;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      margin-top: 2.4rem;
    }
  `,
};
