import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Card from '../components/Card';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons'
import TableItem from '../components/TableItem';
import NumberedListItem from '../components/NumberedListItem';

const MealDetailsScreen = ({ route, navigation }) => {
    const {
        id,
        categoryId,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    } = route.params

    navigation.setOptions({
        title,
        headerRight: props => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite' iconName={'ios-star'} onPress={() => { }} />
            </HeaderButtons>)
    })

    const renderListItem = ({ item, index }) => {
        <View style={styles.step}>
            <Text style={styles.number}>{`${index})`}</Text>
            <Text style={styles.description}>{item}</Text>
        </View>
    }

    return (
        <ScrollView styles={styles.screen}>

            <Card>
                <Image source={{ uri: imageUrl }} style={styles.backgroundImage} />
            </Card>
            <View style={styles.table}>
                <View style={styles.row}>
                    <TableItem title={'affordablity'} displayName={'Price'} value={affordability} iconName={'attach-money'} color={'black'} />
                    <TableItem title={'complexity'} displayName={'Difficulty'} value={complexity} iconName={'sentiment-satisfied'} color={'black'} />
                </View>
                <View style={styles.row}>
                    <TableItem title={'duration'} displayName={'Duration'} value={duration} iconName={'ios-timer'} color={'#e30b48'} />
                    <TableItem title={'isGlutenFree'} displayName={'Gluten Free'} value={isGlutenFree} iconName={'grain'} color={'#0b7be3'} />
                </View>
                <View style={styles.row}>
                    <TableItem title={'vegan'} displayName={'Vegan'} value={false} iconName={'leaf'} color={'green'} />
                    <TableItem title={'vegetarian'} displayName={'Vegetarian'} value={isVegetarian} iconName={'leaf'} color={'#a3c908'} />

                </View>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            <Card extraStyles={{padding:5}}>
                {
                    ingredients.map((ingredient,index)=><View key={index}><NumberedListItem index={index} item={ingredient}/></View>)
                }
            </Card>
            <Text style={styles.title}>Steps</Text>
            <Card extraStyles={{padding:5}}>
                {
                    steps.map((step,index) => <View key={index}><NumberedListItem index={index} item={step}/></View>)
                }
            </Card>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        width: '100%',
        height: 200
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'blue',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 2
    },
    table: {
        // backgroundColor: 'white',
        // flex: 1,
        height: 150,
        flexDirection: 'column',
        margin: 15

    },
    tableItem: {
        backgroundColor: 'white',
        width: '49%',
        height: '100%',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title:{
        textAlign:'center',
        margin:5,
        fontFamily:'open-sans-bold',
        // color:'red'
        fontSize:20
    }
})
export default MealDetailsScreen;
