import { FunctionComponent, SVGProps } from 'react';
import { IcProfits, IcRisk, IcSafety } from '../assets/0_index';
import {
  imgDepositFunds,
  imgGenerateProfits,
  imgLiquifyPosition,
  imgWithdrawAssets,
} from '../assets/Onboarding4/0_index';

export interface IAboutQve {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  keyWord: string;
  title: string;
  explain: string;
}

interface IOnboarding4 {
  icon: string;
  label: string;
  explain: string;
}

export const ABOUTQVE: IAboutQve[] = [
  {
    icon: IcRisk,
    keyWord: 'Risk',
    title: 'Minimize Risk',
    explain:
      'Our approach minimizes risk and secures earnings without major losses.',
  },
  {
    icon: IcProfits,
    keyWord: 'Profits',
    title: 'Optimize profit',
    explain:
      'A yield-maximizing bot uses AI and algorithms to automate investment strategies.',
  },
  {
    icon: IcSafety,
    keyWord: 'Safety',
    title: 'Stability and Security',
    explain:
      'We use advanced algorithms to balance asset prices on Arbitrum DEXs, ensuring stable profits.',
  },
];

export const ONBOARDING4: IOnboarding4[] = [
  {
    icon: imgDepositFunds,
    label: 'Deposit Funds',
    explain: 'Choose a bot and transfer money to your account.',
  },
  {
    icon: imgGenerateProfits,
    label: 'Generate Profits',
    explain: 'Bot will analyze the market, trade smartly, and aim for profits.',
  },
  {
    icon: imgLiquifyPosition,
    label: 'Liquify Position',
    explain: 'Sell assets when profitable to convert them to cash.',
  },
  {
    icon: imgWithdrawAssets,
    label: 'Withdraw Assets',
    explain: 'Transfer funds from the platform to your bank or wallet.',
  },
];
