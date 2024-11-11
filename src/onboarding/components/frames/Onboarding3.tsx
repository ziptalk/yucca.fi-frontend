/** @jsxImportSource @emotion/react */
import * as St from '../../Onboarding.style';
import { IOnboardingProps } from '../..';
import { onboarding3_mobile } from '../../assets/Onboarding3/0_index';
import styled from '@emotion/styled';
import {
  onboarding3Left,
  onboarding3Middle,
  onboarding3Right,
} from '../../assets/Onboarding3/0_index';
import { useRef } from 'react';
import useIntersectionObserver from '../../../common/hooks/useIntersectionObserver';
import { css, keyframes } from '@emotion/react';

const OnBoarding3 = ({ isMobile }: IOnboardingProps) => {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  const isVisible1 = useIntersectionObserver(imgRef1, { threshold: 0.1 });
  const isVisible2 = useIntersectionObserver(imgRef2, { threshold: 0.5 });
  const isVisible3 = useIntersectionObserver(imgRef3, { threshold: 0.8 });
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
              isVisible1 &&
                css`
                  animation: ${slideUp} 1.5s ease-out forwards; // 조건부 애니메이션
                `,
              {
                opacity: 0,
              },
            ]}
          />
          <img
            ref={imgRef2}
            src={onboarding3Middle}
            css={[
              isVisible2 &&
                css`
                  animation: ${slideUp} 1.5s ease-out forwards; // 조건부 애니메이션
                `,
              {
                opacity: 0,
              },
            ]}
          />
          <img
            ref={imgRef3}
            src={onboarding3Right}
            css={[
              isVisible3 &&
                css`
                  animation: ${slideUp} 1.5s ease-out forwards; // 조건부 애니메이션
                `,
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
  margin: 10rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  & img {
    height: 100%;
  }
  & div {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white_opacity};
    border-radius: 40px;
  }
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
