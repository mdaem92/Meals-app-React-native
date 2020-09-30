import React from 'react';
import { View, StyleSheet } from 'react-native'

const Card = ({ children, extraStyles }) => {
    return (
        <View style={{ ...styles.row, ...extraStyles }}>
            {children}
        </View>
    );
};


const styles = StyleSheet.create({
    row: {
        flex: 1,
        elevation: 3,
        borderRadius: 10,
        overflow: 'hidden',
        margin:15,
        backgroundColor:'white'
    }
})
export default Card;