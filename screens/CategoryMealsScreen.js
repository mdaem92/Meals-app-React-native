import React from 'react';
import { View, StyleSheet } from 'react-native'
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
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
        navigation.navigate(route, { ...data })
    }

    const renderMealItem = ({ item }) => (

        <MealItem {...item} handleMealsSelect={handleMealsSelect.bind(this, 'Meal Details', { ...item })}/>
    )

    return (
        <View style={styles.screen}>
            <MealList
                numColumns={1}
                renderItem={renderMealItem}
                data={CategoryMeals}
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
