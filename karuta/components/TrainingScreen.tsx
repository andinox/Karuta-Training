import {useEffect, useState} from "react";
import React from "react";
import TrainingDeck from "./Training/TrainingDeck";
import services from "../services/Services";
import DeckScrollView from "./Decks/DeckScrollView";

const TrainingScreen = () => {
    const [get, setGet] = useState<string[]>([]);

    useEffect(() => {
        services.getDeckNames().then(setGet)
    }, []);

    return (
        <DeckScrollView deck={TrainingDeck}/>
    );
};
export default TrainingScreen;