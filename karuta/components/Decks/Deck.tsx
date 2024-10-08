import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Divider } from 'react-native-elements';



import { SvgUri } from "react-native-svg";
import Cards from "./Cards";

const Deck: React.FC<{ name: string  }> = ({ name }) => {
    const ED_SVG = "https://www.svgrepo.com/show/"
    const [showInfo, setShowInfo] = useState(false);
    const [logoUri, setLogoUri] = useState(`${ED_SVG}/529344/alt-arrow-right.svg`);

    const toggleInfoBox = () => {
        setShowInfo((prev) => !prev);
        setLogoUri((prev) => prev === `${ED_SVG}529344/alt-arrow-right.svg`
            ? `${ED_SVG}529342/alt-arrow-down.svg`
            : `${ED_SVG}529344/alt-arrow-right.svg`);
    };

    return (
        <View style={{
            padding: 10,
            backgroundColor: "white",
            margin: 10,
            borderColor: "black",
            borderRadius: 1,
            elevation: 5,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}
            >
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold"
                }}>{name}</Text>
                <Text onPress={toggleInfoBox}>
                    <SvgUri width="30" height="30" uri={logoUri} />
                </Text>
            </View>
            {showInfo && (
                <View>
                    <Divider style={{ backgroundColor: '#e0e0e0', marginVertical: 10 }} />
                    <Cards name={name}/>
                </View>
            )}
        </View>
    );
};

export default Deck;