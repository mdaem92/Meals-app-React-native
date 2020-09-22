import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'

const GridItem = ({ id, title, color, onSelect }) => {
    let TouchableComponent = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback
    }
    return (
        <View style={{ ...styles.gridItem, backgroundColor: color }}>
            <TouchableComponent
                onPress={onSelect.bind(this, 'Category Meals', {id:id, title: title, color: color })}
            // style={{ ...styles.gridItem, backgroundColor: color }}
            >
                <View style={styles.view}>
                    <Text numberOfLines={2} style={styles.title} >{title}</Text>
                </View>
            </TouchableComponent>
        </View>


    );
};
const styles = StyleSheet.create({

    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderColor: 'black',
        borderRadius: 10,
        elevation: 3,
        overflow:'hidden'


    },
    view: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 12

    },
    title: {
        color: 'white',
        fontFamily: 'open-sans-bold',
        textAlign: 'right'
    }


})
export default GridItem;