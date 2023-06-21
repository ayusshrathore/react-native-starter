import NetInfo from '@react-native-community/netinfo';
import { focusManager, onlineManager } from '@tanstack/react-query';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppState, AppStateStatus, Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import Container from '@/components/Container';
import ScrollView from '@/components/ScrollView';
import RegularText from '@/components/Text';
import useColors from '@/hooks/useColors';

const Home: FC = () => {
  const { t } = useTranslation();
  const colors = useColors();

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: colors.background,
        }}
      />
      <RegularText>Hello World</RegularText>
    </Container>
  );
};

export default Home;
