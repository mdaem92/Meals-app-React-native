import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './MealsNavigator';
import FavoriteMeals from '../screens/FavoriteMeals';

const Tab = createBottomTabNavigator()
const MealsTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={MealsNavigator} />
                <Tab.Screen name="Favorites" component={FavoriteMeals} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MealsTabNavigator;