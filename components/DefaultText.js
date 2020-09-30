import React from 'react';
import { Text, StyleSheet } from 'react-native'
const DefaultText = ({ children , extraStyles }) => {
    return (
        <Text style={{...styles.defaultText,...extraStyles}}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    defaultText:{
        fontFamily:'open-sans'
    }
})
export default DefaultText;