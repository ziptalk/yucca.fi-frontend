/** @jsxImportSource @emotion/react */
import React from 'react';
import { IAboutQve } from '../constants/constants';
import * as St from '../Onboarding.style';
import { css, keyframes } from '@emotion/react';

const AboutItem = React.forwardRef<
  HTMLDivElement,
  {
    idx: number;
    item: IAboutQve;
    view: boolean[];
  }
>(({ idx, item, view }, ref) => {
  const getAnimation = (idx: number) => {
    switch (idx) {
      case 0:
        return slideUpWithRotation0;
      case 1:
        return slideUpWithRotation1;
      case 2:
        return slideUpWithRotation2;
      default:
        return slideUpWithRotation1;
    }
  };
  const animation = getAnimation(idx);
  return (
    <St.Section2.Wrapper
      key={item.keyWord}
      ref={ref}
      css={[
        view[idx] &&
          css`
            animation: ${animation} 1.5s ease-out forwards; // 조건부 애니메이션
          `,
        {
          opacity: 0,
        },
      ]}
    >
      <St.Section2.AboutItem>
        <St.Section2.IconContainer>
          {/* <item.icon /> */}
          <span>{item.keyWord}</span>
        </St.Section2.IconContainer>
        <St.Section2.AbouItemLayout>
          <St.Section2.ItemTitle>{item.title}</St.Section2.ItemTitle>
          <St.Section2.Explain>{item.explain}</St.Section2.Explain>
        </St.Section2.AbouItemLayout>
      </St.Section2.AboutItem>
    </St.Section2.Wrapper>
  );
});

export default AboutItem;

const slideUpWithRotation0 = keyframes`
  0% {
    transform: translateX(40rem) translateY(30px) rotate(0deg);  /* 시작 시 살짝 아래 위치, 90도 회전 */
    opacity: 0;
  }
  100% {
    transform: translateX(0) translateY(80px) rotate(-22.5deg);  /* 위로 슬라이드, 회전 끝 */
    opacity: 1;
  }
`;

const slideUpWithRotation1 = keyframes`
  0% {
    transform: translateY(30px) rotate(0deg);  /* 시작 시 살짝 아래 위치, 90도 회전 */
    opacity: 0;
  }
  100% {
    transform: translateY(0px) rotate(0deg);  /* 위로 슬라이드, 회전 끝 */
    opacity: 1;
  }
`;

const slideUpWithRotation2 = keyframes`
  0% {
    transform: translateX(-40rem) translateY(30px) rotate(0deg);  /* 시작 시 살짝 아래 위치, 90도 회전 */
    opacity: 0;
  }
  100% {
    transform: translateX(0) translateY(80px) rotate(22.5deg);  /* 위로 슬라이드, 회전 끝 */
    opacity: 1;
  }
`;
