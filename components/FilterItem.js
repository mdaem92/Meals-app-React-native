import React, { useState } from 'react';
import { StyleSheet , View , Text ,Switch } from 'react-native';

const FilterItem = ({title }) => {
    const toggleSwitch = ()=>{
        setIsEnabled(!isEnabled)
    }
    const [isEnabled, setIsEnabled] = useState(false)
    return (
        <View style={styles.filterContainer}>
            <Text>{title}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "red" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
   
    filterContainer:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15
    }
})
export default FilterItem;