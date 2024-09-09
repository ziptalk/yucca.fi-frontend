import { IDashboard, ITRADEBOTS } from '../types/dashboardType';

//한번도 deposit 하지 않은 유저 일 때
export const MOCK_DASHBOARD: IDashboard = {
  total_balance: 0,
  total_profit: 0,
  total_balance_usdt: 0,
  total_profit_usdt: 0,
  bots: [
    // {
    //   bot_name: 'Cyclic Arb bot',
    //   bot_id: 'Cyclic Arb bot',
    //   total_investment: 5000,
    //   current_value: 5500,
    //   daily_pnl: 100,
    //   total_profit: 500,
    // },
  ],
};

export const MOCK_TRADEBOTS: ITRADEBOTS[] = [
  {
    bot_id: 'bot_001',
    name: 'Arb Bot',
    subscriber: 100,
    total_profits: 20000,
    apy: 15.5,
    runtime: 10,
    tvl: 1500000,
    operated_in: '',
  },
  {
    bot_id: '',
    name: 'NTRN/USDT Arb bot',
    subscriber: 0,
    total_profits: 0,
    apy: 0,
    runtime: 0,
    tvl: 0,
    operated_in: '',
  },
];

export const DUMMY_BOT: ITRADEBOTS = {
  bot_id: '',
  name: 'CEX-DEX Arb bot',
  subscriber: 0,
  total_profits: 0,
  apy: 0,
  runtime: 0,
  tvl: 0,
  operated_in: '',
};
