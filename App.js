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
import Bio from './Screens/Bio'
import Privacy from './Screens/Privacy'


const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function drawer(){
  return (
    <Drawer.Navigator initialRouteName="Intro">
      <Drawer.Screen name="Intro" component={Intro} />
        <Drawer.Screen name="Bio" component={Bio} />
        <Drawer.Screen name= "Privacy" component={Privacy}/>
    </Drawer.Navigator>
  )
}

      function App() {
        return (
      
          <NavigationContainer> 
              <HomeStack.Navigator initialRouteName="Splash">
                <HomeStack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                <HomeStack.Screen name="drawer" component={drawer}  headerMode="off"/>
                <HomeStack.Screen name="Bio" component={Bio}  headerMode="on"/>
              </HomeStack.Navigator>
        </NavigationContainer>
        );
      }
      
      export default App;
