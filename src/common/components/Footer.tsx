import styled from '@emotion/styled';
import { LINKS } from '../constants/LINKS';
import {
  IcGithub,
  IcTelegram,
  IcTwitter,
} from '../../onboarding/assets/0_index';
import { transformStyles } from '../styles/transformStyles';

const Footer = () => {
  return (
    <StFooter.Container>
      <StFooter.BlockWave>
        <p>
          <StFooter.Bold>Blockwave Labs</StFooter.Bold>
          <span> | contact@blockwavelabs.io</span>
        </p>
        <p>Blockwave Labs Inc. All rights reserved</p>
      </StFooter.BlockWave>
      <StFooter.ConnectIcon>
        <a href={LINKS.twitter} target='_blank'>
          <IcTwitter />
        </a>
        <a href={LINKS.telegrem} target='_blank'>
          <IcTelegram />
        </a>
        {/* <a href={LINKS.medium} target='_blank'>
          <IcFooterMedium />
        </a> */}
        <a href={LINKS.github} target='_blank'>
          <IcGithub />
        </a>
      </StFooter.ConnectIcon>
    </StFooter.Container>
  );
};

export default Footer;

const StFooter = {
  Container: styled.footer`
    ${transformStyles}

    position: relative;
    width: 100%;
    max-width: 120rem;
    padding: 6.4rem 0;
    margin-top: 13.6rem;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    @media (${({ theme }) => theme.breakpoints.mobile}) {
      width: 70%;
      flex-wrap: wrap-reverse;
      align-items: center;
      justify-content: center;
      gap: 3.2rem;
    }
  `,
  BlockWave: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.colors.dark_label};

    & p {
      ${({ theme }) => theme.fonts.body};
    }

    @media (${({ theme }) => theme.breakpoints.mobile}) {
      align-items: center;
    }
  `,
  Bold: styled.span`
    font-weight: 700;
  `,
  ConnectIcon: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    & > * {
      cursor: pointer;
    }
  `,
};
