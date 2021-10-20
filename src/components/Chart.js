import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../../assets/colors/colors'

const Chart = ({ currentPrice, logoUrl, name, priceChangePercentage7d, sparkline, symbol }) => {
    const priceChangeColor=priceChangePercentage7d>0?colors.green:colors.red
    return (
        <View style={styles.container}>
            {/* Titles */}
            <View style={styles.titleWrapper}>
                <View style={styles.upperTitle}>
                    <View style={styles.upperLeftTitle}>
                        <Image source={{ uri: logoUrl }} style={styles.image} />
                        <Text style={styles.subTitle}>{name} ({symbol})</Text>
                    </View>
                    <Text style={styles.subTitle}>7d</Text>
                </View>
                

                <View style={styles.lowerTitle}>
                    <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
                    <Text style={[styles.percent,{color:priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                </View>
            </View>
        </View>
    )
}

export default Chart

const styles = StyleSheet.create({
    container: {
        margin:16,
    },
    titleWrapper: {
        marginTop:20,
    },
    upperTitle: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    upperLeftTitle: {
        flexDirection:'row',
    },
    image: {
        width: 24,
        height: 24,
    },
    subTitle: {
        marginLeft:8,
        color:colors.gray,
        fontSize:14,
    },
    lowerTitle: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    boldTitle: {
        fontSize:24,
        fontWeight:'bold',
    },
    percent: {
        fontSize:18,
        fontWeight:'normal',
    },
})
