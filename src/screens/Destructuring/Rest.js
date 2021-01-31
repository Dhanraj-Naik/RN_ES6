import React from 'react';
import { Text, View } from 'react-native';

const restOperationTest = (...args) => {
    console.log(args);
};

const restTestTwo = (a, b, ...args) => {
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`args: ${args}`);
}

const Rest = ({
    params,
}) => {

    restOperationTest(1, 2, 3, 4, 5);

    restTestTwo(1, 2, 3,4,5,6);

    return (
        <View>
            <Text>Rest</Text>
        </View>
    );
};

export default Rest;
