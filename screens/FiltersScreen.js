import React from 'react';
import {View,Text}from 'react-native'


const FiltersScreen = (props)=> {
    return (
        <View styles={styles.screen}>
            <Text>
                The filters screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default FiltersScreen;