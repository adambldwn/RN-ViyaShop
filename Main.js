import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {ProductCard, SearchBar} from './components'

import productData from './product_data.json';



const App = () => {

    const [searchValue, setSearchValue] = useState("");
    const [displayList, setDisplayList] = useState([]);

    useEffect(() => {setDisplayList(productData)}, [] )

    useEffect(() => {
        const filterValue = productData.filter( item => {
            const productTitle = item.title.toUpperCase();
            const searchText = searchValue.toUpperCase();

            return productTitle.indexOf(searchText) > -1;
        })
        setDisplayList(filterValue);
    }, [searchValue])

    const renderList = ({item}) => <ProductCard item={item} />
    return(
        <SafeAreaView>
            <Text style={styles.title}>ViyaShop</Text>
            <SearchBar
                place = 'Lütfen aramak istediğiniz ürünü giriniz'
                onSearch = {(value) => setSearchValue(value)}
            />
            <View>
                <FlatList
                    keyExtractor = {(item,title) => title.toString()}
                    data={displayList}
                    renderItem={renderList}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}


export default App;

const styles = StyleSheet.create({
    title: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    }
})