import React from 'react';
import { Text, View } from 'react-native';


const sayHello = () => console.log('Hello guyzz!');

let things = new Map();
things.set('name', 'Dhanraj');
things.set('pen', 'BallPen');
things.set(sayHello, 'This is a function');

//Initializing map from arrays
const funArray = [
    ['chicken', 'Tandoori'],
    ['laptop', 'Coding'],
    ['Cricket', 'Playing'],
];

let myArrayMap = new Map(funArray);

const MapType = ({
    params,
}) => {

    console.log(things);
    console.log(things.has('pen'));
    console.log(things.get('name'));
    console.log(things.get(sayHello));

    console.log(myArrayMap);
    console.log(myArrayMap.keys());
    console.log(myArrayMap.values());

    // //iterating over map
    for (const [key, value] of things) {
        console.log(`key : ${key} has value ${value}.`);
    }

    //NOTE: here first argument is value and second argument is key
    things.forEach((key, value) => {
        console.log(`USING FOREACH: key : ${key} has value ${value}.`);
    });
    //output:
    /*
        USING FOREACH: key : Dhanraj has value name.
        MapType.js:8 USING FOREACH: key : BallPen has value pen.
        MapType.js:8 USING FOREACH: key : This is a function has value function sayHello() {
        return console.log('Hello guyzz!');
    }.
    */


    return (
        <View>
            <Text>MapType</Text>
        </View>
    );
}

export default MapType;
