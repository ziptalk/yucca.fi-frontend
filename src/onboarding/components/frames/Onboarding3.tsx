import * as St from '../../Onboarding.style';
import { IOnboardingProps } from '../..';
import { onboarding3, onboarding3_mobile } from '../../assets/0_index';

const OnBoarding3 = ({ isMobile }: IOnboardingProps) => {
  return (
    <St.Section3.Container>
      <St.Section3.InTro>
        {isMobile ? (
          <St.PreTitle>Vaults Trading bots</St.PreTitle>
        ) : (
          <St.PreTitle>
            Yucca.fi offers various ‘vaults’, which are operated by the trading
            bots
          </St.PreTitle>
        )}
        <St.Title>Assets Into The Vault</St.Title>
        <St.Section3.SubTitle>
          ( Arbitrage is one of the strategies we use )
        </St.Section3.SubTitle>
      </St.Section3.InTro>
      {isMobile ? (
        <img
          style={{ width: '38.2rem', margin: '6.4rem 0 13rem' }}
          src={onboarding3_mobile}
        />
      ) : (
        <img
          style={{ width: '120rem', margin: '6.4rem 0 13rem' }}
          src={onboarding3}
        />
      )}
    </St.Section3.Container>
  );
};

export default OnBoarding3;
