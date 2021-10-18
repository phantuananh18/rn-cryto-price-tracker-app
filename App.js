import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import colors from './src/assets/colors/colors';
import ListItem from './src/components/ListItem';
import { sampleData } from './src/assets/data/sampleData';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Markets</Text>
      </View>
      <View style={styles.divider} />
      <View>
        <FlatList 
          data={sampleData}
          keyExtractor={item=>item.id}
          renderItem={({item})=>{
            return(
              <ListItem 
                logoUrl={item.image}
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChangePercentage24h={item.price_change_percentage_24h}
              />
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    marginTop:80,
    marginLeft:16,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
  },
  divider:{
    marginTop:16,
    height:StyleSheet.hairlineWidth,
    borderWidth:1,
    backgroundColor:colors.gray,
    marginHorizontal:16,
  }
});
