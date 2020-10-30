import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import productData from './product_data.json'

import { ProductCard } from './components';
import { TextInput } from 'react-native-gesture-handler';


const App = () => {
    const [searchValue, setSearchValue] = useState("");
    const [displayList, setDisplayList] = useState([]);

    const renderListItem = ({ item }) => <ProductCard product={item} />

    useEffect(() => {
        setDisplayList(productData)
    }, [])

    useEffect(()=> {
        const filteredValue = productData.filter( item => {

            const text = searchValue.toUpperCase();
            const productTitle= item.title.toUpperCase();
    
            return productTitle.indexOf(text) > -1;
        }) 
        setDisplayList(filteredValue)
    }, [searchValue])



    return (
        <SafeAreaView>
            <View>
                <Text style={styles.banner}>ViyaShop</Text>

                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Ürün ara..."
                        onChangeText={(value) => setSearchValue(value)}
                    />
                </View>

                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={displayList}
                    renderItem={renderListItem}
                    numColumns={2}
                />

            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    banner: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})