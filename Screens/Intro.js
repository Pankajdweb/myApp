import React from 'react';
import { View, Text , StyleSheet , Button, TouchableHighlight } from  'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
// import { SearchBar } from 'react-native-elements';



const Intro = ({navigation})=>{
    return (
        <View style={{ display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        flex:1
        }} >

     <Button
     title="Click me to open Navigator"
     onPress= {()=>navigation.toggleDrawer()}
    />
        </View> 


  
    )
}







export default Intro;