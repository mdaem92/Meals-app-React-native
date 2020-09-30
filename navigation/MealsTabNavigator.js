import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigator from './MealsNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'
import { createMaterialBottomTabNavigator, } from '@react-navigation/material-bottom-tabs';
import FavoritesNavigator from './FavoritesNavigator';
import{Text} from 'react-native'
const Tab = createMaterialBottomTabNavigator()
const MealsTabNavigator = () => {
    return (
        // <NavigationContainer>
            <Tab.Navigator
                shifting
                barStyle={{backgroundColor:'#ed0037'}}
                activeColor='white'
                
                // tabBarOptions={{ activeTintColor: 'red', showLabel: true }}
            >
                <Tab.Screen
                    name="Home"
                    component={MealsNavigator}
                    options={{
                        tabBarIcon: (tabInfo) => {
                            // console.log(tabInfo);
                            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.color} />
                        },
                        tabBarColor:'#ed0037',
                        tabBarLabel:<Text style={{fontFamily:'open-sans'}}>Home</Text>
                        


                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesNavigator}
                    options={{
                        tabBarIcon: (tabInfo) => {
                            return <Ionicons name='ios-star' size={25} color={tabInfo.color} />
                        },
                        tabBarColor:'blue',
                        tabBarLabel:<Text style={{fontFamily:'open-sans'}}>Favorites</Text>

                    }}
                />

            </Tab.Navigator>
        // </NavigationContainer>
    );
};

export default MealsTabNavigator;