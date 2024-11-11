import Header from '../common/components/Header';
import * as St from './Onboarding.style.tsx';

import { Botanix, yuccaLogoOnce, yuccafiBackground } from './assets/0_index';
import TradeNowBtn from './components/TradeNowBtn.tsx';
import Footer from '../common/components/Footer.tsx';
import { useEffect, useRef, useState } from 'react';
import useMobile from '../common/hooks/useMobile.tsx';
// import { getContractTokenBalance } from '../common/contracts/contractFunctions.ts';
import axios from 'axios';
import { formatPriceValue } from '../common/utils/formatPriceValue.ts';

import styled from '@emotion/styled';
import LinkBtns from './components/LinkBtns.tsx';
import OnBoarding2 from './components/frames/Onboarding2.tsx';
import OnBoarding3 from './components/frames/Onboarding3.tsx';
import OnBoarding4 from './components/frames/Onboarding4.tsx';

export interface IOnboardingProps {
  isMobile: boolean;
}

const OnBoarding = () => {
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [isHeaderBgActive, setIsHeaderBgActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mainContainerRef.current) {
        const mainContainerTop =
          mainContainerRef.current.getBoundingClientRect().top;
        setIsHeaderBgActive(mainContainerTop < 90);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    isTop: boolean = false
  ) => {
    if (ref.current) {
      const headerOffset = 100;
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      if (isTop) {
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const isMobile = useMobile();

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
        section4Ref={section4Ref}
      />
      <StOnboardingBackground isHeaderBgActive={isHeaderBgActive}>
        <OnBoarding1 isMobile={isMobile} />
      </StOnboardingBackground>
      <St.MainContainer ref={mainContainerRef}>
        <div ref={section2Ref} style={{ width: '100vw' }}>
          <OnBoarding2 isMobile={isMobile} />
        </div>
        <div ref={section3Ref} style={{ width: '100vw' }}>
          <OnBoarding3 isMobile={isMobile} />
        </div>
        <div ref={section4Ref} style={{ width: '100vw' }}>
          <OnBoarding4 isMobile={isMobile} />
        </div>
        <Footer />
      </St.MainContainer>
    </>
  );
};

const OnBoarding1 = ({ isMobile }: IOnboardingProps) => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const [totalValueLocked, setTotalValueLocked] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get(`${base_url}/yucca/onboarding`);
      // const total_value_locked = await getContractTokenBalance();
      setTotalValueLocked(formatPriceValue(data.total_value_locked));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <St.Section1.Container>
      {isMobile ? (
        <St.Mobile.ContentLayout>
          <h1>Quant Vault Escrow Protocol</h1>
          <p>
            A hybrid DeFi platform combining arbitrage trading bots and
            liquidity staking protocols in Botanix Labs.
          </p>
          <St.Mobile.GlassWrapper>
            <St.Mobile.ValueContainer>
              <St.Mobile.ValueLabel>Total Value Locked</St.Mobile.ValueLabel>
              <St.Mobile.Value>$ {totalValueLocked}</St.Mobile.Value>
            </St.Mobile.ValueContainer>
          </St.Mobile.GlassWrapper>
          <St.Mobile.Ecosystem>
            <p>Ecosystem</p>
            <Botanix />
          </St.Mobile.Ecosystem>
          {/* <TradeNowBtn /> */}
        </St.Mobile.ContentLayout>
      ) : (
        <St.Section1.ContentLayout>
          <St.Section1.QVEIntroduce>
            <St.Section1.Logo src={yuccaLogoOnce + '?a=' + Math.random()} />
            <h1>Quant Vault Escrow Protocol</h1>
            <p>
              A hybrid DeFi platform combining arbitrage trading bots and
              liquidity staking protocols in Botanix Labs.
            </p>
            <St.Section1.Ecosystem>
              <p>Ecosystem</p>
              <Botanix />
            </St.Section1.Ecosystem>
          </St.Section1.QVEIntroduce>
        </St.Section1.ContentLayout>
      )}
      <St.Section1.Bottom>
        {isMobile ? (
          <St.Mobile.Bottom>
            <TradeNowBtn />
            <LinkBtns />
          </St.Mobile.Bottom>
        ) : (
          <>
            <LinkBtns />
            <St.Section1.TotalValue>
              <p>Total Value Locked</p>
              <p>$ {totalValueLocked}</p>
            </St.Section1.TotalValue>
          </>
        )}
      </St.Section1.Bottom>
    </St.Section1.Container>
  );
};

export default OnBoarding;

const StOnboardingBackground = styled.div<{ isHeaderBgActive: boolean }>`
  background-image: ${({ isHeaderBgActive }) =>
    isHeaderBgActive ? `` : `url(${yuccafiBackground})`};

  background-size: 100% 100vh;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
