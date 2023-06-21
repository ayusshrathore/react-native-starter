import { FC } from 'react';
import styled from 'styled-components/native';

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <View>{children}</View>;
};

export default Container;
