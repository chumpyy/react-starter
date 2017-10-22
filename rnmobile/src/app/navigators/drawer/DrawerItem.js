import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Platform } from 'react-native';

import { Text, TouchableItem, View } from '../../../common/components';
import { getColor } from '../../../common/utils/color';

const DrawerItem = ({ label, onPress }) => (
  <View style={styles.component}>
    {onPress && (
      <TouchableItem onPress={onPress} delayPressIn={0}>
        <ItemContent label={label} />
      </TouchableItem>
    )}
    {!onPress && <ItemContent label={label} />}
  </View>
);

DrawerItem.PropTypes = {
  label: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default DrawerItem;

const ItemContent = ({ label }) => (
  <View style={styles.item}>
    {typeof label === 'string' ? <Text style={styles.label}>{label}</Text> : label}
  </View>
);

ItemContent.PropTypes = {
  label: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  component: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    paddingVertical: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
  },
});
