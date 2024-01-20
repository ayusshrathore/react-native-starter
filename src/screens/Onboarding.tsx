import { FC } from 'react';
import { Image } from 'react-native';
import { OnboardFlow } from 'react-native-onboard';

import useColors from '@/hooks/useColors';
import { RootStackProps } from '@/navigation/RootNavigation';

type Props = RootStackProps<'Onboarding'>;

const Onboarding: FC<Props> = ({ navigation }) => {
  const colors = useColors();

  return (
    <OnboardFlow
      titleStyle={{ color: colors.primary }}
      primaryButtonStyle={{ backgroundColor: colors.primary }}
      paginationSelectedColor={colors.primary}
      paginationColor="#ccc"
      onDone={() => navigation.navigate('TabNavigation')}
      pages={[
        {
          title: 'Hello, there!',
          subtitle: 'This is a subtitle that will blow your mind',
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          imageUri: Image.resolveAssetSource(require('@/assets/images/onboarding.png')).uri,
        },
      ]}
      type={'fullscreen'}
    />
  );
};

export default Onboarding;
