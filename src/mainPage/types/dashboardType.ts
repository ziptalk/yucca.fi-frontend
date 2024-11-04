import { IChartData } from './pnlChartType';

export interface IDashboard {
  total_balance: number;
  total_amount: number;
  total_pnl: number;
  domesticRate: number;
  bots: IBOTS[];
}

export interface IBOTS {
  bot_name: string;
  bot_id: string;
  total_investment: number;
  current_value: number;
  daily_pnl: number;
  total_profit: number;
  pnlData: IChartData[];
}

export interface IBotPnl {
  bot_name: string;
  pnlData: IChartData[];
}

export interface ITRADEBOTS {
  bot_id: string;
  name: string;
  subscriber: number;
  total_profits: number;
  apy: number;
  runtime: number;
  tvl: number;
  operated_in: string;
}
