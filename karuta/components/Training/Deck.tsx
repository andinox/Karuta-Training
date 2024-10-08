import React,{Component, useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const Deck: React.FC<{name: string}> = ({name}) => {
    const navigation = useNavigation();
    const [get, setGet] = useState<string[]>([]);

    return (
        <View onPress={navigation} style={{
                padding: 10,
                backgroundColor: "white",
                margin: 10,
                borderColor: "black",
                borderRadius: 5,
                elevation: 5,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold"
                }}>{name}</Text>
                <Text style={{
                    fontSize: 15,
                    fontWeight: "bold",
                }}
                >0/30</Text>
            </View>
    )
};
export default Deck;