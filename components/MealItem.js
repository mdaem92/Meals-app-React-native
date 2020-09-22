import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

const MealItem = (
    {
        title,
        handleMealsSelect,
        imageUrl,
        duration,
        complexity,
        affordability
    }) => {
    return (
        <View style={styles.mealItem}>

            <TouchableNativeFeedback onPress={handleMealsSelect}>
                <View>
                    <View style={{ ...styles.row, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: imageUrl }} style={styles.imageBackground}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={2} style={styles.title}>{title}</Text>

                            </View>
                        </ImageBackground>

                    </View>
                    {/* <View style={{...styles.row,height:'80%'}} >
                        <ImageBackground source={{ uri: imageUrl }} style={styles.imageBackground}/>
                    </View> */}

                    <View style={{ ...styles.row, ...styles.mealDetails }}>
                        <Text >{duration} mins</Text>
                        <Text >{complexity.toUpperCase()}</Text>
                        <Text >{affordability.toUpperCase()}</Text>
                    </View>

                </View>
            </TouchableNativeFeedback>
        </View>

    );
};
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    mealItem: {
        height: 200,
        flex: 1,
        elevation: 3,
        margin: 5,
        borderRadius:10,
        overflow:'hidden'

    },
    imageBackground: {
        // flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "flex-end"
    },
    mealHeader: {
        height: '85%'
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        // height: '10%'
        alignItems:'center',
        height:'15%',
        backgroundColor:'#f7f7f7'
        // width:'100%'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        color: 'white',
        textAlign: 'center'

    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
})
export default MealItem;