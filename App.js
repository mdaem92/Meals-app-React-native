import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import MealsNavigator from './navigation/MealsNavigator'

const fetchFonts = ()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false)
  const finishLoading = ()=>setFontLoaded(true)
  if (!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={finishLoading}/>
  }
  return (
    <MealsNavigator />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    color:'red'
  }
});
