import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import Text from '@/components/Text';
import { hp, wp } from '@/utils/dimensions';

import logo from '../../assets/logo.png';

const Onboarding: FC = () => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{ height: hp(50), width: wp(100) }}>
        <Image source={logo} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
      </View>
      <Text
        style={{
          fontSize: moderateScale(22),
          fontWeight: 'bold',
        }}>
        {t('hello_world')}
      </Text>
    </View>
  );
};

export default Onboarding;
