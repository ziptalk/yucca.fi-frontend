import styled from '@emotion/styled';
import { transformStyles } from './transformStyles';

export const STCOMBoxWrapper = styled.div`
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const STCOMGlassWrapper = styled.div`
  border-radius: 40px;
  border: 0.1rem solid transparent;
  background-image: linear-gradient(
      144deg,
      rgba(0, 0, 0, 0.85) -9.46%,
      rgba(0, 0, 0, 0.3) 115.25%
    ),
    linear-gradient(
      300deg,
      rgba(255, 255, 255, 0.1) -9.46%,
      rgba(255, 255, 255, 0.8) 115.25%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const STCOMActiveBtn = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.dark_spring_green};
  border-radius: 100px;
  ${({ theme }) => theme.fonts.kumbh_snas_18_medi};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark_pink};
  }
  &:disabled {
    background-color: #ccc;
  }
`;

export const STCOMGreyBtn = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.not_important};
  border-radius: 100px;
  ${({ theme }) => theme.fonts.body_2_bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const STCOMBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  /* padding-top: 10rem; */
  padding: 5rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;

  ${transformStyles}

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10rem 0 0;
  }
`;

export const STCOMBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 29;
  background-color: #545b67;
  opacity: 0.7;
`;
