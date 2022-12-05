import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {NumericFormat} from 'react-number-format';
import {useTheme} from '@react-navigation/native';

import {MarketPrice} from '../MarketPrice.types';
import {MarketList} from '../MarketList.types';
import Icon from '../../../components/Icon';

type CellProps = {
  priceData: Record<string, MarketPrice>;
  item: string;
  data: Record<string, MarketList>;
};

const getColorHandler = (status: string, defaultColor: string) => {
  switch (status) {
    case 'down':
      return '#e80000';
    case 'up':
      return '#00a200';
    default:
      return defaultColor;
  }
};

const CoinCellComponent = React.memo(({priceData, item, data}: CellProps) => {
  const {colors} = useTheme();
  const animation = new Animated.Value(0);
  const status = priceData?.[item]?.priceChangeStatus;
  const priceChangeStatus = priceData?.[item]?.day < 0 ? 'down' : 'up';

  const textColorInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [getColorHandler(status, colors.text), colors.text],
  });

  Animated.timing(animation, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftContentContainer}>
          <SvgUri width="30" height="30" uri={data[item].logo} color={data[item].color} />
          <View style={styles.coinDetailContainer}>
            <Text style={[styles.coinName, {color: colors.text}]}>{data[item].name}</Text>
            <Text style={[styles.coinSymbol, {color: colors.text}]}>
              {data[item].currencySymbol}
            </Text>
          </View>
        </View>
        <View style={styles.rightContentContainer}>
          <NumericFormat
            displayType="text"
            thousandSeparator={'.'}
            decimalSeparator={','}
            thousandsGroupStyle={'thousand'}
            value={priceData?.[item]?.latestPrice}
            renderText={value => (
              <Animated.Text style={[styles.coinValue, {color: textColorInterpolate}]}>
                {value}
              </Animated.Text>
            )}
            prefix="Rp "
          />
          <View style={styles.coinChangesContainer}>
            <Icon
              name={priceChangeStatus ? 'chevron-down' : 'chevron-up'}
              color={getColorHandler(priceChangeStatus, colors.text)}
              size={12}
            />
            <Text
              style={[
                styles.coinChange,
                {
                  color: getColorHandler(priceChangeStatus, colors.text),
                },
              ]}>
              {priceData?.[item]?.day?.toString().replace('-', '') + '%'}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinDetailContainer: {
    marginLeft: 10,
  },
  coinName: {
    fontWeight: 'bold',
  },
  coinSymbol: {
    marginTop: 4,
  },
  rightContentContainer: {
    alignItems: 'flex-end',
  },
  coinValue: {
    fontWeight: 'bold',
  },
  coinChangesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  coinChange: {
    marginLeft: 4,
    fontWeight: 'bold',
  },
  divider: {
    borderTopWidth: 0.4,
    borderColor: 'gray',
    width: '100%',
  },
});

CoinCellComponent.displayName = 'CoinCellComponent';

export default CoinCellComponent;
