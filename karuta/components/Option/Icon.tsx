import {View, Text} from "react-native";
import {SvgUri} from "react-native-svg";
import KarutaCSS from "../../css/css.karuta";
import React from "react";

const IconTab: React.FC<{ link: string  }>  = ({link}: {link: string}) => {
    return (
        <View style={KarutaCSS.icon}>
            <Text style={KarutaCSS.iconText}>
                <SvgUri uri={`https://www.svgrepo.com/show${link}`} height={35} width={35}/>
            </Text>
        </View>
    )
}
export default IconTab;