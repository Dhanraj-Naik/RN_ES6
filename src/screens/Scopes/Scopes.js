import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//global scope
var fruit = 'Global Scope';

console.log('Area outside function: ', fruit);

const areaOfSquare = () => {
    //Function Scope
    var myLength = 2;
    console.log(myLength);
}

areaOfSquare();
// console.log(myLength);//crash


function foo() {

    if (true) {
        var fruit1 = 'apple';        //exist in function scope
        const fruit2 = 'banana';     //exist in block scope
        let fruit3 = 'strawberry';   //exist in block scope
    }

    console.log(fruit1);
    // console.log(fruit2);//crash
    // console.log(fruit3);//crash
}

foo();

const Scopes = () => {
    console.log('Area inside function: ', fruit);

    //Local scope
    var name = 'Dhanraj';

    return (
        <View style={styles.container}>
            <Text>{fruit}</Text>
            <Text>{'Local Scope'}</Text>
            <Text>{'Function Scope'}</Text>
            <Text>{'Block Scope'}</Text>
        </View>
    );
};

export default Scopes;

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});
