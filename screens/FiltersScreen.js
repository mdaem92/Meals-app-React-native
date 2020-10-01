import React, { useState } from 'react';
import { View, StyleSheet, Text,  Switch  } from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import FilterItem from '../components/FilterItem';
import MenuButton from '../components/MenuButton';

const FiltersScreen = ({ navigation }) => {
    
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
            <FilterItem title={'Gluten-Free'}/>
            <FilterItem title={'Lactose-Free'}/>
            <FilterItem title={'Vegetarian'}/>
            <FilterItem title={'Vegan'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontSize:20,
        fontFamily:'open-sans-bold',
        textAlign:'center',
        margin:15
    },

})
export default FiltersScreen;