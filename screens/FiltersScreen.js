import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import MenuButton from '../components/MenuButton';

const FiltersScreen = ({navigation}) => {

    const handleDrawer = ()=>navigation.openDrawer()
    navigation.setOptions({
        headerLeft:(props)=>(
            <HeaderButtons HeaderButtonComponent={MenuButton}>
                <Item title='menu' iconName={'menu'} onPress={handleDrawer}/>
            </HeaderButtons>
        )
    })
    return (
        <View style={styles.screen}>
            <Text>filters page</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default FiltersScreen;