import React, { useRef, useCallback, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import colors from './assets/colors/colors';
import ListItem from './src/components/ListItem';
import { sampleData } from './assets/data/sampleData';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Chart from './src/components/Chart';

export default function App() {
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current.present();
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Markets</Text>
        </View>
        <View style={styles.divider} />
        <View>
          <FlatList
            data={sampleData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <ListItem
                  logoUrl={item.image}
                  name={item.name}
                  symbol={item.symbol}
                  currentPrice={item.current_price}
                  priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                  onPress={() => openModal(item)}
                />
              )
            }}
          />
        </View>
      </View>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        {selectedCoinData ? (
          <Chart
            currentPrice={selectedCoinData.current_price}
            logoUrl={selectedCoinData.image}
            name={selectedCoinData.name}
            priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
            sparkline={selectedCoinData.sparkline_in_7d.price}
            symbol={selectedCoinData.symbol}
          />) : null}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    marginTop: 40,
    marginLeft: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    marginTop: 16,
    height: StyleSheet.hairlineWidth,
    borderWidth: 1,
    backgroundColor: colors.gray,
    marginHorizontal: 16,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    borderRadius:20,
  }
});
