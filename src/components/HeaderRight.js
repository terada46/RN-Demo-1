import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { TAB_TEXT_COLOR } from '../config/constants';
import EStyleSheet from 'react-native-extended-stylesheet';
import { withNavigation } from 'react-navigation';

const HeaderRight = ({navigation}) => (
    <TouchableOpacity 
        activeOpacity={0.7}
        onPress={()=> navigation.navigate('Right')}
    >
        <SimpleLineIcons name="menu" size={styles.$menuIcon} color={TAB_TEXT_COLOR} />
    </TouchableOpacity>
)
export default withNavigation(HeaderRight);

const styles = EStyleSheet.create({
    $menuIcon: '1.3rem',
})