import React, { FC } from 'react';
import { ActivityIndicator, TouchableOpacity, ViewStyle } from 'react-native';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
}

const Button: FC<Props> = ({ children, onPress, style, disabled, loading }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={style} disabled={disabled || loading}>
      {loading ? <ActivityIndicator color="#ffffff" /> : children}
    </TouchableOpacity>
  );
};

export default Button;
