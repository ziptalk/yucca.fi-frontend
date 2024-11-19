import { ItokenInfo } from '../tokens';

interface IAddTokenParams {
  userAddress: string | undefined;
  tokenInfo: ItokenInfo;
}

const addTokenToWallet = async ({
  userAddress,
  tokenInfo,
}: IAddTokenParams) => {
  if (!userAddress) {
    console.error('User address is required to add token to wallet.');
    return;
  }

  try {
    const added = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenInfo.tokenAddress, // 토큰 주소
          symbol: tokenInfo.tokenSymbol, // 토큰 심볼
          decimals: tokenInfo.tokenDecimals, // 소수점
          image: tokenInfo.tokenImage, // 토큰 이미지 URL
        },
      },
    });

    if (added) {
      console.log('Token added to wallet');
    } else {
      console.log('Token not added');
    }
  } catch (error) {
    console.error('Error adding token to wallet:', error);
  }
};

export default addTokenToWallet;
