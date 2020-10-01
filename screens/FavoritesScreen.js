import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
import { MEALS as Meals } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import MenuButton from '../components/MenuButton';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { favesSelector } from '../Redux/favorites/favorites.selectors';
import { removeFromFavorites } from '../Redux/favorites/favorites.actions';


const FavoritesScreen = ({ navigation, favorites, removeFromFavorites }) => {

    const handleDrawer = () => navigation.toggleDrawer()
    // const favoriteMeals = Meals.sort(() => 0.5 - Math.random()).slice(0, 5)
    navigation.setOptions({

        headerLeft: (props) => (
            <HeaderButtons HeaderButtonComponent={MenuButton}>
                <Item title='menu' iconName={'menu'} onPress={handleDrawer} />
            </HeaderButtons>
        ),
    })

    const handleMealsSelect = (route, params) => {
        navigation.navigate(route, { ...params })
    }

    const renderMealItem = ({ item }) => (
        <MealItem {...item} handleMealsSelect={handleMealsSelect.bind(this, 'Meal Details', { ...item })} />
    )
    
    return (
        <View style={styles.screen}>
            <MealList
                numColumns={1}
                data={favorites}
                renderItem={renderMealItem}
                style={{ backgroundColor: '#f7f7f7' }}
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

const mapStateToProps = createStructuredSelector({
    favorites: favesSelector
})

const mapDispatchToProps = (dispatch) => ({
    removeFromFavorites: (index) => dispatch(removeFromFavorites(index))
})
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
