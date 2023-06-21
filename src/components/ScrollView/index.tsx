import { FC } from 'react';
import { ScrollViewProps } from 'react-native';

const ScrollView: FC<ScrollViewProps> = ({ children, ...props }) => {
  return <ScrollView {...props}>{children}</ScrollView>;
};

export default ScrollView;
