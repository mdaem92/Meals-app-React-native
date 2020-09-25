import React from "react";

import {HeaderButton as Button} from 'react-navigation-header-buttons'
import {MaterialIcons} from '@expo/vector-icons'

const MenuButton = (props)=>{
    return(
        <Button {...props} IconComponent={MaterialIcons} iconSize={23} color="white" />
    )
}
export default MenuButton