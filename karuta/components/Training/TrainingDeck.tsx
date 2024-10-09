import React,{Component, useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import Deck from "../../models/abstract";
import {useNavigation} from "@react-navigation/native";

class TrainingDeck extends Deck {
    constructor(props: {name: string}) {
        super(props);
    }

    render() {
       return (
           <TouchableOpacity>
               <View style={{
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
               }}>{this.props.name}</Text>
               <Text style={{
                   fontSize: 15,
                   fontWeight: "bold",
               }}
               >0/30</Text>
           </View>
           </TouchableOpacity>    );
   }
}
export default TrainingDeck;