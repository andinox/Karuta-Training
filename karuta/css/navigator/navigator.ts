import {StyleSheet} from "react-native";

const nav = StyleSheet.create({
    tb: {
        backgroundColor: '#fff',
        borderTopColor: 'transparent',
        elevation: 10,
        height: 70,
    },
    icon: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#fff',
    },
    iconText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    dividerCss: {
        backgroundColor: '#e0e0e0',
        marginVertical: 10
    }
});
export default nav;