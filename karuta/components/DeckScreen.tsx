import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Animated, ImageBackground } from "react-native";
import ShowDeck from "./Decks/ShowDeck";
import ScrollView = Animated.ScrollView;
import DeckScrollView from "./Decks/DeckScrollView";

const DeckScreen: React.FC = () => {
    return (
        <DeckScrollView deck={ShowDeck}/>
    );
};

export default DeckScreen;