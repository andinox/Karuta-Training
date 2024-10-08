import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Audio } from 'expo-av';
import Card from "./Card";
import { useNavigation } from '@react-navigation/native';

const Cards = ({ name }: { name: string }) => {
    const navigation = useNavigation();
    const [cards, setCards] = useState<{ anime: string, type: string, visual: string, audio: string }[]>([]);
    const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);
    const [clickedIndex, setClickedIndex] = useState<React.Key | null>(null);

    useEffect(() => {
        fetch(`http://157.159.195.108:8000/deck_metadata/${name}`)
            .then(response => response.json())
            .then(data => {
                setCards(data.cards);
            });

        return () => {
            if (currentSound) {
                currentSound.stopAsync();
                currentSound.unloadAsync();
            }
        };
    }, [name, currentSound]);

    const playSound = async (audio: string, index: React.Key) => {
    try {
        if (clickedIndex === index) {
            if (currentSound) {
                await currentSound.stopAsync();
                await currentSound.unloadAsync();
                setCurrentSound(null);
                setClickedIndex(null);
            }
            return;
        }

        if (currentSound) {
            await currentSound.stopAsync();
            await currentSound.unloadAsync();
        }

        const { sound } = await Audio.Sound.createAsync(
            { uri: `http://157.159.195.108:8000/sound/${audio}` }
        );
        setCurrentSound(sound);
        setClickedIndex(index);
        navigation.setOptions({ title: `Decks | ${audio.slice(0,-4)}` });

        // Ensure the sound is loaded before playing
        await sound.playAsync();
    } catch (error) {
        console.log(`Cannot play the sound file`, error);
    }
};

    return (
        <Animated.ScrollView>
            <View style={styles.container}>
                {cards.map((card, index: React.Key) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => playSound(card.audio, index)}
                        style={clickedIndex === index ? styles.clicked : null}
                    >
                        <Card name={card.anime} op={card.type} visual={card.visual} audio={card.audio} />
                    </TouchableOpacity>
                ))}
            </View>
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        minWidth: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },
    clicked: {
        backgroundColor: "rgba(0,0,0,0.1)"
    }
});

export default Cards;