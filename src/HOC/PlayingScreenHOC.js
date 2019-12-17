import React, { Component } from 'react';
import { View } from 'react-native';
import { 
    LIVE_BG_COLOR, 
    TIMEFREE_BG_COLOR,
    BASIC_GRAY,
    MAIN_BLUE,
    MAIN_PINK
} from '../config/constants';
import PlayingScreen from '../screens/Playing';
import { HeaderTitleText } from '../components/CustomText';

class PlayingScreenHOC extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 
                <HeaderTitleText 
                    children={navigation.state.params.title} 
                />,
            headerTintColor: BASIC_GRAY,
        };
    }
    render() {
        const { type } = this.props.navigation.state.params;
        const bgColor = type === 'timefree' ? TIMEFREE_BG_COLOR : LIVE_BG_COLOR;
        const textColor = { color: type === 'timefree' ? MAIN_PINK : MAIN_BLUE };
        const newProps = {
            textColor
        }
        return (
            <View style={{ backgroundColor: bgColor }}>
                <PlayingScreen {...this.props} {...newProps} />
            </View>
        )
    }
}

export default PlayingScreenHOC;