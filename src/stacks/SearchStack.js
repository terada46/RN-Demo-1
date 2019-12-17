import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Search from '../screens/Search';
import SearchResultTabsView from '../tabs/SearchResultTabsView';
import HeaderRight from '../components/HeaderRight';
import PlayingScreen from '../HOC/PlayingScreenHOC';
import { HeaderTitleText } from '../components/CustomText';
import { BASIC_GRAY } from '../config/constants';

const SearchNavigator = createStackNavigator(
    {
        Search: {
            screen: Search,
            navigationOptions: () => ({
                headerBackTitle: null,
            })
        },
        SearchResult: {
            screen: SearchResultTabsView,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 
                    <HeaderTitleText children={navigation.state.params.text} />,
                headerBackTitle: null, 
                headerTintColor: BASIC_GRAY,
                headerStyle: {
                    borderBottomWidth: 0,
                }   
            })
        }, 
        PlaySearch: {
            screen: PlayingScreen
        },
    },
    {
        initialRouteName: 'Search',
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

export default SearchNavigator;