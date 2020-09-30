import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsTabNavigator from './MealsTabNavigator';
import FiltersScreen from '../screens/FiltersScreen';
import FiltersNavigator from './FiltersNavigator';
import MealsNavigator from './MealsNavigator';

const { Navigator, Screen } = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Main" drawerStyle={{borderRadius:15,overflow:'hidden'}}>
                <Screen name='Home' component={MealsTabNavigator} />
                <Screen name={'Filters'} component={FiltersNavigator} />
            </Navigator>
        </NavigationContainer>

    );
};

export default DrawerNavigator;