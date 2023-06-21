import React, { FC } from 'react';
import { TextStyle } from 'react-native';
import styled from 'styled-components/native';

import useColors from '@/hooks/useColors';
import { wp } from '@/utils/dimensions';

const Text = styled.Text`
  font-size: ${wp(4)}px;
`;

interface Props {
  children: React.ReactNode;
  style?: TextStyle;
}

const RegularText: FC<Props> = ({ children, style }) => {
  const colors = useColors();

  return (
    <Text
      style={{
        color: colors.text,
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default RegularText;
