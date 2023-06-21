import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { ms } from 'react-native-size-matters';

import Text from '@/components/Text';

const ErrorFallback: FC = () => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: ms(22),
          fontWeight: 'bold',
        }}>
        {t('something_went_wrong')}
      </Text>
    </View>
  );
};

export default ErrorFallback;
