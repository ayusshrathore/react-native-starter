import NetInfo from '@react-native-community/netinfo';
import { focusManager, onlineManager } from '@tanstack/react-query';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppState, AppStateStatus, Image, Platform, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import Container from '@/components/Container';
import { hp, wp } from '@/utils/dimensions';

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
        showMessage({
          message: t('no_internet'),
          type: 'danger',
          icon: 'warning',
        });
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
      <View style={{ height: hp(50), width: wp(50) }}>
        <Image source={logo} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
      </View>
    </Container>
  );
};

export default Home;
