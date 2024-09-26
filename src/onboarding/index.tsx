import Header from '../common/components/Header';
import * as St from './Onboarding.style.tsx';
import {
  Logo,
  // onBoardingBackImg2,
  // onBoardingBackImg3,
} from '../common/assets/0_index';
import {
  Botanix,
  IcGithub,
  // IcMedium,
  IcTelegram,
  IcTwitter,
  onboarding3,
  onboarding3_mobile,
} from './assets/0_index';
import { ABOUTQVE } from './constants/constants.ts';
import TradeNowBtn from './Components/TradeNowBtn.tsx';
import Footer from '../common/components/Footer.tsx';
import { useEffect, useRef, useState } from 'react';
import { ONBOARDING4 } from './constants/constants.ts';
import { LINKS } from '../common/constants/LINKS.ts';
import useMobile from '../common/hooks/useMobile.tsx';
// import { getContractTokenBalance } from '../common/contracts/contractFunctions.ts';
import axios from 'axios';
import { formatPriceValue } from '../common/utils/formatPriceValue.ts';

interface IOnboardingProps {
  isMobile: boolean;
}

const OnBoarding = () => {
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const headerOffset = 100;
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
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
      <OnBoarding1 isMobile={isMobile} />
      <St.MainContainer>
        <div ref={section2Ref} style={{ width: '100vh' }}>
          <OnBoarding2 isMobile={isMobile} />
        </div>
        <div ref={section3Ref} style={{ width: '100vh' }}>
          <OnBoarding3 isMobile={isMobile} />
        </div>
        <div ref={section4Ref} style={{ width: '100vh' }}>
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
      const { data } = await axios.get(`${base_url}/api/onboarding`);
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
          <TradeNowBtn />
        </St.Mobile.ContentLayout>
      ) : (
        <St.Section1.ContentLayout>
          <St.Section1.QVEIntroduce>
            <Logo />
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
          <></>
        ) : (
          <nav>
            <a href={LINKS.twitter} target='_blank'>
              <IcTwitter />
            </a>
            <a href={LINKS.telegrem} target='_blank'>
              <IcTelegram />
            </a>
            {/* <a href={LINKS.medium} target='_blank'>
              <IcMedium />
              </a> */}
            <a href={LINKS.github} target='_blank'>
              <IcGithub />
            </a>
          </nav>
        )}
        <St.Section1.TotalValue>
          <p>Total Value Locked</p>
          <p>$ {totalValueLocked}</p>
        </St.Section1.TotalValue>
      </St.Section1.Bottom>
    </St.Section1.Container>
  );
};

const OnBoarding2 = ({ isMobile }: IOnboardingProps) => {
  return (
    <St.Section2.Container>
      <p>About yucca.fi</p>
      <St.Title>Optimizing Yields in the Layer 2 on Bitcoin Ecosystem</St.Title>
      <St.Section2.Contents>
        {isMobile ? (
          <>
            {ABOUTQVE.map((item) => {
              return (
                <St.Mobile.SectionItemBox key={item.keyWord}>
                  <item.icon style={{ width: '6.4rem', height: '6.4rem' }} />
                  <St.Mobile.AboutItem>{item.title}</St.Mobile.AboutItem>
                  <St.Mobile.Explain>{item.explain}</St.Mobile.Explain>
                </St.Mobile.SectionItemBox>
              );
            })}
          </>
        ) : (
          <>
            {ABOUTQVE.map((item, idx) => {
              let rotateValue = 22.5;
              let translateYValue = 8;
              switch (idx) {
                case 0:
                  rotateValue = -rotateValue;
                  translateYValue;
                  break;
                case 1:
                  rotateValue = 0;
                  translateYValue = 0;
                  break;
                case 2:
                  rotateValue;
                  translateYValue;
                  break;
                default:
                  rotateValue = 0;
              }
              return (
                <St.Section2.Wrapper
                  key={item.keyWord}
                  style={{
                    transform: `rotate(${rotateValue}deg) translateY(${translateYValue}rem)`,
                  }}
                >
                  <St.Section2.AboutItem>
                    <St.Section2.IconContainer>
                      <item.icon />
                      <span>{item.keyWord}</span>
                    </St.Section2.IconContainer>
                    <St.Section2.AbouItemLayout>
                      <St.Section2.ItemTitle>
                        {item.title}
                      </St.Section2.ItemTitle>
                      <St.Section2.Explain>{item.explain}</St.Section2.Explain>
                    </St.Section2.AbouItemLayout>
                  </St.Section2.AboutItem>
                </St.Section2.Wrapper>
              );
            })}
          </>
        )}
      </St.Section2.Contents>
    </St.Section2.Container>
  );
};

const OnBoarding3 = ({ isMobile }: IOnboardingProps) => {
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
        <img
          style={{ width: '120rem', margin: '6.4rem 0 13rem' }}
          src={onboarding3}
        />
      )}
    </St.Section3.Container>
  );
};

const OnBoarding4 = ({ isMobile }: IOnboardingProps) => {
  return (
    <St.Section4.Container>
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
                <img src={item.icon} alt={item.label} />
                <St.Mobile.Body1>{item.label}</St.Mobile.Body1>
                <St.Mobile.Explain>{item.explain}</St.Mobile.Explain>
              </St.Mobile.Section4ItemBox>
            ))}
          </>
        ) : (
          <>
            {ONBOARDING4.map((item) => (
              <St.Section4.ItemWrapper key={item.label}>
                <img src={item.icon} alt={item.label} />
                {item.label}
              </St.Section4.ItemWrapper>
            ))}
          </>
        )}
      </St.Section4.ImgContainer>

      <TradeNowBtn />
    </St.Section4.Container>
  );
};

export default OnBoarding;
