import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, Button } from 'react-native';

let person = { name: 'Dhanraj', country: 'India', job: 'Developer', experience: 20, friends: ['Sarbesh', 'Nitya'] };

let Character = {
    name: 'Thor', country: '9Realm', job: 'Save 9 Realms', experience: 2000,
    place: {
        city: 'Ponda',
        state: 'Goa',
    }
};

let items = { item1: 1, item2: 2, item3: 3, item4: 4 }

const ObjectDestructuring = ({
    navigation,
    route,
}) => {
    const [text, setText] = useState('');

    /*   let myName = person.name;
      console.log(myName);
      const { name, country, job: myJob, friend = 'Prachi', experience: myExp = 5, friends } = person;
      console.log(name);
      console.log(myJob);
      console.log(friend);
      console.log(myExp);
      console.log(friends);
  
      //Computed property name
      let property = 'country';
      const { [property]: aCharacher, place : { city, ...other} } = Character;
      console.log(aCharacher);
      console.log(city);
      console.log(other); */

    //Object.entries method returns an array of given objects
    Object.entries(person).forEach(([key, value]) => {
        console.log(`key :${key} has value :${value}`);
    });

    return (
        <View style={{ flex: 1, backgroundColor: 'red', paddingBottom: 0, }} >
            <ScrollView style={{ backgroundColor: 'orange' }}>
                <Text>ObjectDestructuring</Text>

                <Button
                    title={'Go to Rest Scene'}
                    onPress={() => navigation.navigate('rest')}
                />

                <TextInput
                    style={{ height: 140 }}
                    placeholder='Type here to translate!'
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                {Object.entries(person).map((item, index) => {
                    return <Text style={{ paddingVertical: 30, fontSize: 50 }} key={index}>{item}</Text>;
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default ObjectDestructuring;
