import { IcGithub, IcTelegram, IcTwitter } from '../assets/0_index';
import { LINKS } from '../../common/constants/LINKS';

const LinkBtns = () => {
  return (
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
  );
};

export default LinkBtns;
