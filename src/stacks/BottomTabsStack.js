import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeNavigator from '../stacks/HomeStack';
import TimefreeNavigator from '../stacks/TimefreeStack';
import SearchNavigator from '../stacks/SearchStack';
import MyListNavigator from '../stacks/MylistStack';
import normailize from '../components/normailizeText';

import { Ionicons } from '@expo/vector-icons';
import { MAIN_BLUE } from '../config/constants';

const MyTabLabel = ({tintColor, children}) => (
    <Text style={{ 
        color:tintColor, 
        marginTop:2.5, 
        fontSize:normailize(10), 
        fontWeight: '500' 
    }}>
      {children}
    </Text>
);

const IconComponent = ({tintColor, iconName}) => (
  <Ionicons style={{ paddingTop:6 }} name={iconName} size={28} color={tintColor} />
);

const BottomTabsNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <MyTabLabel tintColor={tintColor}>ホーム</MyTabLabel>
        ),
        tabBarIcon: ({tintColor}) => (
          <IconComponent tintColor={tintColor} iconName='md-home' />
        ),
      }
    },
    Timefree: {
      screen: TimefreeNavigator,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <MyTabLabel tintColor={tintColor}>番組表</MyTabLabel>
        ),
        tabBarIcon: ({tintColor}) => (
          <IconComponent tintColor={tintColor} iconName='md-pricetags' />
        )
      }
    },
    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <MyTabLabel tintColor={tintColor}>さがす</MyTabLabel>
        ),
        tabBarIcon: ({tintColor}) => (
          <IconComponent tintColor={tintColor} iconName='ios-search' />
        ),
      }
    },
    Mylist: {
      screen: MyListNavigator,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <MyTabLabel tintColor={tintColor}>マイリスト</MyTabLabel>
        ),
        tabBarIcon: ({tintColor}) => (
          <IconComponent tintColor={tintColor} iconName='ios-settings' />
        )
      }
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: MAIN_BLUE,
      style: {
        height: 53,
        paddingBottom: 3,
      },
    },
  }
);

export default BottomTabsNavigator;