import React, {useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';

import useMarketList from './functions/useMarketList';
import usePriceUpdate from './functions/useMarketPrice';
import CoinCellComponent from './components/CoinCell.component';
import Icon from '../../components/Icon';
import Header from '../../components/Header';
import FilterListComponent from './components/FilterList.component';
import Spacer from '../../components/Divider';
import SortComponent from './components/Sort.component';

const MarketListScreen = () => {
  const {colors} = useTheme();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const marketList = useMarketList();
  const priceUpdate = usePriceUpdate();

  const data = marketList.data?.marketData || {};
  const coinKey = marketList.data?.marketKeys || [];
  const priceData = priceUpdate.data || {};

  return (
    <SafeAreaView edges={['top']} style={[styles.container, {backgroundColor: colors.background}]}>
      {/*Header*/}
      <Header
        title={'Market'}
        rightContainer={
          <>
            <TouchableOpacity onPress={() => setShowSearchBar(!showSearchBar)}>
              <Icon name={'star-o'} color={colors.text} size={24} />
            </TouchableOpacity>
            <Spacer size={8} horizontal />
            <TouchableOpacity onPress={() => setShowSearchBar(!showSearchBar)}>
              <Icon name={'search'} color={colors.text} size={24} />
            </TouchableOpacity>
          </>
        }
      />

      {/*Filter Choice*/}
      <FilterListComponent />

      {/*Sort Choice*/}
      <SortComponent />

      <FlatList
        refreshControl={
          <RefreshControl refreshing={marketList.isFetching} onRefresh={marketList.refetch} />
        }
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        style={styles.flatListContainer}
        maxToRenderPerBatch={20}
        scrollEventThrottle={10}
        data={coinKey}
        renderItem={({item}) => {
          return <CoinCellComponent data={data} item={item} priceData={priceData} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    marginHorizontal: 10,
  },
});

export default MarketListScreen;
