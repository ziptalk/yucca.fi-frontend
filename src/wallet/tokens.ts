import {
  QVETOKENAddress,
  WKLAYtokenAddress,
} from '../common/contracts/tokenAddress';

export interface ItokenInfo {
  tokenAddress: string;
  tokenSymbol: string;
  tokenDecimals: number;
  tokenImage: string;
}

export const WKLAY: ItokenInfo = {
  tokenAddress: WKLAYtokenAddress,
  tokenSymbol: 'WKLAY',
  tokenDecimals: 18,
  tokenImage: '', // 이미지 URL 필요 시 추가
};

export const qveToken: ItokenInfo = {
  tokenAddress: QVETOKENAddress,
  tokenSymbol: 'QVE',
  tokenDecimals: 18,
  tokenImage: '',
};
