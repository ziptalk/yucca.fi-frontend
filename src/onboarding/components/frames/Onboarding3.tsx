/** @jsxImportSource @emotion/react */
import * as St from '../../Onboarding.style';
import { IOnboardingProps } from '../..';
import {
  IcCurvedArrowDownLeft,
  IcCurvedArrowDownRight,
  IcCurvedArrowUpLeft,
  IcCurvedArrowUpRight,
  IcHome,
  IcWaveArrow,
  IcWaveLine,
  onboarding3_mobile,
} from '../../assets/Onboarding3/0_index';
import styled from '@emotion/styled';
import {
  onboarding3Left,
  onboarding3Right,
} from '../../assets/Onboarding3/0_index';
import { useRef } from 'react';
import { css, keyframes } from '@emotion/react';
import useScroll from '../../../common/hooks/useScroll';

const OnBoarding3 = ({ isMobile }: IOnboardingProps) => {
  const scrollY = useScroll();
  const imgRef1 = useRef(null);
  const imgRef3 = useRef(null);

  const SCROLLPOINT1 = 1200;
  const SCROLLPOINT2 = 1400;
  const SCROLLPOINT3 = 1500;
  const SCROLLPOINT4 = 1600;
  const SCROLLPOINT5 = 1700;

  return (
    <St.Section3.Container>
      <St.Section3.InTro>
        {isMobile ? (
          <St.PreTitle>Vaults Trading bots</St.PreTitle>
        ) : (
          <St.PreTitle>
            Yucca.fi offers various ‘vaults’, which are operated by the trading
            bots
          </St.PreTitle>
        )}
        <St.Title>Assets Into The Vault</St.Title>
        <St.Section3.SubTitle>
          ( Arbitrage is one of the strategies we use )
        </St.Section3.SubTitle>
      </St.Section3.InTro>
      {isMobile ? (
        <img
          style={{ width: '38.2rem', margin: '6.4rem 0 13rem' }}
          src={onboarding3_mobile}
        />
      ) : (
        <StWrapper>
          <img
            ref={imgRef1}
            src={onboarding3Left}
            css={[
              scrollY > SCROLLPOINT1 ? slideUpAnimation : slideDownAnimation,
              {
                opacity: 0,
              },
            ]}
          />
          <StMiddle.wrapper
            css={[
              scrollY > SCROLLPOINT2 ? slideUpAnimation : slideDownAnimation,
              {
                opacity: 0,
              },
            ]}
          >
            <StMiddle.column>
              <IcCurvedArrowDownLeft
                css={[
                  scrollY > SCROLLPOINT3
                    ? slideUpAnimation
                    : slideDownAnimation,
                  {
                    opacity: 0,
                  },
                ]}
              />
              <StMiddle.box>Arb bot in Botanix</StMiddle.box>
              <IcCurvedArrowUpLeft
                css={[
                  scrollY > SCROLLPOINT3
                    ? slideUpAnimation
                    : slideDownAnimation,
                  {
                    opacity: 0,
                  },
                ]}
              />
            </StMiddle.column>
            <StMiddle.column>
              <div>
                <IcHome />
                <p>Buy low in</p>
                <p>Market A</p>
              </div>
              <StMiddle.column
                css={[
                  scrollY > SCROLLPOINT4
                    ? slideUpAnimation
                    : slideDownAnimation,
                  {
                    opacity: 0,
                  },
                ]}
              >
                <IcWaveLine />
                <p>Arbitrage gain</p>
                <IcWaveArrow />
              </StMiddle.column>
              <div>
                <IcHome />
                <p>Buy low in</p>
                <p>Market B</p>
              </div>
            </StMiddle.column>
            <StMiddle.column>
              <IcCurvedArrowDownRight
                css={[
                  scrollY > SCROLLPOINT3
                    ? slideUpAnimation
                    : slideDownAnimation,
                  {
                    opacity: 0,
                  },
                ]}
              />
              <StMiddle.box>Arb bot in Dex/Cex</StMiddle.box>
              <IcCurvedArrowUpRight
                css={[
                  scrollY > SCROLLPOINT3
                    ? slideUpAnimation
                    : slideDownAnimation,
                  {
                    opacity: 0,
                  },
                ]}
              />
            </StMiddle.column>
          </StMiddle.wrapper>
          <img
            ref={imgRef3}
            src={onboarding3Right}
            css={[
              scrollY > SCROLLPOINT5 ? slideUpAnimation : slideDownAnimation,
              {
                opacity: 0,
              },
            ]}
          />
        </StWrapper>
      )}
    </St.Section3.Container>
  );
};

export default OnBoarding3;

const StWrapper = styled.div`
  width: 100%;
  height: 36rem;
  margin: 10rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  & img {
    height: 100%;
  }
  ${({ theme }) => theme.fonts.body_3};
  text-align: center;
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(100px);
    opacity: 0;
  }
`;

const slideUpAnimation = css`
  animation: ${slideUp} 1.5s ease-out forwards;
`;

const slideDownAnimation = css`
  animation: ${slideDown} 1.5s ease-out forwards;
`;

const StMiddle = {
  wrapper: styled.div`
    width: 70rem;
    height: 100%;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.white_opacity};
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
  `,
  column: styled.div`
    width: 100%;
    padding: 0 2rem;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `,
  box: styled.div`
    width: 18rem;
    height: 8rem;
    background-color: ${({ theme }) => theme.colors.normal_pink};
    color: white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
  `,
};
