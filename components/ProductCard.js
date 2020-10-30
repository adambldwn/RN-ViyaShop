import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';


const ProductCard = ({item}) => {
    return(
        <View style={styles.container}>
            
            <Image
                source={{uri : item.imgURL}}
                style={styles.image}
            />
            <Text style={{flex:1}}>{item.title}</Text>
            <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                <Text style={{fontWeight:'bold'}}>{item.price}</Text>
                
                {item.inStock == false ? <Text>Stokta Yok</Text> : null }
              
                
            </View>
            
        </View>
    )
}

export {ProductCard};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderColor: '#bdbdbd',
        borderWidth: 1,
        margin:5,
        padding: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain'
    }
})