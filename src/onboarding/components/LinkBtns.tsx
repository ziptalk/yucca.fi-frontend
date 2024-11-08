import { IcGithub, IcTelegram, IcTwitter } from '../assets/0_index';
import { LINKS } from '../../common/constants/LINKS';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const LinkBtns = () => {
  return (
    <nav>
      <a href={LINKS.twitter} target='_blank'>
        <StIcTwitter />
      </a>
      <a href={LINKS.telegrem} target='_blank'>
        <StIcTelegram />
      </a>
      {/* <a href={LINKS.medium} target='_blank'>
              <IcMedium />
              </a> */}
      <a href={LINKS.github} target='_blank'>
        <StIcGithub />
      </a>
    </nav>
  );
};

export default LinkBtns;

const hoverStyle = css`
  &:hover {
    & path:nth-of-type(1) {
      fill-opacity: 1;
    }
  }
`;

const StIcTwitter = styled(IcTwitter)`
  ${hoverStyle}
`;

const StIcTelegram = styled(IcTelegram)`
  ${hoverStyle}
`;

const StIcGithub = styled(IcGithub)`
  ${hoverStyle}
`;
