import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import tagLineForBook, { bookName, bookPrice as noteBookPrice, dataBook } from './CombineExport';
import MyNumbers from './MyNumbers';
import { character, rollNo, userName, characterRealm } from './MyValues';
import { walletCost, walletName } from './SingleExport';
import * as Everything from './Everything';

export default class ImportAndExport extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{`MyNumbers: ${MyNumbers}`}</Text>
                <Text>{`RollNo: ${rollNo}`}</Text>
                <Text>{`Name: ${userName}`}</Text>
                <Text>{`Character: ${character()}`}</Text>
                <Text>{`characterRealm: ${characterRealm()}`}</Text>

                <Text>{`Tagline: ${walletName}`}</Text>
                <Text>{`walletName: ${walletCost()}`}</Text>

                <Text>{`bookName: ${bookName}`}</Text>
                <Text>{`tagLineForBook: ${tagLineForBook()}`}</Text>
                <Text>{`noteBookPrice: ${noteBookPrice()}`}</Text>

                <Text>{`bottleName: ${Everything.bottleName}`}</Text>
                <Text>{`bottleTagLine: ${Everything.bottleTagLine}`}</Text>

                <Text>{`bottleTagLine: ${dataBook.xyz}`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
