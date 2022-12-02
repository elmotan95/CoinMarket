import React from 'react';
import {Image, RefreshControl, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useMarketList from "./functions/useMarketList";
import usePriceUpdate from "./functions/useMarketPrice";
import CoinCellComponent from "./components/CoinCell.component";
import Animated from 'react-native-reanimated';

const IC_FILTER = require('../../../assets/images/ic_filter.png');

const MarketListScreen = () => {
  const filterList = [
    {
      logo: IC_FILTER,
      title: 'New',
    },
    {
      logo: IC_FILTER,
      title: 'DeFi',
    },
    {
      logo: IC_FILTER,
      title: 'NFT/Gaming',
    },
    {
      logo: IC_FILTER,
      title: 'CEX',
    },
  ];
  const safeAreaViewInsets = useSafeAreaInsets();

  const marketList = useMarketList();
  const priceUpdate = usePriceUpdate();

  const data = marketList.data?.marketData || {};
  const coinKey = marketList.data?.marketKeys || [];
  const priceData = priceUpdate.data || {};

  return (
    <View
      style={{
        flex: 1,
        paddingTop: safeAreaViewInsets.top,
        backgroundColor: 'white',
      }}>
      {/*Header*/}
      <View style={{marginVertical: 20, paddingHorizontal: 20, justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>Market</Text>
        <View>
          <TouchableOpacity>

          </TouchableOpacity>
        </View>
      </View>
      {/*Filter Choice*/}
      <ScrollView horizontal style={{paddingLeft: 20, marginBottom: 10, height: 45}}>
        {filterList.map(item => {
          return (
            <TouchableOpacity onPress={() => {}} key={item.title} style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 30, marginRight: 8, paddingHorizontal: 8, borderRadius: 16, borderColor: '#cbcbcb', borderWidth: 1}}>
              <Image source={IC_FILTER} style={{width: 16, height: 16, tintColor: 'black'}}/>
              <Text style={{marginLeft: 8, fontSize: 12 }}>{item.title}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>

      {/*Sort Choice*/}
      <Animated.FlatList
        refreshControl={
          <RefreshControl
            refreshing={marketList.isFetching}
            onRefresh={marketList.refetch}
          />
        }
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 10}}
        maxToRenderPerBatch={20}
        scrollEventThrottle={10}
        data={coinKey}
        renderItem={({item}) => {
          return <CoinCellComponent data={data} item={item} priceData={priceData} />;
        }}
      />
    </View>
  );
};

export default MarketListScreen;
