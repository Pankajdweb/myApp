import React from 'react';
import { View, Image , StyleSheet  } from  'react-native';
import * as Animatable from 'react-native-animatable';
// import { Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
// import Intro from './Screens/Intro';



function Splash({navigation}){
    setTimeout(() => {
        navigation.replace('Intro');
        
        }, 3000);
    return (
        <View style={styles.wrapper}>
     
     <Animatable.Image  animation="slideInUp" source={require('../Src/Images/logo.png')}/>

        </View>


  
    )
}


const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#5E5FFA'
    },

});




export default Splash;