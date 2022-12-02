import React from "react";
import {Animated, Image, Text, View} from "react-native";
import {SvgUri} from "react-native-svg";
import {NumericFormat} from "react-number-format";
import {MarketPrice} from "../MarketPrice.types";
import {MarketList} from "../MarketList.types";

const IC_CHEVRON_DOWN = require('../../../../assets/images/chevron-down.png');
const IC_CHEVRON_UP = require('../../../../assets/images/chevron-up.png');

type CellProps = {
  priceData:  Record<string, MarketPrice>
  item: string;
  data: Record<string, MarketList>
}

const getColorHandler = (status: string) => {
  switch (status) {
    case 'down':
      return '#e80000'
    case 'up':
      return '#00a200'
    default:
      return '#000000'
  }
}

const CoinCellComponent = React.memo(({priceData, item, data}: CellProps) => {
  const animation = new Animated.Value(0);
  const status = priceData?.[item]?.priceChangeStatus;
  const priceChangeStatus = priceData?.[item]?.day < 0 ? 'down' : 'up';

  const textColorInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [getColorHandler(status), '#000000'],
  });

  Animated.timing(animation, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SvgUri
            width="30"
            height="30"
            uri={data[item].logo}
            color={data[item].color}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              {data[item].name}
            </Text>
            <Text style={{marginTop: 4}}>{data[item].currencySymbol}</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <NumericFormat
            displayType="text"
            thousandSeparator={'.'}
            decimalSeparator={','}
            thousandsGroupStyle={'thousand'}
            value={priceData?.[item]?.latestPrice}
            renderText={value => (
              <Animated.Text style={{color: textColorInterpolate , fontWeight: 'bold'}}>{value}</Animated.Text>
            )}
            prefix="Rp "
          />
          <View style={{flexDirection: 'row', marginTop: 4}}>
            <Image
              resizeMode={'contain'}
              style={{width: 20, height: 20, marginTop: -1, tintColor: getColorHandler(priceChangeStatus)}}
              source={
                priceChangeStatus ? IC_CHEVRON_DOWN : IC_CHEVRON_UP
              }
            />
            <Text
              style={{
                color: getColorHandler(priceChangeStatus),
                fontWeight: 'bold',
              }}>
              {priceData?.[item]?.day?.toString().replace('-', '') + '%'}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderTopWidth: 0.4,
          borderColor: 'gray',
          width: '100%',
        }}
      />
    </>
  );
});

export default CoinCellComponent;
