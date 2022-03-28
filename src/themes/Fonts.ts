/** @format */

type FontWeightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;
type FontWeight = {
  bolder: FontWeightType;
  bold: FontWeightType;
  semiBold: FontWeightType;
  regular: FontWeightType;
  light: FontWeightType;
};

export type FontSize = {
  larger: number;
  large: number;
  default: number;
  small: number;
  smaller: number;
  maxFontSizeMultiplier: number;
};

const family = {
  base: 'Roboto',
  inter: 'Inter',
};

const size: FontSize = {
  larger: 24,
  large: 18,
  default: 16,
  small: 14,
  smaller: 12,
  maxFontSizeMultiplier: 1.7,
};

const weight: FontWeight = {
  bolder: '700',
  bold: '600',
  semiBold: '500',
  regular: '400',
  light: '300',
};

export default {
  family,
  size,
  weight,
};
