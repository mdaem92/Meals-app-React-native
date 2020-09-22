import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet, Button } from 'react-native'
import GridItem from '../components/GridItem';
import CATEGORIES from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {
   
    const handleButton = (route) => {
        navigation.navigate(route)
    }
    const handleTouchableOpacity = (route,params)=>{

        navigation.navigate(route,{...params})
        
    }
    const renderGridItem = ({item}) => (
        <GridItem {...item} onSelect={handleTouchableOpacity}/>
    )

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
        />
    );
}



export default CategoriesScreen;
