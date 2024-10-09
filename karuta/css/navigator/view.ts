import {StyleSheet} from "react-native";


const view = StyleSheet.create({
    flex: {
        padding: 10,
        backgroundColor: "white",
        margin: 10,
        borderColor: "black",
        borderRadius: 1,
        elevation: 5,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    width100: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    }
}); export default view;