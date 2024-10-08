import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Animated, ImageBackground } from "react-native";
import Deck from "./Decks/Deck";
import ScrollView = Animated.ScrollView;

const DeckScreen = () => {
    const [get, setGet] = useState<string[]>([]);

    useEffect(() => {
        fetch("http://157.159.195.108:8000/deck_names")
            .then(response => response.text())
            .then(data => {
                setGet(data.split("\n").slice(0, -1));
            });
    }, []);

    return (
        <ScrollView>
            {get && get.map((deckName: string, index: React.Key | null | undefined) => (
                <Deck key={index} name={deckName} />
            ))}
        </ScrollView>
    );
};

export default DeckScreen;