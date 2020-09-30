import React from 'react';
import {View,FlatList} from 'react-native'

const MealList = (props) => {
    return (
        <FlatList
            // numColumns={1}
            // renderItem={renderMealItem}
            // data={CategoryMeals}
            showsVerticalScrollIndicator={false}
            style={{ width: '100%', marginVertical: 10,backgroundColor:'#f7f7f7',...props.style }}
            {...props}
        />
    );
};

export default MealList;