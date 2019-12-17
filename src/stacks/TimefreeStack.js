import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import TimefreeTabsView from '../tabs/TimefreeTabsView';
import PlayingScreen from '../HOC/PlayingScreenHOC';
import HeaderRight from '../components/HeaderRight';
import { HeaderTitleText } from '../components/CustomText';

const TimefreeNavigator = createStackNavigator(
    {
        Timefree: {
            screen: TimefreeTabsView,
            navigationOptions: () => ({
                headerBackTitle: null,
                headerTitle: (
                    <HeaderTitleText children="2019/7/25(木)" />
                ),
            })
        },
        PlayAny: {
            screen: PlayingScreen,
        },
    },
    {
        initialRouteName: 'Timefree',
        defaultNavigationOptions:() =>  ({
            headerRight: <HeaderRight />,
            headerRightContainerStyle: {
                marginRight: 13,
            },
            headerStyle: {
                borderBottomWidth: 0,
            },
        })
    })

export default TimefreeNavigator;