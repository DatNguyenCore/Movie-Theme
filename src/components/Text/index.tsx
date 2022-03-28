import React from 'react';
import {LayoutChangeEvent, TextStyle, Text as TextNative} from 'react-native';
import styles from './styles';
import {Fonts} from '../../themes';

export type TextColorType =
  | 'black'
  | 'error'
  | 'link'
  | 'white'
  | 'title'
  | 'body'
  | 'bodySecondary'
  | 'success';
export type TextSizeType = 'tiny' | 'small' | 'large' | 'larger'; // Normal is assumed no fontSize

export type TextPropType = {
  children: string | string[] | React.ReactNode[]; // Text can have some another Text component inside
  size?: TextSizeType;
  style?: TextStyle | TextStyle[]; // Allow styling of Text but prioritize own styles
  bold?: 'semiBold' | 'bold' | 'bolder';
  color?: TextColorType;
  numberOfLines?: number;
  onPress?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  onTextLayout?: (event: any) => void;
  adjustsFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
  maxFontSizeMultiplier?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
};

// NOTE: Avoid styling component if possible expect with layout styles!
// High level component for all text in the app which gives it the same styling
export default function Text(props: TextPropType) {
  const {
    children,
    size,
    style,
    bold,
    numberOfLines,
    onPress,
    onLayout,
    onTextLayout,
    adjustsFontSizeToFit,
    color,
    allowFontScaling,
    maxFontSizeMultiplier,
    ellipsizeMode,
  } = props;

  return (
    <TextNative
      style={[
        styles.text,
        bold ? styles[bold] : null,
        size ? styles[size] : null,
        color ? styles[color] : null,
        style,
      ]}
      allowFontScaling={allowFontScaling}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      numberOfLines={numberOfLines}
      onPress={onPress}
      onLayout={onLayout}
      ellipsizeMode={ellipsizeMode}
      // @ts-ignore
      onTextLayout={onTextLayout}
      adjustsFontSizeToFit={adjustsFontSizeToFit}>
      {children}
    </TextNative>
  );
}

Text.defaultProps = {
  maxFontSizeMultiplier: Fonts.size.maxFontSizeMultiplier,
};
