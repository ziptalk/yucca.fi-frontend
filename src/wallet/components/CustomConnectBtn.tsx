import styled from '@emotion/styled';
import { ConnectButton } from '@rainbow-me/rainbowkit';
export const CustomConnectBtn = ({
  handleWalletModal,
}: {
  handleWalletModal?: () => void;
}) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <StWalletBtn
                    onClick={() => {
                      openConnectModal();
                      handleWalletModal && handleWalletModal();
                    }}
                    type='button'
                  >
                    Connect Wallet
                  </StWalletBtn>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type='button'>
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <StWalletBtn
                    onClick={() => {
                      openAccountModal();
                      handleWalletModal && handleWalletModal();
                    }}
                    type='button'
                  >
                    <StIconBtn
                      onClick={(event) => {
                        event.stopPropagation();
                        openChainModal();
                      }}
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 28,
                            height: 28,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 28, height: 28 }}
                            />
                          )}
                        </div>
                      )}
                    </StIconBtn>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </StWalletBtn>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const StWalletBtn = styled.button`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  background: linear-gradient(125deg, #f45dd3 1%, #fc954b 99%);
  min-width: 16.7rem;
  width: fit-content;
  height: 4.6rem;
  border-radius: 20px;
  padding: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_2m};

  &:hover {
    background: linear-gradient(125deg, #fc954b 1%, #f45dd3 99%);
  }
`;

const StIconBtn = styled.div`
  display: 'flex';
  align-items: 'center';
  justify-content: center;
  background-color: transparent;
`;
