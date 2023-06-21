import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import errorImage from '@/assets/images/error.png';
import Text from '@/components/Text';
import { hp, wp } from '@/utils/dimensions';

const ErrorFallback: FC = () => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{ height: hp(50), width: wp(100) }}>
        <Image source={errorImage} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
      </View>
      <Text
        style={{
          fontSize: moderateScale(22),
          fontWeight: 'bold',
        }}>
        {t('something_went_wrong')}
      </Text>
    </View>
  );
};

export default ErrorFallback;
