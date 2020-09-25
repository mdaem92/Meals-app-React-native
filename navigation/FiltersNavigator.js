import React from 'react';
import {View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import FiltersScreen from '../screens/FiltersScreen';

const {Navigator,Screen} = createStackNavigator()
const FiltersNavigator = () => {
    return (
        <Navigator headerMode='float' screenOptions={{headerTintColor:'white',headerTitleAlign:'center',headerStyle:{backgroundColor:'#ed0037'}}}>
            <Screen name={'Filters'} component={FiltersScreen}/>
        </Navigator>
    );
};

export default FiltersNavigator;