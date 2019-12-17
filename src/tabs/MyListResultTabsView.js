import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import MyListResultLeftHOC from '../HOC/MyListResultLeftHOC';
import MyListResultRightHOC from '../HOC/MyListResultRightHOC';
import CustomTabbar from '../components/CustomTabBar_results';

export default MyListResultTabView = createMaterialTopTabNavigator(
    {
        ResultTimefree: {
            screen: MyListResultLeftHOC,
        },
        ResultNext: {
            screen: MyListResultRightHOC,
        },
    },
    {
        initialRouteName: 'ResultTimefree',
        tabBarComponent: CustomTabbar,
    }
);

