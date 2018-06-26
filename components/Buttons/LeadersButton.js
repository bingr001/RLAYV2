import React from 'react';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';


import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';

const Leaders = ( {onPress} ) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={{
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,


      }} source={require('./images/Leaders.png')} />

    </View>
  </TouchableOpacity>
);

Leaders.propTypes = {
  onPress: PropTypes.func,
};

export default Leaders;
