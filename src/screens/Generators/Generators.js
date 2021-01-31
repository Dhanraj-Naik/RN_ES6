import React from 'react';
import { Text, View } from 'react-native';

//example 1: generator function
function* someGenerator() {
    yield 'Cats';
    yield 'Dogs';
    yield 'Birds';
}

const gen = someGenerator();

//eg2: ID Generator
function* idCreator() {
    let i = 0;
    while (true) {
        ++i;
        yield i;
    }
}

const myIdGen = idCreator();

const Generators = ({
    params,
}) => {

    console.log(gen.next());
    console.log(gen.next().value);
    console.log(gen.next().done);
    console.log(gen.next());

    console.log(myIdGen.next());
    console.log(myIdGen.next());
    console.log(myIdGen.next());
    console.log(myIdGen.next());

    return (
        <View>
            <Text>Generators</Text>
        </View>
    );
};

export default Generators;
