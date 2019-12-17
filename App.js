import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import{ createAppContainer } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import SearchFilter from './src/screens/SearchFilter';
import DrawersStack from './src/stacks/DrawersStack';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers/index';
import EditDrawer from './src/screens/EditDrawer';
const store = createStore(reducer);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: DrawersStack,
      navigationOptions: () => ({
        headerBackTitle: null,
      }),
    },
    SearchModal: {
      screen: SearchFilter,
      navigationOptions: () => ({
        headerLeft: null,
      }),
    },
    EditModal: {
      screen: EditDrawer,
      navigationOptions: () => ({
        headerLeft: null,
      }),
    }
  },
  {
    mode: 'modal',
    headerMode: 'none', 
  }
)

const AppContainer = createAppContainer(RootStack);

EStyleSheet.build();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}