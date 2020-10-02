import React from 'react';
import MealsNavigator from './MealsNavigator';
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator, } from '@react-navigation/material-bottom-tabs';
import FavoritesNavigator from './FavoritesNavigator';
import { Text } from 'react-native'
const Tab = createMaterialBottomTabNavigator()
const MealsTabNavigator = () => {
    return (
        <Tab.Navigator
            shifting
            barStyle={{ backgroundColor: '#ed0037' }}
            activeColor='white'

        >
            <Tab.Screen
                name="Home"
                component={MealsNavigator}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.color} />
                    },
                    tabBarColor: '#ed0037',
                    tabBarLabel: <Text style={{ fontFamily: 'open-sans' }}>Home</Text>



                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesNavigator}
                options={{
                    tabBarIcon: (tabInfo) => {
                        return <Ionicons name='ios-star' size={25} color={tabInfo.color} />
                    },
                    tabBarColor: 'blue',
                    tabBarLabel: <Text style={{ fontFamily: 'open-sans' }}>Favorites</Text>

                }}
            />

        </Tab.Navigator>
        // </NavigationContainer>
    );
};

export default MealsTabNavigator;