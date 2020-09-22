import React from 'react';
import { FlatList } from 'react-native';
import { View, StyleSheet } from 'react-native'
import MealItem from '../components/MealItem';
import { MEALS as Meals } from '../data/dummy-data'

const CategoryMealsScreen = ({ route, navigation }) => {

    const { id, title, color } = route.params
    const CategoryMeals = Meals.filter((meal) =>
        meal.categoryId.indexOf(id) >= 0
    )
    navigation.setOptions({
        title: `${title} Meals`,
        headerStyle: {
            backgroundColor: color
        }

    })
    const handleMealsSelect = (route, data) => {
        console.log('presing');
        navigation.navigate(route, { ...data })
    }

    const renderMealItem = ({ item }) => (

        <MealItem {...item} handleMealsSelect={handleMealsSelect.bind(this, 'Meal Details', { ...item })}/>
    )

    return (
        <View style={styles.screen}>
            <FlatList
                numColumns={1}
                renderItem={renderMealItem}
                data={CategoryMeals}
                style={{width:'100%',marginVertical:10}}
            />
        </View>

    );
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default CategoryMealsScreen;
