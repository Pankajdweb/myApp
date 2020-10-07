/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './Screens/splash';
import Intro from './Screens/Intro';


const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (

          <HomeStack.Navigator initialRouteName="Splash" >
          <HomeStack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
          <HomeStack.Screen name="Intro" component={Intro}  headerMode="on"  />
            
            
          </HomeStack.Navigator>
        




);

      function App() {
        return (
      



          <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Intro} />
            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
          </Drawer.Navigator>
        </NavigationContainer>
        );
      }
      
      export default App;
