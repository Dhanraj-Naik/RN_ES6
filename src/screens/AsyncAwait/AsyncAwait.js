import React from 'react';
import { Text, View } from 'react-native';
import { getAsyncUser, getDogsWithBreed, getDogs } from '../../utils/FetchUser';

const waitDude = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ms) {
                resolve(`Waited for ${ms} ms`);
            } else {
                reject(new Error('Please provide ms'));
            }
        }, ms);
    });
};

const getSetGo = async () => {
    try {
        const res1 = await waitDude(2000);
        console.log('res1: ', res1);
        const res2 = await waitDude(3000);
        console.log('res2: ', res2);
        const res3 = await waitDude(2000);
        console.log('res3: ', res3);
    } catch (error) {
        console.log(error);
        console.log('error in MS');
    }
};

const goWithoutErrors = async () => {
    const res1 = await waitDude(2000);
    console.log('res1: ', res1);
    const res2 = await waitDude(200);
    console.log('res2: ', res2);
    const res3 = await waitDude(2000);
    console.log('res3: ', res3);
};


// First we make a function that takes in our async function as an argument
const catchErrors = (fn) => {

    // And return a function
    return function () {
        // Which returns our async function, which is a promse on which we can call `.catch`
        return fn().catch((err) => {
            console.error('uhoh', err);
        });
    };
};

const wrappedFunc = catchErrors(goWithoutErrors);

const TAG = 'AsyncAwait.js';
const AsyncAwait = ({
    params,
}) => {

    console.log(TAG, 'called');

    // getSetGo();
    // goWithoutErrors();

    // wrappedFunc(goWithoutErrors);
    // or
    // wrappedFunc(() =>goWithoutErrors(300));

    // const data = getAsyncUser();
    // console.log('<><>: ', data);


    getDogs();

    // getDogsWithBreed(['husky', 'malamute', 'terrier']);

    return (
        <View>
            <Text>AsyncAwait</Text>
        </View>
    );
};

export default AsyncAwait;
