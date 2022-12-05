import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';

import Icon from '../../../components/Icon';

type TypeFilterList = {
  logo: React.ComponentProps<typeof FontAwesome>['name'];
  title: string;
};

const filterList: TypeFilterList[] = [
  {
    logo: 'lightbulb-o',
    title: 'New',
  },
  {
    logo: 'viacoin',
    title: 'DeFi',
  },
  {
    logo: 'gamepad',
    title: 'NFT/Gaming',
  },
  {
    logo: 'stack-exchange',
    title: 'CEX',
  },
];

const FilterListComponent = () => {
  const {colors} = useTheme();

  const onPressFilter = (title: string) => {
    console.log(title);
  };

  return (
    <ScrollView horizontal style={styles.container}>
      {filterList.map(item => {
        return (
          <TouchableOpacity
            onPress={() => {
              onPressFilter(item.title);
            }}
            key={item.title}
            style={[
              styles.border,
              {
                borderColor: colors.border,
              },
            ]}>
            <Icon name={item.logo} color={colors.text} size={12} />
            <Text style={[styles.title, {color: colors.text}]}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {paddingLeft: 20, marginBottom: 10, height: 45},
  border: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 30,
    marginRight: 8,
    paddingHorizontal: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  title: {
    marginLeft: 8,
    fontSize: 12,
  },
});

export default FilterListComponent;
