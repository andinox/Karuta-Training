import React, {Component, JSX} from "react";
import services from "../../services/Services";
import {Animated} from "react-native";
import ScrollView = Animated.ScrollView;
import ShowDeck from "./ShowDeck";
import TrainingDeck from "../Training/TrainingDeck";


class DeckScrollView extends Component<{deck: typeof ShowDeck | typeof TrainingDeck}> {
    state: {get: string[]} = {get: [] as string[]}

    componentDidMount() {
        services.getDeckNames().then((data) => this.setState({get: data}));
    }

    render(): JSX.Element {
        return (
            <ScrollView>
                {this.state.get.map((deckName: string, index: React.Key) => (
                    <this.props.deck key={index} name={deckName}/>
                ))}
            </ScrollView>
        );
    }
}
export default DeckScrollView;