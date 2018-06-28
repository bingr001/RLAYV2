import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';

const DevoButton = ( {onPress} ) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image resizeMode="contain" style={styles.icon} source={require('./images/Devo.png')} />
    </View>
  </TouchableOpacity>
);

DevoButton.propTypes = {
  onPress: PropTypes.func,
};

export default DevoButton;
