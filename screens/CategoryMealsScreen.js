import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { MEALS as Meals } from '../data/dummy-data'
import { filteredMealsSelector } from '../Redux/meals/meals.selectors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {resetFilters} from '../Redux/filters/filters.actions'

const CategoryMealsScreen = ({ route, navigation, filteredMeals, resetFilters }) => {

    const { id, title, color } = route.params
    const CategoryMeals = filteredMeals.filter((meal) =>
        meal.categoryId.indexOf(id) >= 0
    )
    useEffect(() => {

        navigation.setOptions({
            title: `${title} Meals`,
            headerStyle: {
                backgroundColor: color
            }
        })
    }, [])


    const handleMealsSelect = (route, data) => {
        navigation.navigate(route, { ...data })
    }
    const handleResetFilters = () => {
        resetFilters()
    }

    const renderMealItem = ({ item }) => (

        <MealItem {...item} handleMealsSelect={handleMealsSelect.bind(this, 'Meal Details', { ...item })} />
    )

    return CategoryMeals.length > 0 ? (
        <View style={styles.screen}>
            <MealList
                numColumns={1}
                renderItem={renderMealItem}
                data={CategoryMeals}
                style={{ backgroundColor: '#f7f7f7' }}
            />
        </View>

    )
        :
        <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>No results matching your filters</Text>
            <TouchableOpacity onPress={handleResetFilters} style={{ ...styles.button, backgroundColor: color }}>
                <MaterialCommunityIcons name="restart" size={24} color="white" />
                <Text style={{ color: 'white' }}>Reset filters</Text>
            </TouchableOpacity>

        </View>
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fallbackText: {

        alignSelf: 'center',
        margin: 15
    },
    button: {
        borderRadius: 10,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,

    }

})

const mapStateToProps = createStructuredSelector({
    filteredMeals: filteredMealsSelector
})

const mapDispatchToProps = (dispatch) => ({
    resetFilters: () => dispatch(resetFilters())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMealsScreen);
