import { Text, View } from "react-native";
import { Divider } from 'react-native-elements';
import { SvgUri } from "react-native-svg";
import Deck from "../../models/abstract";
import KarutaCSS from "../../css/css.karuta";
import Cards from "./Cards";


class ShowDeck extends Deck {
    endpoint: string = "https://www.svgrepo.com/show/";
    state = {
        showInfo: false,
        logoUri: `${this.endpoint}/529344/alt-arrow-right.svg`
    }

    toggleInfoBox = () => {
        this.setState({
            showInfo: !this.state.showInfo,
            logoUri: this.state.logoUri === `${this.endpoint}529342/alt-arrow-down.svg`
                ? `${this.endpoint}529344/alt-arrow-right.svg`
                : `${this.endpoint}529342/alt-arrow-down.svg`
        });
    };


    render() {
        return (
            <View style={KarutaCSS.flex}>
                <View style={KarutaCSS.width100}>
                    <Text style={KarutaCSS.iconText}>{this.props.name}</Text>
                    <Text onPress={this.toggleInfoBox}>
                        <SvgUri width="30" height="30" uri={this.state.logoUri} />
                    </Text>
                </View>
                {this.state.showInfo && (
                    <View>
                        <Divider style={KarutaCSS.dividerCss} />
                        <Cards name={this.props.name}/>
                    </View>
                )}
            </View>
        );
    }
}
export default ShowDeck;