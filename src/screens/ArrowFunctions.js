import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//es5
function multiplyByTwo(num) {
    return num * 2;
}
//es5
const multiplyByThree = function (num) {
    return num * 3
}


const multiplyBySix = (num) => {
    return num * 6;
}

const multiplyBySeven = (num) => num * 7; //OR const multiplyBySeven = num => num * 7;

const printName = (first, last) => console.log(`printName: ${first} ${last}`);

const myArray = [1, 2, 3, 4, 5];

const mapExample = myArray.map(num => num * 2);
const filterExample = myArray.filter(num => num % 2 === 0);

const ArrowFunctions = () => {

    return (
        <View style={styles.container}>
            <Text>{'ArrowFunctions'}</Text>
            <Text>{`Es5 function eg1: ${multiplyByTwo(3)}`}</Text>
            <Text>{`Es5 function eg2: ${multiplyByThree(3)}`}</Text>
            <Text>{`Es6 function eg1: ${multiplyBySix(3)}`}</Text>
            <Text>{`Es6 function eg2: ${multiplyBySeven(3)}`}</Text>
            <Text>{`Es6 function (no return) eg3: ${printName('Dhanraj', 'Naik')}`}</Text>

            <Text>{`Array: ${myArray}`}</Text>
            <Text>{`Using Arrow Functions in Map: ${mapExample}`}</Text>
            <Text>{`Using Arrow Functions in Filter: ${filterExample}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
});

export default ArrowFunctions;
