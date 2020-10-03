import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import MealsTabNavigator from './MealsTabNavigator';
import FiltersNavigator from './FiltersNavigator';

const { Navigator, Screen } = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Main" drawerStyle={{borderRadius:15,overflow:'hidden'}}drawerContentOptions={{activeTintColor:'red'}} >
                <Screen name='Home' component={MealsTabNavigator} />
                <Screen name={'Filters'} component={FiltersNavigator} />
            </Navigator>
        </NavigationContainer>

    );
};

export default DrawerNavigator;