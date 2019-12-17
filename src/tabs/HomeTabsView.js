import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../components/CustomTabBar_Live';

import LiveListHOC from '../HOC/LivelistHOC';
import RecomListHOC from '../HOC/RecomListHOC';
import TopicsList from '../screens/TopicsList';
import PopularPrograms from '../screens/PopularPrograms';
import HeaderLeft from '../components/HeaderLeft';

class HomeTabView extends Component {
    static navigationOptions = ({navigation}) => ({
        headerLeft: <HeaderLeft navigation={navigation} />,
        headerLeftContainerStyle: {
            marginLeft: 12,
        },
    });
    render() {
        return(
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() =><CustomTabBar />}                     
                scrollWithoutAnimation={true}
            >
                <LiveListHOC tabLabel='ライブ' />
                <RecomListHOC tabLabel='あなたへ' />
                <TopicsList tabLabel='トッピクス' />
                <PopularPrograms tabLabel='人気番組' />
            </ScrollableTabView>
        );
    }
}

export default HomeTabView;