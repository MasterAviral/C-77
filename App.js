import React , {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import HomeScreen from "./screens/Home";
import {StatusBar} from "expo-status-bar";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteor";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";


const Stack=createStackNavigator()
function App(){

return(

<NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:true}}>
<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="IssLocation" component={IssLocationScreen}/>
<Stack.Screen name="Meteor" component={MeteorScreen}/>
</Stack.Navigator></NavigationContainer>




)

}

export default App


