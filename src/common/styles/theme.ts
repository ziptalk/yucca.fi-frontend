import { Theme } from '@emotion/react';

const colors = {
  qve_gradient: 'linear-gradient(100deg, #2f44af 13%, #581a38 54%)',
  qve_blue: '#4A3EE9',
  invest_background: '#232323',
  white: '#ffffff',
  not_important: '#AEAEAE',
  sub_white: '#E2E3E2',
  positive: '#00C37C',
  negative: '##E5809E',
  label: '#B7B8CD',
  black: '#000000',
  darkgray: '#696969',
  pink_main: '#FF6E99',
  pink_sub: '#F2D1E4',
  gray: '#577B6E',
  yucca_gradient:
    'linear-gradient(118deg, rgba(4, 31, 21, 0.10) 10.14%, #00B676 68.92%, #8AD9BE 91.68%)',
  dark_spring_green: '#337357',
  spring_green: '#6D9F71',
  deep_dark_green: '#1C4A3A',
  light_pink: '#FFDBE5',
  normal_pink: '#EA9AB2',
  dark_pink: '#E27396',
  background_pink: '#FFF1F5',
  dark_gray: '#444444',
  background: '#FFFFDB',
  dark_label: '#B7B8CD',
  light_gray: '#AEAEAE',
};

const FONT = (
  fontFamily: string,
  fontSize: number,
  fontStyle: string,
  fontWeight: string,
  lineHeight: string,
  letterSpacing: number
): string => `
  font-family:${fontFamily};
  font-size:${fontSize}rem;
  font-style:${fontStyle};
  font-weight:${fontWeight};
  line-height:${lineHeight}%;
  letter-spacing:${letterSpacing}%;
`;

const fonts = {
  kumbh_snas_42: FONT(
    '"Kumbh Sans", sans-serif',
    4.2,
    'normal',
    '600',
    '140',
    0
  ),
  kumbh_snas_34: FONT(
    '"Kumbh Sans", sans-serif',
    3.4,
    'normal',
    '600',
    'normal',
    0
  ),
  kumbh_snas_28: FONT(
    '"Kumbh Sans", sans-serif',
    2.8,
    'normal',
    '600',
    'normal',
    0
  ),
  kumbh_snas_22: FONT(
    '"Kumbh Sans", sans-serif',
    2.2,
    'normal',
    '600',
    'normal',
    0
  ),
  kumbh_snas_20: FONT(
    '"Kumbh Sans", sans-serif',
    2,
    'normal',
    '600',
    'normal',
    0
  ),
  kumbh_snas_18_semi: FONT(
    '"Kumbh Sans", sans-serif',
    1.8,
    'normal',
    '600',
    'normal',
    0
  ),
  kumbh_snas_18_medi: FONT(
    '"Kumbh Sans", sans-serif',
    1.8,
    'normal',
    '500',
    'normal',
    0
  ),
  poppins_18: FONT('"Poppins", sans-serif', 1.8, 'normal', '500', '140', 0),
  poppins_16: FONT('"Poppins", sans-serif', 1.6, 'normal', '500', '150', 0),
  pretendard_22: FONT('Pretendard Variable', 2.2, 'normal', '600', 'normal', 0),
  title_0: FONT('Montserrat', 4.2, 'normal', '600', '140', 0),
  title_0_pre: FONT('Pretendard Variable', 4, 'normal', '600', '140', 0),
  title_TVL: FONT('Montserrat', 4, 'normal', 'Bold', 'auto', 0),
  title_1m: FONT('Montserrat', 3.4, 'normal', 'Bold', '140', 0),
  title_1: FONT('Pretendard Variable', 3.4, 'normal', 'Bold', '140', 0),
  title_2a: FONT('Pretendard Variable', 3, 'normal', 'Bold', '140', 0),
  title_2am: FONT('Montserrat', 3, 'normal', '600', '140', 0),
  title_2: FONT('Montserrat', 2.8, 'normal', 'Bold', '140', 0),
  body_0: FONT('Pretendard Variable', 2.4, 'normal', 'Bold', '100', 0),
  body_0m: FONT('Montserrat', 2.4, 'normal', 'Bold', '100', 0),
  body_1: FONT('Pretendard Variable', 2, 'normal', '600', '140', 0),
  body_1_1: FONT('Pretendard Variable', 2, 'normal', 'medium', '140', 0),
  body_1m: FONT('Montserrat', 2, 'normal', '600', '75.75', 0),
  body_2_bold: FONT('Pretendard Variable', 1.8, 'normal', 'Bold', 'auto', 0),
  body_2: FONT('Pretendard Variable', 1.8, 'normal', '400', '160', -2),
  body_2_auto: FONT('Pretendard Variable', 1.8, 'normal', 'medium', 'auto', 0),
  body_2_semibold: FONT(
    'Pretendard Variable',
    1.8,
    'normal',
    'semibold',
    'auto',
    0
  ),
  body_2m: FONT('Montserrat', 1.8, 'normal', '600', '100', 0),
  mont_18_medium: FONT('Montserrat', 1.8, 'normal', 'medium', '100', 0),
  body_3: FONT('Pretendard Variable', 1.6, 'normal', '400', '140', 0),
  body_3m: FONT('Montserrat', 1.6, 'normal', '500', '140', 0),
  body: FONT('Pretendard Variable', 1.1, 'normal', '400', 'auto', 0),
  caption: FONT('Pretendard Variable', 1.4, 'normal', 'semibold', '100', 0),
  small_phrase: FONT(
    'Pretendard Variable',
    1.4,
    'normal',
    'semibold',
    '130',
    0
  ),
  index_steptitle: FONT(
    'Pretendard Variable',
    1.2,
    'normal',
    'semibold',
    '100',
    0
  ),
};

const breakpoints = {
  mobile: 'max-width: 768px',
  tablet: 'max-width: 1024px',
  desktop: 'max-width: 1600px',
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;
export type BreakPointsTypes = typeof breakpoints;

export const theme: Theme = {
  colors,
  fonts,
  breakpoints,
};
