import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import SearchResultLeftHOC from '../HOC/SearchResultLeftHOC';
import SearchResultRightHOC from '../HOC/SearchResultRightHOC';
import CustomTabbar from '../components/CustomTabBar_results';

export default SearchResultTabView = createMaterialTopTabNavigator(
    {
        ResultTimefree: {
            screen: SearchResultLeftHOC,
        },
        ResultNext: {
            screen: SearchResultRightHOC,
        },
    },
    {
        initialRouteName: 'ResultTimefree',
        tabBarComponent: CustomTabbar,
    }
);

