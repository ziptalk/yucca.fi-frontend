//지갑연결 커스텀 버튼
import { ConnectButton } from '@rainbow-me/rainbowkit';
import * as St from '../styles/CustomConnectBtn.style';
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
                  <St.WalletBtn
                    onClick={() => {
                      openConnectModal();
                      handleWalletModal && handleWalletModal();
                    }}
                    type='button'
                  >
                    Connect Wallet
                  </St.WalletBtn>
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
                  <St.WalletBtn
                    onClick={() => {
                      openAccountModal();
                      handleWalletModal && handleWalletModal();
                    }}
                    type='button'
                  >
                    <St.IconBtn
                      onClick={(event) => {
                        event.stopPropagation();
                        openChainModal();
                      }}
                    >
                      {chain.hasIcon ? (
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
                      ) : (
                        //체인 아이콘 없을 시 들어갈 대체 아이콘
                        <></>
                      )}
                    </St.IconBtn>
                    {account.displayName}
                    {/* {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''} */}
                  </St.WalletBtn>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
