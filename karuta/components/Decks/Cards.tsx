import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Audio } from 'expo-av';
import Card from "./Card";
import { useNavigation } from '@react-navigation/native';
import KarutaCSS from "../../css/css.karuta";
import Services from "../../services/Services";
import {CardTypes} from "../../models/types";
import ScrollView = Animated.ScrollView;

const Cards = ({ name }: { name: string }) => {
    const navigation = useNavigation();
    const [cards, setCards] = useState<CardTypes[]>([]);
    const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);
    const [clickedIndex, setClickedIndex] = useState<React.Key | null>(null);

    useEffect(() => {
        Services.getDeck(name).then(data => {
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
            if (clickedIndex === index && currentSound) {
                await currentSound.stopAsync();
                await currentSound.unloadAsync();
                setCurrentSound(null);
                setClickedIndex(null);
                navigation.setOptions({ title: `Deck` });
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
            navigation.setOptions({ title: `${audio.slice(0,-4)}` });

            await sound.playAsync();
        } catch (error) {
            console.log(`Cannot play the sound file`, error);
        }
    };

    return (
        <Animated.ScrollView style={{flexGrow: 0}}>
            <View style={KarutaCSS.container}>
                {cards.map((card, index: React.Key) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => playSound(card.audio, index)}
                        style={clickedIndex === index ? KarutaCSS.clicked : null}
                    >
                        <Card name={card.anime} op={card.type} visual={card.visual} audio={card.audio} />
                    </TouchableOpacity>
                ))}
            </View>
        </Animated.ScrollView>
    );
};
export default Cards;