import 'react-native-gesture-handler';

import { QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import * as BootSplash from 'react-native-bootsplash';
import ErrorBoundary from 'react-native-error-boundary';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ErrorFallback from '@/screens/ErrorFallback';
import { useUIStore } from '@/store/useUIStore';

import bootSplashLogo from './assets/bootsplash_logo.png';
import i18n from './locales/i18n';
import { queryClient } from './queryClient';
import initIosKeyboard from './src/common/initIosKeyboard';
import RootNavigation from './src/navigation/RootNavigation';

if (__DEV__) {
  import('./reactotron');
}

const App = () => {
  const darkMode = useUIStore(s => s.darkMode);
  const [bootSplashVisible, setBootSplashVisible] = useState(true);
  const [bootSplashLoaded, setBootSplashLoaded] = useState(false);
  const opacity = useRef(new Animated.Value(1));
  const translateY = useRef(new Animated.Value(0));

  if (Platform.OS === 'ios') {
    initIosKeyboard();
  }

  i18n();

  const loadAppAfter = (ms: number, value?: unknown) => new Promise(resolve => setTimeout(() => resolve(value), ms));

  useEffect(() => {
    const init = async () => {
      await loadAppAfter(1000);
      try {
        await BootSplash.hide();

        Animated.stagger(250, [
          Animated.spring(translateY.current, {
            useNativeDriver: true,
            toValue: -50,
          }),
          Animated.spring(translateY.current, {
            useNativeDriver: true,
            toValue: Dimensions.get('window').height,
          }),
        ]).start();

        Animated.timing(opacity.current, {
          useNativeDriver: true,
          toValue: 0,
          duration: 150,
          delay: 350,
        }).start(() => {
          setBootSplashVisible(false);
        });
      } catch (error) {
        setBootSplashVisible(false);
      }
    };

    bootSplashLoaded && init();
  }, [bootSplashLoaded]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <StatusBar
          barStyle={darkMode ? 'light-content' : 'dark-content'}
          backgroundColor={darkMode ? '#000' : '#fff'}
        />
        <GestureHandlerRootView style={{ flex: 1 }}>
          {bootSplashVisible ? (
            <Animated.View style={[StyleSheet.absoluteFill, styles.bootsplash, { opacity: opacity.current }]}>
              <Animated.Image
                source={bootSplashLogo}
                fadeDuration={0}
                resizeMode="contain"
                onLoadEnd={() => setBootSplashLoaded(true)}
                style={[styles.logo, { transform: [{ translateY: translateY.current }] }]}
              />
            </Animated.View>
          ) : (
            <SafeAreaProvider>
              <RootNavigation />
            </SafeAreaProvider>
          )}
        </GestureHandlerRootView>
        <FlashMessage
          position="top"
          titleStyle={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
        />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  bootsplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 89,
    width: 100,
  },
});

export default App;
