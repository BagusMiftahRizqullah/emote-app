import React from 'react';
import { StyleSheet, Text, View, StatusBar,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Home,
    SplashScreen,
    Statistics,
    Settings,
} from './Screen';
import MainHeader from './Components/MainHeader';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options={{
                headerShown: false,

            }} name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{
            headerShown: false,

        }} name="bottomTabs" component={bottomTabs} />

        </Stack.Navigator>
    </NavigationContainer>
    );
}

function bottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen  options={{header: () => <MainHeader title="" />, tabBarIcon: (sellected) => (<Image style={{
            width: 30,
            height: 30,
            tintColor: sellected.focused ? '#4370F2' : '#D3D3D3',
        }} source={require('./Assets/images/homeIcon.png')} />)}} name="Home" component={Home} />
         <Tab.Screen  options={{header: () => <MainHeader title="Statistics" />, tabBarIcon: (sellected) => (<Image style={{
            width: 30,
            height: 30,
            tintColor:  sellected.focused ? '#4370F2' : '#D3D3D3',
        }} source={require('./Assets/images/statisticIcon.png')} />)}} name="Statistics" component={Statistics} />
      <Tab.Screen  options={{ header: () => <MainHeader title="Settings" />, tabBarIcon: (sellected) => (<Image style={{
            width: 30,
            height: 30,
            tintColor:  sellected.focused ? '#4370F2' : '#D3D3D3',
        }} source={require('./Assets/images/settingIcon.png')} />)}} name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }



export default Router;
