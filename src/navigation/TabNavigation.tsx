import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon } from 'lucide-react-native';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ms } from 'react-native-size-matters';

import Text from '@/components/Text';
import { APP_NAME } from '@/config/constants';
import useColors from '@/hooks/useColors';
import Home from '@/screens/Home';
import { wp } from '@/utils/dimensions';

import { RootNavigationProps } from './RootNavigation';

export interface TabNavigationParams extends Record<string, object | undefined> {
  Home: undefined;
}

const Tab = createBottomTabNavigator<TabNavigationParams>();

const TabNavigation: FC<RootNavigationProps> = () => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const colors = useColors();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          color: colors.text,
          fontSize: ms(20),
          marginBottom: ms(10),
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: 'transparent',
          elevation: 10,
          shadowOpacity: 0.1,
          paddingBottom: insets.bottom,
        },
      }}>
      <Tab.Screen
        name={APP_NAME}
        component={Home}
        options={{
          headerTitleStyle: {
            color: colors.text,
            fontSize: ms(20),
            alignSelf: 'center',
          },
          tabBarIcon: ({ focused }) => (
            <HomeIcon name="home" size={wp(7)} color={focused ? colors.primary : colors.text} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? colors.primary : colors.text,
                fontSize: ms(10),
                fontWeight: '600',
              }}>
              {t('home')}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
