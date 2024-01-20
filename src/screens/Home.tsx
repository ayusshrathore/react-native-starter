import NetInfo from '@react-native-community/netinfo';
import { focusManager, onlineManager } from '@tanstack/react-query';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppState, AppStateStatus, Image, Platform, View } from 'react-native';
import { ms } from 'react-native-size-matters';

import Container from '@/components/Container';
import { errorMessage } from '@/components/FlashMessage';
import RegularText from '@/components/RegularText';
import tw from '@/lib/tw';

import logo from '../../assets/logo.png';

const Home: FC = () => {
  const { t } = useTranslation();

  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      onlineManager.setOnline(!!state.isConnected);
      if (!state.isConnected) {
        errorMessage(t('no_internet'));
      }
    });
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => {
      unsubscribe();
      subscription.remove();
    };
  }, [t]);

  return (
    <Container>
      <View style={{ height: ms(200), width: ms(200) }}>
        <Image source={logo} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
      </View>
      <RegularText style={tw('font-bold text-2xl mt-4 text-gray-700')}>{t('hello_world')}</RegularText>
    </Container>
  );
};

export default Home;
