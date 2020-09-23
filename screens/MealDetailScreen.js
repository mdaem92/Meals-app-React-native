import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const MealDetailsScreen = ({ route, navigation }) => {
    const {
        id,
        categoryId,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    } = route.params

    navigation.setOptions({
        title,
        headerRight: props => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName={'ios-star'} onPress={()=>{}}/>
            </HeaderButtons>)
    })
    return (
        <View styles={styles.screen}>
            <Text>
                The Meal Details Screen for {title}
            </Text>
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
export default MealDetailsScreen;
