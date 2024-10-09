import {Component,JSX} from "react";

abstract class Deck extends Component<{name:string}>{
    abstract render(): JSX.Element;
} export default Deck;