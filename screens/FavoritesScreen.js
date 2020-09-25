import React from 'react';
import {View,Text,StyleSheet,StatusBar}from 'react-native'
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { MEALS as Meals } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import MenuButton from '../components/MenuButton';


const FavoritesScreen = ({navigation})=> {

    const handleDrawer = ()=>navigation.toggleDrawer()
    const favoriteMeals = Meals.sort(() => 0.5 - Math.random()).slice(0,5)
    navigation.setOptions({
        
        headerLeft:(props)=>(
            <HeaderButtons HeaderButtonComponent={MenuButton}>
                <Item title='menu' iconName={'menu'} onPress={handleDrawer}/>
            </HeaderButtons>
        ),
        
        
    })
    const handleMealsSelect = (route,params)=>{
        navigation.navigate(route,{...params})
    }
    const renderMealItem = ({ item }) => (

        <MealItem {...item} handleMealsSelect={handleMealsSelect.bind(this, 'Meal Details', { ...item })}/>
    )
    return (
        <View style={styles.screen}>
            <MealList
                numColumns={1}
                data={favoriteMeals}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default FavoritesScreen;
