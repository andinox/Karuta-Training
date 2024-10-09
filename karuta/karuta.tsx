import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import SettingScreen from "./components/SettingScreen";
import TrainingScreen from "./components/TrainingScreen";
import DeckScreen from "./components/DeckScreen";
import TabScreenOption from "./components/Option/TabScreenOption";
import NavScreenOption from "./components/Option/NavScreenOption";


const Tab = createBottomTabNavigator();

function Karuta() {
    return (
        <Tab.Navigator
            screenOptions={NavScreenOption}>
            <Tab.Screen
                options={TabScreenOption("/529554/dumbbell-large-minimalistic.svg")}
                name="Training Karuta" component={TrainingScreen}/>
            <Tab.Screen
                options={TabScreenOption("/529044/layers.svg")}
                name="Decks" component={DeckScreen}/>
            <Tab.Screen
                options={TabScreenOption("/529867/settings.svg")}
                name="Settings" component={SettingScreen}/>
        </Tab.Navigator>
    );
}
export default Karuta;