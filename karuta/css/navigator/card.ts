import {StyleSheet} from "react-native";


const cardcss= StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-around",
    },
    clicked: {
        backgroundColor: "rgba(0,0,0,0.1)"
    }
}); export default cardcss;