import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const NumberedListItem = ({ index, item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{`${index + 1}) `}</Text>
            <Text numberOfLines={3} style={styles.text}>{item}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding:5,
        flex:1,
        flexWrap:'wrap'
    },
    number: {

    },
    text: {
        
    }
})
export default NumberedListItem;