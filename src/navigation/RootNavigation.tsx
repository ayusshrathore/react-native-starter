import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { ArrowLeft } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import Onboarding from '@/screens/Onboarding';
import { storage } from '@/utils/storage';

import useColors from '../hooks/useColors';
import { wp } from '../utils/dimensions';
import TabNavigation from './TabNavigation';
import { RootStackParams } from './types';

export type RootNavigationProps = StackScreenProps<RootStackParams>;

export type RootStackProps<T extends keyof RootStackParams> = {
  navigation: StackScreenProps<RootStackParams, T>['navigation'];
  route: StackScreenProps<RootStackParams, T>['route'];
};

const Stack = createStackNavigator<RootStackParams>();

const RootNavigation = () => {
  const colors = useColors();
  const [firstLaunch, setFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const appData = storage.getBoolean('appLaunched');
    if (!appData) {
      setFirstLaunch(true);
      storage.set('appLaunched', true);
    } else {
      setFirstLaunch(false);
    }
  }, []);

  return (
    firstLaunch !== null && (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTitleStyle: {
              color: colors.text,
              fontSize: moderateScale(14),
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.pop()}>
                <ArrowLeft name="arrow-back-ios" size={wp(6)} color={colors.text} style={{ marginLeft: wp(3) }} />
              </TouchableOpacity>
            ),
          })}>
          {firstLaunch && <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={Onboarding} />}
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default RootNavigation;
