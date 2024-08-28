import styled from '@emotion/styled';
import { IcModalX } from '../../mainPage/assets/0_index';
import { useRef, useState } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { HeaderNav } from './Header';

const MobileSideNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isWalletModal, setISWalletModal] = useState(false);
  const handleWalletModal = () => {
    setISWalletModal(true);
  };

  useOutsideClick(wrapperRef, () => {
    if (!isWalletModal) onClose();
  });

  return (
    <StMobileSideNav isOpen={isOpen} ref={wrapperRef}>
      <IcModalX onClick={onClose} />
      <HeaderNav
        pathname={location.pathname}
        onClose={onClose}
        handleWalletModal={handleWalletModal}
      />
    </StMobileSideNav>
  );
};

export default MobileSideNav;

const StMobileSideNav = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: -2.5rem;
  right: -2rem;
  width: 30rem;
  height: 100vh;
  border-radius: 20px 0 0 20px;
  background: ${({ theme }) => theme.colors.pink_sub};
  color: white;
  padding: 2.5rem;
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease;
  z-index: 999;
`;
