import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import HomeTabView from '../tabs/HomeTabsView';
import TopicScreen from '../screens/Topic';
import PlayingScreen from '../HOC/PlayingScreenHOC';
import PopularTimefreeScreen from '../screens/PopularTimefree';
import PopularLiveScreen from '../screens/PopularLive';
import HeaderRight from '../components/HeaderRight';
import { HeaderTitleText } from '../components/CustomText';

import Image from 'react-native-scalable-image';
const { width } = Dimensions.get('window');
const logoWidth = width * 0.23;

const HeaderImage = () => (
    <Image width={logoWidth} source={require('../../assets/images/logo.png')} />
)

const HomeNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeTabView,
            navigationOptions: () => ({
                headerBackTitle: null,
                headerTitle: <HeaderImage />
            })
        },
        Play_from_home: {
            screen: PlayingScreen,
        },
        Topic: {
            screen: TopicScreen,
        },
        PopularTimefree: {
            screen: PopularTimefreeScreen,
            navigationOptions: () => ({
                headerTitle: 
                    <HeaderTitleText children={'タイムフリーの人気番組'} />,
                headerBackTitle: null, 
            })
        },
        PopularLive: {
            screen: PopularLiveScreen,
            navigationOptions: () => ({
                headerTitle: 
                    <HeaderTitleText children={'ライブの人気番組'} />,
                headerBackTitle: null, 
            })
        }
    },
    {
        initialRouteName: 'Home',
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

export default HomeNavigator;