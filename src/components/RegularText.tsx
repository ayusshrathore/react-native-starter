import React, { FC } from 'react';
import { Text, TextStyle } from 'react-native';

import useColors from '@/hooks/useColors';

interface Props {
  children: React.ReactNode;
  style?: TextStyle;
}

const RegularText: FC<Props> = ({ children, style }) => {
  const colors = useColors();

  return <Text style={{ color: colors.text, ...style }}>{children}</Text>;
};

export default RegularText;
