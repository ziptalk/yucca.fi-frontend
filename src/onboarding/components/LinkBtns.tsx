import { IcGithub, IcTelegram, IcTwitter } from '../assets/0_index';
import { LINKS } from '../../common/constants/LINKS';
import styled from '@emotion/styled';

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

const StIcTwitter = styled(IcTwitter)`
  &:hover {
    & path:nth-child(1) {
      fill-opacity: 1;
    }
  }
`;

const StIcTelegram = styled(IcTelegram)`
  &:hover {
    & path:nth-child(1) {
      fill-opacity: 1;
    }
  }
`;

const StIcGithub = styled(IcGithub)`
  &:hover {
    & path:nth-child(1) {
      fill-opacity: 1;
    }
  }
`;
