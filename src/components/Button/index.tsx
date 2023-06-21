import React, { FC } from 'react';
import { ActivityIndicator, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity``;

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
}

const Button: FC<Props> = ({ children, onPress, style, disabled, loading }) => {
  return (
    <Btn activeOpacity={0.6} onPress={onPress} style={style} disabled={disabled || loading}>
      {loading ? <ActivityIndicator color="#ffffff" /> : children}
    </Btn>
  );
};

export default Button;
