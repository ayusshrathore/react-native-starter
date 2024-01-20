import { FC } from 'react';
import { View } from 'react-native';

import tw from '@/lib/tw';

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <View style={tw('flex-1 items-center justify-center')}>{children}</View>;
};

export default Container;
