import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

import Icon from '../../../components/Icon';
import Spacer from '../../../components/Divider';

const SortComponent = () => {
  const {colors} = useTheme();

  return (
    <View style={styles.sortContainer}>
      <Text style={[styles.text14Bold, {color: colors.text}]}>{'Sort By'}</Text>
      <View style={styles.rowCenterContainer}>
        <Icon name={'chevron-down'} color={'gray'} size={12} />
        <Spacer size={8} horizontal />
        <Text style={[styles.text14Bold, {color: colors.text}]}>{'Default'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sortContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text14Bold: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  rowCenterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SortComponent;
