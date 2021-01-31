import React from 'react';
import { Text, View } from 'react-native';

const arrayOne = [1, 2];
const arrayTwo = [...arrayOne];

const arrayThree = [3, 4];
const arrayMerge = [...arrayOne, ...arrayThree];

const users = [
    {
        id: 1,
        name: 'Vilas'
    },
    {
        id: 2,
        name: 'Shailesh'
    },
];

const newUser = { id: 4, name: 'Abbas' };

const updatedUsers = [...users, newUser];

const myUser = { id: 33, name: 'dkbos' };
const addingFeature = { ...myUser, job: 'developer' }


const theirUser = {
    id: 3,
    name: 'Ron',
    organization: {
        name: 'Parks & Recreation',
        city: 'Pawnee',
    },
};

const addState = {
    ...theirUser,
    organization: { ...theirUser.organization, state: 'Goa' },
    
}



const Spread = ({
    params,
}) => {
    console.log(arrayTwo);
    console.log(arrayMerge);
    console.log(users);
    console.log(updatedUsers);
    updatedUsers.pop();
    console.log(users);
    console.log(updatedUsers);

    console.log(addingFeature);

    console.log(addState);
    return (
        <View>
            <Text>Spread</Text>
        </View>
    );
};

export default Spread;
