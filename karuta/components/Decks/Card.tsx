import {Component} from "react";
import {View, Text, Image,StyleSheet} from "react-native";

class Card extends Component<{name:string,op:string,visual:string,audio:string}> {

    render() {
        return (
            <View style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 10,
                maxWidth: 150,
                backgroundColor: "#fff",
                elevation: 5,
                flexGrow: 0,
                flexBasis: "49%",
                flexShrink: 0,
            }}>
                <Image source={{uri:`http://157.159.195.108:8000/visual/${this.props.visual}`}} width={130} height={180}/>
            </View>
        );
    }
}



export default Card;


