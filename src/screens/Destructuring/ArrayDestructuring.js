import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const names = ['Dhanraj', 'Prachi', 'Pranav', 'Prasad', 'Melinda', 'Sarvesh', 'Sujay'];
const phones = ['oneplus'];

//swapping a and b using destructuring
let a = 10;
let b = 20;

const ArrayDestructuring = ({
    navigation,
    route,
}) => {

    // comma to skip
    //...to add remaining items
    //providing default value
    const [me, her, , friend, boss, ...halfFry] = names;
    const [android, ios = 'iphone'] = phones;
    console.log(me);
    console.log(halfFry);

    console.log(android);
    console.log(ios);

    console.log(`Before swap a: ${a} b: ${b}`);
    [a, b] = [b, a];
    console.log(`After swap a: ${a} b: ${b}`);

    return (
        <View>
            <Text>ArrayDestructuring</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default ArrayDestructuring;
