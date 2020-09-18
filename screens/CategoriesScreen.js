import React from 'react';
import { FlatList } from 'react-native';
import {View,Text,StyleSheet, Button}from 'react-native'
import CATEGORIES from '../data/dummy-data'

const CategoriesScreen = ({navigation})=> {
    console.log(navigation);
    
    const handleButton = (route)=>{
        navigation.navigate(route)  
    }

    const renderGridItem = (itemData)=>(
        <View style={{...styles.gridItem,backgroundColor:itemData.item.color}}>
            <Text >{itemData.item.title}</Text>
        </View>
    )
    return (
        // <View styles={styles.screen}>
        //     <Text>
        //         The categories screen
        //     </Text>
        //     <Button title={'Meal'} onPress={handleButton.bind(this,'Meal Details')}/>
        // </View>
        <FlatList
            numColumns={2}
            data={CATEGORIES} 
            renderItem={renderGridItem}
        />
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
        
    }

})
export default CategoriesScreen;
