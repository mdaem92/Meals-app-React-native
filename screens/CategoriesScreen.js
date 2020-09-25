import React from 'react';
import {View} from 'react-native'
import GridItem from '../components/GridItem';
import MealList from '../components/MealList';
import MenuButton from '../components/MenuButton';
import CATEGORIES from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'


const CategoriesScreen = ({ navigation }) => {
    const handleDrawer = ()=>{
        navigation.toggleDrawer()
    }
    navigation.setOptions({
        
        headerLeft:(props)=>(
            <HeaderButtons HeaderButtonComponent={MenuButton}>
                <Item title='menu' iconName={'menu'} onPress={handleDrawer}/>
            </HeaderButtons>
        ),
    
        
        
    })
    const handleButton = (route) => {
        navigation.navigate(route)
    }
    const handleTouchableOpacity = (route, params) => {

        navigation.navigate(route, { ...params })

    }
    const renderGridItem = ({ item }) => (
        <GridItem {...item} onSelect={handleTouchableOpacity} />
    )

    return (
        <View>
            <MealList
                numColumns={2}
                data={CATEGORIES}
                renderItem={renderGridItem}
            />
        </View>

    );
}



export default CategoriesScreen;
