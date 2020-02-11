import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ProductsOverviewScreen'
          component={ProductsOverviewScreen}
          options={{
            title: 'All Products',
            headerStyle: {
              backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
            },
            headerTintColor:
              Platform.OS === 'android' ? 'white' : Colors.primary,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
