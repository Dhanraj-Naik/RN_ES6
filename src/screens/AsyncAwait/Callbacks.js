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

function first() {
    console.log(1);
}

function second(callback) {
    setTimeout(() => {
        console.log(2);
        callback();
    }, 10);
}

function third() {
    console.log(3);
}

const pyramidOfDoom = () => {
    setTimeout(() => {
        console.log('10');
        setTimeout(() => {
            console.log('20');
            setTimeout(() => {
                console.log('30');
            }, 500);
        }, 2000);
    }, 1000);
};

//example2
const asynchronousRequest = (args, callback) => {
    //throw an error if no arguments are passed
    if (!args) {
        return callback(new Error('Whoa! Something went wrong.'));
    } else {
        setTimeout(() => {
            // Just adding in a random number so it seems like the contrived asynchronous function
            // returned different data
            return callback(null, { body: args + ' ' + Math.floor(Math.random() * 10) });
        }, 2000);
    }
};

const callbackHell = () => {
    asynchronousRequest('FIRST', (error, response) => {
        if (error) {
            console.log(error);
            return
        }
        console.log(response.body);
        asynchronousRequest('SECOND', (error2, response2) => {
            if (error2) {
                console.log(error2);
                return
            }
            console.log(response2.body);
            asynchronousRequest(null, (error3, response3) => {
                if (error3) {
                    console.log(error3);
                    return
                }
                console.log(response3.body);
            })
        })
    })
}

// Nested asynchronous requests
function callbackHellWithES5() {
    asynchronousRequest('First', function first(error, response) {
        if (error) {
            console.log(error)
            return
        }
        console.log(response.body)
        asynchronousRequest('Second', function second(error, response) {
            if (error) {
                console.log(error)
                return
            }
            console.log(response.body)
            asynchronousRequest(null, function third(error, response) {
                if (error) {
                    console.log(error)
                    return
                }
                console.log(response.body)
            })
        })
    })
}


const TAG = 'Callbacks.js';
const Callbacks = ({
    params,
}) => {
    console.log(TAG, 'called');

    // higherOrderFunction(myCallbackFunction);
    // newHigherOrderFunction(anotherCallbackFunction);

    first();
    second(third);
    // third();

    // pyramidOfDoom();

    //execute callback hell
    // callbackHell();

    callbackHellWithES5();


    return (
        <View>
            <Text>Callbacks</Text>
        </View>
    );
}

export default Callbacks;
