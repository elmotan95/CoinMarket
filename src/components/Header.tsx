import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

type HeaderProps = {
  title: string;
  rightContainer: JSX.Element;
};

const Header = ({title, rightContainer}: HeaderProps): JSX.Element => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
      <View style={styles.rightContainer}>{rightContainer}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
