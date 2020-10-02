import React from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import FilterItem from '../components/FilterItem';
import MenuButton from '../components/MenuButton';
import { glutenFreeSelector, lactoseFreeSelector, veganSelector, vegetarianSelector } from '../Redux/filters/filters.selectors';

const FiltersScreen = ({ navigation, isVegan, isVegetarian, isGlutenFree, isLactoseFree }) => {

    const handleDrawer = () => navigation.openDrawer()
    navigation.setOptions({
        headerLeft: (props) => (
            <HeaderButtons HeaderButtonComponent={MenuButton}>
                <Item title='menu' iconName={'menu'} onPress={handleDrawer} />
            </HeaderButtons>
        )
    })
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Select Filters</Text>
            <FilterItem title={'Gluten-Free'} value={isGlutenFree} name={'glutenFree'}/>
            <FilterItem title={'Lactose-Free'} value={isLactoseFree} name={'lactoseFree'}/>
            <FilterItem title={'Vegetarian'} value={isVegetarian} name={'vegetarian'}/>
            <FilterItem title={'Vegan'} value={isVegan} name={'vegan'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        margin: 15
    },

})

const mapStateToProps = createStructuredSelector({
    isVegan: veganSelector,
    isVegetarian: vegetarianSelector,
    isLactoseFree: lactoseFreeSelector,
    isGlutenFree: glutenFreeSelector
})


export default connect(mapStateToProps,null)(FiltersScreen);