import React from "react";
// import React from react
// import {View,Text} from 'react-native'
import {HeaderButton as Button} from 'react-navigation-header-buttons'
import {Ionicons,AntDesign} from '@expo/vector-icons'

const HeaderButton = (props)=>{
    return(
        <Button {...props} IconComponent={Ionicons} iconSize={23} color="blue" />
    )
}
export default HeaderButton