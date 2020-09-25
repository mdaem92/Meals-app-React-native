import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';

const {Navigator,Screen} = createStackNavigator()
const FavoritesNavigator = () => {
    return (
            <Navigator headerMode='float' screenOptions={{headerTintColor:'white',headerTitleAlign:'center',headerStyle:{backgroundColor:'blue'}}} >
                <Screen name='Favorites' component={FavoritesScreen}/>
                <Screen name={'Meal Details'} component={MealDetailsScreen}/>
            </Navigator>
    );
};

export default FavoritesNavigator;