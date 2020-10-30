import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const SearchBar = (props) => {
    return(
        <TextInput
                placeholder= {props.place}
                onChangeText= {(value) => props.onSearch(value)}
                style={styles.textinput}
        />
    )
}

export {SearchBar}

const styles = StyleSheet.create({
    textinput: {
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 5
    }
})