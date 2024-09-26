import styled from '@emotion/styled';
import { STCOMBoxWrapper } from '../common/styles/commonStyleComs';
import { transformStyles } from '../common/styles/transformStyles';
import { onboardingBackImg1 } from './assets/0_index';
export const MainContainer = styled.div`
  width: 100vw;
  max-width: 120rem;
  min-width: 89.6rem;
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
    padding: 6.4rem 2.4rem 0;
  }
`;

export const PreTitle = styled.div`
  ${({ theme }) => theme.fonts.mont_18_medium};
  color: ${({ theme }) => theme.colors.gray};
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    ${({ theme }) => theme.fonts.body_2m};
    margin-top: 1rem;
    margin-bottom: 0.2rem;
  }
`;
export const Title = styled.div`
  max-width: 70rem;
  ${({ theme }) => theme.fonts.title_0};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  word-wrap: break-word;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    ${({ theme }) => theme.fonts.title_2};
  }
`;

export const Section1 = {
  Container: styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ContentLayout: styled.div`
    min-width: 76.9rem;
    width: 100%;
    max-width: 132.8rem;
    margin: 0 0.8rem 7.8rem;
    display: flex;
    flex-direction: column;
    gap: 5.4rem;
  `,
  QVEIntroduce: styled.div`
    display: flex;
    flex-direction: column;
    & > h1 {
      ${({ theme }) => theme.fonts.kumbh_snas_22};
      color: ${({ theme }) => theme.colors.deep_dark_green};
      margin-top: 1.2rem;
    }

    & > p {
      max-width: 51.5rem;
      word-wrap: break-word;
      ${({ theme }) => theme.fonts.poppins_18};
      color: ${({ theme }) => theme.colors.gray};
      margin-top: 0.4rem;
    }
  `,
  Ecosystem: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 15vh;

    & > p {
      ${({ theme }) => theme.fonts.kumbh_snas_18_semi};
      color: ${({ theme }) => theme.colors.deep_dark_green};
    }
  `,
  TotalValue: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-width: 30rem;
    width: fit-content;
    height: fit-content;
    border-radius: 40px;
    padding: 2rem 4rem;
    background-color: ${({ theme }) => theme.colors.white};
    & > p:nth-of-type(1) {
      ${({ theme }) => theme.fonts.body_2m};
    }
    & > p:nth-of-type(2) {
      ${({ theme }) => theme.fonts.title_1};
      color: ${({ theme }) => theme.colors.deep_dark_green};
    }
  `,
  Bottom: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    & nav {
      position: absolute;
      left: 0;
      display: flex;
      gap: 1rem;
      & > * {
        cursor: pointer;
      }
    }

    & p {
      ${({ theme }) => theme.fonts.body_3m};
    }
  `,
  Eco: styled.span`
    ${({ theme }) => theme.fonts.body_2m};
  `,
  BackgroundImg1: styled.div`
    width: 97rem;
    height: 98rem;
    position: absolute;
    right: -25rem;
    z-index: -1;
    background-image: url(${onboardingBackImg1});
    background-size: cover;
    background-repeat: no-repeat;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      width: 112.8rem;
      height: 101rem;
      top: -5rem;
      right: -35rem;
      opacity: 0.6;
    }
  `,
  BackgroundImg2: styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    right: -30%;
    z-index: -1;
  `,
};

export const Section2 = {
  Container: styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 14rem;
    margin-top: 10rem;
    & > p {
      ${({ theme }) => theme.fonts.mont_18_medium};
      color: ${({ theme }) => theme.colors.darkgray};
      margin-bottom: 1rem;

      @media (${({ theme }) => theme.breakpoints.tablet}) {
        flex: 0 1 calc(50% - 2rem); /* 2개씩 wrap되도록 설정 */
      }
    }
  `,
  Contents: styled.div`
    width: 100%;
    margin: 6.4rem 0 12.8rem;
    display: flex;
    justify-content: center;
    gap: 8rem;

    @media (${({ theme }) => theme.breakpoints.tablet}) {
      gap: 8rem;
    }
    @media (${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;
    }
  `,
  Wrapper: styled(STCOMBoxWrapper)`
    background-color: ${({ theme }) => theme.colors.spring_green};
  `,
  AboutItem: styled.div`
    min-width: 28.2em;
    max-width: 38rem;
    width: 100%;
    height: 45.5rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
  `,
  IconContainer: styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;
    margin-bottom: 3.8rem;
    & > span {
      color: ${({ theme }) => theme.colors.white};
      ${({ theme }) => theme.fonts.poppins_18};
    }
  `,
  AbouItemLayout: styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  ItemTitle: styled.p`
    ${({ theme }) => theme.fonts.kumbh_snas_28};
    color: ${({ theme }) => theme.colors.white};
    word-wrap: break-word;
    padding-bottom: 1rem;
    border-bottom: 2px solid;
  `,
  Explain: styled.p`
    ${({ theme }) => theme.fonts.poppins_18};
    word-wrap: break-word;
    color: ${({ theme }) => theme.colors.background_pink};
    height: 8.4rem;
  `,
};

export const Section3 = {
  Container: styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  InTro: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  sufTitle: styled.p`
    ${({ theme }) => theme.fonts.body_3};
    color: ${({ theme }) => theme.colors.not_important};
  `,
  BackgroundImg: styled.img`
    width: 127rem;
    position: absolute;
    top: -30rem;
    left: -55rem;
    transform: rotate(15deg);
    z-index: -1;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      width: 44rem;
      top: -15rem;
      left: -20rem;
      transform: rotate(0deg);
    }
  `,
  BackgroundImg2: styled.img`
    width: 57rem;
    position: absolute;
    bottom: -30rem;
    right: -170px;
    transform: rotate(11deg);
    z-index: -1;
  `,

  SubTitle: styled.p`
    ${({ theme }) => theme.fonts.body_3};
    color: ${({ theme }) => theme.colors.gray};
  `,
};

export const Section4 = {
  Container: styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ImgContainer: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin: 6.4rem 0 14rem;
    @media (${({ theme }) => theme.breakpoints.tablet}) {
      width: 85%;
      flex-wrap: wrap;
    }
  `,
  ItemWrapper: styled(STCOMBoxWrapper)`
    max-width: 27rem;
    min-width: 27rem;
    height: 27rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.3rem;
    ${({ theme }) => theme.fonts.kumbh_snas_20};
    color: white;
    background-color: ${({ theme }) => theme.colors.spring_green};

    & > img {
      width: 10rem;
      height: 10rem;
    }
  `,
  BackgroundImg: styled.img`
    width: 57rem;
    position: absolute;
    top: -30rem;
    right: -180px;
    z-index: -1;

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      top: auto;
      bottom: -10rem;
      right: 50px;
    }
  `,
};

export const Mobile = {
  ContentLayout: styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    & > h1 {
      width: 34rem;
      text-align: center;
      word-wrap: break-word;
      ${({ theme }) => theme.fonts.title_TVL};
    }
    & > p {
      width: 38.2rem;
      text-align: center;
      ${({ theme }) => theme.fonts.body_3};
      color: ${({ theme }) => theme.colors.not_important};
      margin-top: 1rem;
    }
  `,
  GlassWrapper: styled.div`
    border-radius: 20px;
    width: 100%;
    height: 12rem;
    color: ${({ theme }) => theme.colors.sub_white};
    margin-top: 5.1rem;
    margin-bottom: 2.4rem;
    z-index: 1;
    background: rgba(0, 0, 0, 0.1);
    border: none;
    backdrop-filter: saturate(130%) blur(10px);
    -webkit-backdrop-filter: blur(10px);
  `,
  ValueContainer: styled.div`
    position: relative;
    width: 100%;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  `,
  ValueLabel: styled.p`
    ${({ theme }) => theme.fonts.body_2m};
  `,
  Value: styled.p`
    ${({ theme }) => theme.fonts.title_2a};
    color: white;
  `,
  SectionItemBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    padding: 3.2rem 3rem;
  `,
  Section4ItemBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    padding: 3.2rem 0;
  `,
  Body1: styled.p`
    margin-top: 1.8rem;
    ${({ theme }) => theme.fonts.body_1};
  `,
  Explain: styled.p`
    ${({ theme }) => theme.fonts.body_2};
    text-align: center;
  `,
  AboutItem: styled.p`
    ${({ theme }) => theme.fonts.body_0m};
  `,
};