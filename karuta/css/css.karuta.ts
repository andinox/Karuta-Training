import {StyleSheet} from "react-native";
import nav from "./navigator/navigator";
import view from "./navigator/view";
import card from "../components/Decks/Card";
import cardcss from "./navigator/card";

const KarutaCSS = StyleSheet.create({
    ...nav,
    ...view,
    ...cardcss
});
export default KarutaCSS;