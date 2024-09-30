import styled from '@emotion/styled';
import { STCOMBackground } from '../../common/styles/commonStyleComs';
import { IcModalX, IcNotice } from '../assets/0_index';
import ConnectWallet from '../../wallet/components/ConnectWallet';
import { useEffect, useRef, useState } from 'react';
import { useOutsideClick } from '../../common/hooks/useOutsideClick';
import { useUserAccount } from '../../wallet/hooks/useUserAccount';

const UnConnectModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isWalletModal, setISWalletModal] = useState(false);
  const address = useUserAccount();

  const handleWalletModal = () => {
    setISWalletModal(true);
  };

  useOutsideClick(wrapperRef, () => {
    if (!isWalletModal) onClose();
  });

  useEffect(() => {
    if (address) onClose();
  }, [address]);
  if (!isOpen) return;

  return (
    <STCOMBackground>
      <StWrapper ref={wrapperRef}>
        <StTop>
          <p>Wallet unconnected</p>
          <IcModalX onClick={onClose} style={{ cursor: 'pointer' }} />
        </StTop>
        <StMiddle>
          <StIcNotice />
          <span>Wallet not connected.</span>
          <span>Please connect your wallet.</span>
        </StMiddle>
        <StBottom>
          <ConnectWallet onClick={handleWalletModal} />
        </StBottom>
      </StWrapper>
    </STCOMBackground>
  );
};

export default UnConnectModal;

const StWrapper = styled.div`
  width: 56rem;
  height: 25.2rem;
  border-radius: 16px;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > * {
    width: 100%;
  }
`;

const StTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.fonts.body_2};
`;

const StIcNotice = styled(IcNotice)`
  margin-bottom: 0.4rem;
`;

const StMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.fonts.small_phrase};
`;

const StBottom = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3.3rem;
`;
