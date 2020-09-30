import React from 'react';
import { View } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons'
import { StyleSheet, Text } from 'react-native';

const materialList = ['affordablity', 'complexity', 'isGlutenFree']
const fontAwesomeList = ['vegan', 'vegetarian']
const booleanList = ['vegan', 'vegetarian', 'isGlutenFree']

const TableItem = ({ title, displayName, iconName, value, color }) => {
    let IconComponent = undefined
    if (fontAwesomeList.indexOf(title) >= 0) {
        IconComponent = FontAwesome
    } else if (materialList.indexOf(title) >= 0) {
        IconComponent = MaterialIcons
    } else {
        IconComponent = Ionicons
    }

    return (
        <View style={styles.tableItem} >
            <View style={styles.tag}>
                <IconComponent name={iconName} size={24} color={color} />
                <Text style={{paddingLeft:5,justifyContent:'flex-start'}}>{displayName}</Text>
            </View>
            <View style={styles.values}>
                {
                    booleanList.indexOf(title) >= 0 ?
                        value ?
                            <FontAwesome name={'check'} size={24} color={'#0acf3f'} />
                            :
                            <Entypo name={'cross'} size={26} color={'red'} />
                        :
                        <Text>{value} {title === 'duration' && 'Min'}</Text>
                }
            </View>


        </View>
    );
};

const styles = StyleSheet.create({

    tableItem: {
        backgroundColor: 'white',
        width: '49%',
        height: '100%',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    values:{
        paddingRight:5
    }

})
export default TableItem;