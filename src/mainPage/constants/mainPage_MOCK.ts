import { IDashboard, ITRADEBOTS } from '../types/dashboardType';
import { IPnlChart } from '../types/pnlChartType';

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
    total_profits: 45,
    apy: 15.5,
    runtime: 10,
    tvl: 150,
    operated_in: '',
  },
  // {
  //   bot_id: '',
  //   name: 'NTRN/USDT Arb bot',
  //   subscriber: 0,
  //   total_profits: 0,
  //   apy: 0,
  //   runtime: 0,
  //   tvl: 0,
  //   operated_in: '',
  // },
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

export const MOCK_PNLCHART: IPnlChart = {
  bot_id: 'bot_001',
  bot_name: 'MM bot',
  timeframe: 5,
  daily_PnL: 56.12,
  domesticRate: 10.3, // 단위 : USD/token
  data: [
    {
      createdAt: '2024-09-26T00:00:00.000Z',
      pnlRate: 25,
    },
    {
      createdAt: '2024-09-27T00:00:00.000Z',
      pnlRate: 20,
    },
    {
      createdAt: '2024-09-28T00:00:00.000Z',
      pnlRate: 30,
    },
    {
      createdAt: '2024-09-29T00:00:00.000Z',
      pnlRate: 40,
    },
    {
      createdAt: '2024-09-30T00:00:00.000Z',
      pnlRate: 50,
    },
  ],
  detailInformation: {
    apy: 15.5,
    winRate: 75.12,
    mdd: 1.12,
    healthFactor: 0.5,
  },
};
