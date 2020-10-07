import React from 'react';
import { View, Text , StyleSheet , Button, TouchableHighlight } from  'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';



const Intro = ()=>{
    return (
        <View style={{ display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        flex:1
        }} >
     
     <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    
  >
    Login with Facebook with us
  </Icon.Button>

        </View>


  
    )
}







export default Intro;