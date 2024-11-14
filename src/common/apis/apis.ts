import axios from 'axios';
import instance from './instance';
import {
  TRADE_BOTS_ORDER,
  TRADE_BOTS_SORT,
} from '../../mainPage/constants/TRADE_BOTS_API';
import { IDashboard, ITRADEBOTS } from '../../mainPage/types/dashboardType';
import { IChartData } from '../../mainPage/types/pnlChartType';

const base_url = import.meta.env.VITE_BASE_URL;

export const getOnboarding = async () => {
  try {
    const { data } = await axios.get(`${base_url}/yucca/onboarding`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getDashboard = async (address: string | null) => {
  if (!address) return;
  const { data }: { data: IDashboard } = await instance.get(
    `${base_url}/yucca/dashboard?user_id=${address}`
  );
  return data;
};

export const getTradeBot = async (_sortKey: string) => {
  const sortKey = TRADE_BOTS_SORT[_sortKey];
  const { data }: { data: ITRADEBOTS[] } = await instance.get(
    `${base_url}/yucca/trade-bots?sort=${sortKey}&order=${TRADE_BOTS_ORDER[1]}`
  );
  return data;
};

export const getSearchBot = async (searchValue: string) => {
  const { data }: { data: ITRADEBOTS[] } = await instance.get(
    `${base_url}/yucca/trade-bots?search=${searchValue}`
  );
  return data;
};

export const getPnlChart = async ({
  botId,
  address,
}: {
  botId: string;
  address: string;
}) => {
  const { data }: { data: IChartData[] } = await instance.get(
    `${base_url}/yucca/PnLChart?bot_id=${botId}&user_id=${address}&timeframe=5`
  );
  return data;
};

// export const getUserWalletBalance = async (address: string | null) => {
//   if (!address) return;
//   const balance = await getBalance(address);
//   return balance;
// };
