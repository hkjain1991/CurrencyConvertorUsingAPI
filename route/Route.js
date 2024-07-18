import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {RouteName} from './Helper';

const Tab = createBottomTabNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={RouteName.Conversion}
        screenOptions={{
          tabBarIconStyle: {display: 'none'},
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontSize: 20,
            fontWeight: '700',
          },
          title: 'Currency Convertor',
        }}>
        <Tab.Screen
          name="Conversion"
          component={RouteName.Conversion}
          options={{tabBarLabel: 'Conversion'}}
        />
        <Tab.Screen
          name="History"
          component={RouteName.History}
          options={{tabBarLabel: 'History', unmountOnBlur: true}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Route;
