/** @jsxImportSource @emotion/react */
import { useRef, useEffect, useState } from 'react';
import { IOnboardingProps } from '../..';
import * as St from '../../Onboarding.style';
import { ABOUTQVE } from '../../constants/constants';
import AboutItem from '../AboutItem';

const OnBoarding2 = ({ isMobile }: IOnboardingProps) => {
  const wrapperRefs = useRef<HTMLDivElement[]>([]);
  const [inView, setInView] = useState<boolean[]>(
    new Array(ABOUTQVE.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = wrapperRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (idx !== -1) {
              setInView((prevInView) => {
                const newInView = [...prevInView];
                newInView[idx] = true;
                return newInView;
              });
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    wrapperRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      wrapperRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <St.Section2.Container>
      <p>About yucca.fi</p>
      <St.Title>Optimizing Yields in the Layer 2 on Bitcoin Ecosystem</St.Title>
      <St.Section2.Contents>
        {isMobile ? (
          ABOUTQVE.map((item) => (
            <St.Mobile.SectionItemBox key={item.keyWord}>
              <item.icon style={{ width: '2.4rem', height: '2.4rem' }} />
              <St.Mobile.AboutItem>{item.title}</St.Mobile.AboutItem>
              <St.Mobile.Explain>{item.explain}</St.Mobile.Explain>
            </St.Mobile.SectionItemBox>
          ))
        ) : (
          <>
            <AboutItem
              idx={0}
              item={ABOUTQVE[0]}
              ref={(el: HTMLDivElement) => el && (wrapperRefs.current[0] = el)}
              view={inView}
            />
            <AboutItem
              idx={1}
              item={ABOUTQVE[1]}
              ref={(el: HTMLDivElement) => el && (wrapperRefs.current[1] = el)}
              view={inView}
            />
            <AboutItem
              idx={2}
              item={ABOUTQVE[2]}
              ref={(el: HTMLDivElement) => el && (wrapperRefs.current[2] = el)}
              view={inView}
            />
          </>
        )}
      </St.Section2.Contents>
    </St.Section2.Container>
  );
};

export default OnBoarding2;
