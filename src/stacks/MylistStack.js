import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';
import PlayingScreen from '../HOC/PlayingScreenHOC';
import MyListResultTabsView from '../tabs/MyListResultTabsView';
import { HeaderTitleText } from '../components/CustomText';
import MyListTabsView from '../tabs/MyListTabsView';
import { BASIC_GRAY } from '../config/constants';

const MyListNavigator = createStackNavigator(
    {
        MyList: {
            screen: MyListTabsView,
            navigationOptions: ({navigation}) => ({
                headerBackTitle: null,
                headerTitle: 
                    <HeaderTitleText>マイリスト</HeaderTitleText>,
                headerLeft: <HeaderLeft navigation={navigation} />,
                headerLeftContainerStyle: {
                    marginLeft: 12,
                },
            })
        },
        SearchSubscribed : {
            screen: MyListResultTabsView,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 
                    <HeaderTitleText 
                        children={navigation.state.params.text} />,
                headerBackTitle: null, 
                headerTintColor: BASIC_GRAY,
                headerStyle: {
                    borderBottomWidth: 0,
                }   
            })
        },
        PlaySubscribed: {
            screen: PlayingScreen
        },
    },
    {
        initialRouteName: 'MyList',
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

export default MyListNavigator;