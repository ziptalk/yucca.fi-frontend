export interface IPnlChart {
  bot_name: string;
  bot_id: string;
  timeframe: number;
  data: IChartData[];
  daily_PnL: number;
  detailInformation: IDetail;
  domesticRate: number;
}

export interface IChartData {
  createdAt: string;
  pnlRate: number;
}

export interface IDetail {
  apy: number;
  mdd: number;
  winRate: number;
  healthFactor: number;
}
