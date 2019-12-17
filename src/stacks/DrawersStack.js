import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft, fromRight } from 'react-navigation-transitions';
import MenuDrawer from '../screens/MenuDrawer';
import LocationDrawer from '../screens/LocationDrawer';
import BottomTabsNavigator from './BottomTabsStack';

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  if (prevScene
    && prevScene.route.routeName === 'Main'
    && nextScene.route.routeName === 'Right') {
    return fromRight(400);
  }
  return fromLeft(400);
}

const DrawersStack = createStackNavigator(
    {
      Main: {
        screen: BottomTabsNavigator,
      },
      Right: {
        screen: MenuDrawer
      },
      Left: {
        screen: LocationDrawer
      }
    },
    {
      initialRouteName: 'Main',
      headerMode: 'none',
      transitionConfig: (nav) => handleCustomTransition(nav),
    }
)

export default DrawersStack;