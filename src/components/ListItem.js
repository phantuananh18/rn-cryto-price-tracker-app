import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';


const ListItem = ({onPress, name, symbol, currentPrice, priceChangePercentage7d, logoUrl}) => {
    const priceChangeColor=priceChangePercentage7d > 0 ? colors.green:colors.red;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {/* style left side */}
                <View style={styles.leftWrapper}>
                    <Image
                        source={{ uri: logoUrl }}
                        style={styles.image}
                    />
                    <View style={styles.leftText}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subTitle}>{symbol}</Text>
                    </View>
                </View>
                {/* style right side */}
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>${currentPrice.toLocaleString('en-US',{currency:'USD'})}</Text>
                    <Text style={[styles.subTitle,{color:priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 24,
    },
    image: {
        width: 48,
        height: 48,
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftText: {
        marginLeft: 8,
    },
    rightWrapper: {
        alignItems: 'flex-end'
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    subTitle:{
        fontSize:14,
        color:colors.gray,
    }
});
