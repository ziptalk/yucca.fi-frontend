/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { IOnboardingProps } from '../..';
import * as St from '../../Onboarding.style';
import { ONBOARDING4 } from '../../constants/constants';
import TradeNowBtn from '../TradeNowBtn';
import { useRef } from 'react';
import useIntersectionObserver from '../../../common/hooks/useIntersectionObserver';
import { IcRightArrow } from '../../assets/Onboarding4/0_index';
import styled from '@emotion/styled';

const OnBoarding4 = ({ isMobile }: IOnboardingProps) => {
  const divRef = useRef(null);
  const isVisible = useIntersectionObserver(divRef, { threshold: 0.8 });

  return (
    <St.Section4.Container ref={divRef}>
      {/* <St.Section4.BackgroundImg
        src={onBoardingBackImg3}
        alt='background-img'
      /> */}
      <St.PreTitle>Asset Management Process</St.PreTitle>
      <St.Title>Automated Trading Strategy</St.Title>
      <St.Section4.ImgContainer>
        {isMobile ? (
          <>
            {ONBOARDING4.map((item) => (
              <St.Mobile.Section4ItemBox key={item.label}>
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{ width: '5rem', height: '5rem' }}
                />
                <St.Mobile.Body1>{item.label}</St.Mobile.Body1>
                <St.Mobile.Explain>{item.explain}</St.Mobile.Explain>
              </St.Mobile.Section4ItemBox>
            ))}
          </>
        ) : (
          <>
            {ONBOARDING4.map((item, index) => (
              <StItemWrapper
                css={[
                  isVisible &&
                    css`
                      animation: ${slide} 1.5s ease-out forwards;
                      animation-delay: ${index / 2}s;
                    `,
                  {
                    opacity: 0,
                  },
                ]}
              >
                <St.Section4.ItemWrapper key={item.label}>
                  <img src={item.icon} alt={item.label} />
                  {item.label}
                </St.Section4.ItemWrapper>
                {index !== 3 && <IcRightArrow />}
              </StItemWrapper>
            ))}
          </>
        )}
      </St.Section4.ImgContainer>

      <TradeNowBtn />
    </St.Section4.Container>
  );
};

export default OnBoarding4;

const slide = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const StItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
