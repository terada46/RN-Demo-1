import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { MAIN_BLUE } from '../config/constants';
import { TabText, HeaderTitleText } from '../components/CustomText';
import MyFavorites from '../screens/MyFavorites';
import MySongs from '../screens/MySongs';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

class CustomTabbar extends Component {
    state = {
        naviTitles: [
            '番組' , 
            'オンエア曲' 
        ]
    }

    render() {
        const { navigation } = this.props;
        const { routes, index } = this.props.navigation.state;
        const {
            containerStyle,
            tabStyle,
            textStyle,
            selectedTextStyle,
            textWrapper,
        } = styles;
        const { naviTitles } = this.state;
        return (
            <View style={containerStyle}>
                {routes.map((route, idx) => {
                    if (index === idx) {
                        return (
                            <View key={idx} style={tabStyle}>
                                <View style={textWrapper}>
                                    <TabText 
                                        style={[textStyle, selectedTextStyle]}
                                        selected={true}
                                    >
                                        {naviTitles[idx]}
                                    </TabText>
                                </View>
                            </View>
                        );
                    }
                    return (
                        <TouchableOpacity
                            style={tabStyle}
                            key={idx}
                            onPress={() => { navigation.navigate(route.routeName);}}
                        >
                            <TabText style={textStyle}>{naviTitles[idx]}</TabText>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    containerStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
    },
    tabStyle: {
        flex: 1,
        height: 46,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: 'center',
    },
    selectedTextStyle: {
        color: MAIN_BLUE,
    },
    textWrapper: {
        borderBottomColor: MAIN_BLUE,
        borderBottomWidth: 3,
        alignSelf: 'center',
        paddingBottom: 6,
    }
});
  
const MyListTabsView = createMaterialTopTabNavigator(
    {
        ResultTimefree: {
            screen: MyFavorites,
        },
        ResultNext: {
            screen: MySongs,
        },
    },
    {
        initialRouteName: 'ResultTimefree',
        tabBarComponent: CustomTabbar,
    }
);

export default MyListTabsView;