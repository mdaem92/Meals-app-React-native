import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { connect } from 'react-redux';
import { setFieldValue } from '../Redux/filters/filters.actions';

const FilterItem = ({ title, value, setFieldValue ,name}) => {
    const toggleSwitch = () => {
        setFieldValue(name,!value)
    }
    // const [isEnabled, setIsEnabled] = useState(false)
    return (
        <View style={styles.filterContainer}>
            <Text>{title}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={value ? "red" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    filterContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15
    }
})

const mapDispatchToProps = (dispatch) => ({
    setFieldValue: (field, value) => dispatch(setFieldValue(field, value))
})
export default connect(null,mapDispatchToProps)(FilterItem);