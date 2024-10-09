import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import IconTab from "./Icon";
import React from "react";

const TabScreenOption = (link: string): BottomTabNavigationOptions => {
    return {
        tabBarIcon: () => (
            <IconTab link={link}/>
        )
    }
}
export default TabScreenOption;