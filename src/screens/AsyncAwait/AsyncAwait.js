import React from 'react';
import { Text, View } from 'react-native';

// console.log('this will fire first');
// setTimeout(() => {
//     console.log('this will fire second');
// }, 500);
// console.log('this will fire last');


// A function
function myCallbackFunction() {
    console.log('Just a function');
}

// A function that takes another function as an argument
function higherOrderFunction(callback) {
     // When you call a function that is passed as an argument, it is referred to as a callback
     callback();
}

const anotherCallbackFunction = () => {
    console.log('This is also a function');
};

const newHigherOrderFunction = (callback) => {
    console.log('New higher order');
    setTimeout(() => {
        console.log('settimeout done calling callback');
        callback();
    }, 100);
};

const TAG = 'AsyncAwait.js';
const AsyncAwait = ({
    params,
}) => {

    console.log(TAG, 'called');

    higherOrderFunction(myCallbackFunction);
    newHigherOrderFunction(anotherCallbackFunction);

    return (
        <View>
            <Text>AsyncAwait</Text>
        </View>
    );
};

export default AsyncAwait;
