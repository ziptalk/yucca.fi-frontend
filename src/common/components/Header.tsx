import styled from '@emotion/styled';
import { IcMenu, Logo } from '../assets/0_index';
import { useLocation, useNavigate } from 'react-router-dom';
import TradeNowBtn from '../../onboarding/Components/TradeNowBtn';
import ConnectWallet from '../../wallet/components/ConnectWallet';
import { transformStyles } from '../styles/transformStyles';
import useMobile from '../hooks/useMobile';
import MobileSideNav from './MobileSideNav';
import { useState } from 'react';
import { LINKS } from '../constants/LINKS';

interface HeaderProps {
  pathname?: string;
  scrollToSection?: (ref: React.RefObject<HTMLDivElement>) => void;
  section2Ref?: React.RefObject<HTMLDivElement>;
  section3Ref?: React.RefObject<HTMLDivElement>;
  section4Ref?: React.RefObject<HTMLDivElement>;
  onClose?: () => void;
  handleWalletModal?: () => void;
}

const Header = ({
  scrollToSection,
  section2Ref,
  section3Ref,
  section4Ref,
}: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StContainer>
      <StWrapper>
        <StLogo onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
        {isMobile ? (
          <>
            <IcMenu onClick={() => setIsMenuOpen(true)} />
            {isMenuOpen && (
              <MobileSideNav
                isOpen={isMenuOpen}
                onClose={() => {
                  setIsMenuOpen(false);
                }}
              />
            )}
          </>
        ) : location.pathname === '/onboarding' ? (
          <HeaderNav
            pathname={location.pathname}
            scrollToSection={scrollToSection}
            section2Ref={section2Ref}
            section3Ref={section3Ref}
            section4Ref={section4Ref}
          />
        ) : (
          <ConnectWallet />
        )}
      </StWrapper>
    </StContainer>
  );
};

export const HeaderNav = ({
  pathname,
  scrollToSection,
  section2Ref,
  section3Ref,
  section4Ref,
  onClose,
  handleWalletModal,
}: HeaderProps) => {
  return (
    <StNav>
      <StNavItemContainer>
        <StNavItem
          onClick={() => {
            onClose && onClose();
            scrollToSection && section2Ref && scrollToSection(section2Ref);
          }}
        >
          About
        </StNavItem>
        <StNavItem
          onClick={() => {
            onClose && onClose();
            scrollToSection && section3Ref && scrollToSection(section3Ref);
          }}
        >
          Features
        </StNavItem>
        <StNavItem
          onClick={() => {
            onClose && onClose();
            scrollToSection && section4Ref && scrollToSection(section4Ref);
          }}
        >
          Process
        </StNavItem>
        <StNavItem onClick={() => window.open(LINKS.docs)}>Docs</StNavItem>
      </StNavItemContainer>
      {pathname === '/onboarding' ? (
        <TradeNowBtn />
      ) : (
        <ConnectWallet onClick={handleWalletModal} />
      )}
    </StNav>
  );
};

export default Header;

const StContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(to bottom, #f8f2fc 80%, #f8f2fc 100%); */
  backdrop-filter: blur(15px);
  z-index: 10;
  padding: 0;
  margin: 0;
`;

const StWrapper = styled.div`
  position: relative;
  height: 4.6rem;
  width: 100%;
  max-width: 120rem;
  margin: 3.2rem 0rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${transformStyles}

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    margin: 2rem 2rem;
  }
`;

const StLogo = styled(Logo)`
  width: 15.9rem;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    width: 14.4rem;
  }
`;

const StNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    align-items: start;
    margin-top: 6rem;
  }
`;

const StNavItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    align-items: start;
  }
`;

const StNavItem = styled.button`
  background-color: transparent;
  padding: 1.4rem 2.3rem;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.dark_gray};
  ${({ theme }) => theme.fonts.poppins_18};

  &:hover {
    color: ${({ theme }) => theme.colors.dark_spring_green};
    background-color: rgba(255, 255, 255, 0.5);
  }
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    &:nth-of-type(4) {
      margin-bottom: 6.4rem;
    }
  }
`;
