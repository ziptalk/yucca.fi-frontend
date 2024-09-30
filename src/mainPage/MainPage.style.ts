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
      140deg,
      #041f151a 1.14%,
      #00b676 68.92%,
      #6d9f71 91.68%
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
  `,
  Label: styled.div`
    width: fit-content;
    height: auto;
    padding: 0.6rem 2rem;
    border-radius: 93.75px;
    background-color: ${({ theme }) => theme.colors.spring_green};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.poppins_18};
    margin-bottom: 1.2rem;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      padding: 0.7rem 1.1rem;
    }
  `,
  Text: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.kumbh_snas_34};
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
