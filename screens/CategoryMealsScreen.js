import React from 'react';
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { MEALS as Meals } from '../data/dummy-data'
import { filteredMealsSelector } from '../Redux/meals/meals.selectors';

const CategoryMealsScreen = ({ route, navigation , filteredMeals }) => {

    const { id, title, color } = route.params

    const CategoryMeals = filteredMeals.filter((meal) =>
        meal.categoryId.indexOf(id) >= 0
    )
    console.log('filtered meals ',filteredMeals);
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
                style={{backgroundColor:'#f7f7f7'}}   
            />
        </View>

    );
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const mapStateToProps = createStructuredSelector({
    filteredMeals:filteredMealsSelector
})

export default connect(mapStateToProps)(CategoryMealsScreen);
