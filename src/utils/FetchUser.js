
//fetch a user
export const fetchUser = () => {
    fetch('https://api.github.com/users/octocat')
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log('data: ', data);
            return data;
        })
        .catch(error => {
            console.log('error: ', error);
            return new Error(error);
        });

    // .finally(() => {
    //     console.log('done boi');
    // });
};

export const fetchMyUser = () => {
    return new Promise((resolve, reject) => {
        fetch('https://api.github.com/users/octocat')
            .then((response) => {
                console.log(response);
                return response.json();
            }) //As .json() returns a promise as well, we tag on another .then
            .then(data => {
                console.log('data: ', data);
                return resolve(data);
            })
            .catch(error => {
                console.log('error: ', error);
                return reject(new Error(error));
            });
    });
};


const movies = [
    { title: 'Thor 3, Ragnarok', company: 'Marvel', hero: 'Thor', id: 1 },
    { title: 'Black Panther', company: 'Marvel', hero: 'Black Panther', id: 2 },
    { title: 'Wonder Woman', company: 'DC', hero: 'Wonder Woman', id: 3 },
];

const heroes = [
    { name: 'Thor', team: 'Avengers' },
    { name: 'Black Panther', team: 'Avengers' },
    { name: 'Wonder Woman', team: 'Justice League', actor: 'Gal Gadot' },
];

export const getMovieById = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const movieAvailableObject = movies.find(movie => movie.id === id);
            if (movieAvailableObject) {
                resolve(movieAvailableObject);
            } else {
                reject(new Error('Sorry! No movies in DB'));
            }
        }, 4000);
    });
};

export const getMovieCharacter = data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const movieCharacter = heroes.find(hero => hero.name === data.hero);
            if (movieCharacter) {
                data.heroInfo = movieCharacter;
                resolve(data);
            } else {
                reject(new Error('Error, please try with other id'));
            }
        }, 3000);
    });
};


const dog = fetch('https://dog.ceo/api/breeds/image/random');
const dev = fetch('https://api.github.com/users/aderaaij');

export const promiseAllModified = () => {
    return Promise
        .all([dog, dev])
        .then(res => Promise.all(res.map(r => r.json())))
        // .then(data => {
        //     console.log('promiseAllModified: ', data);
        // })
        .then(([dogsJson, devJson]) => {
            console.log('promiseAllModified DOG ', dogsJson);
            console.log('promiseAllModified DEV ', devJson);
        })
        ;
};


export const getAsyncUser = async () => {
    try {
        const response = await fetch('https://api.github.com/users/octocat');
        const data = await response.json();
        console.log('getAsyncUser', data);
        return data;
    } catch (error) {
        console.log('getAsyncUser err', error);
        return new Error(error);
    }
};


//async await fetch call
export const getDogs = async () => {
    // Store the promise in a variable
    const dog1 = fetch('https://dog.ceo/api/breeds/image/random');
    const dog2 = fetch('https://dog.ceo/api/breeds/image/random');

    const results = await Promise.all([dog1, dog2]); // Wait until both promises are ready

    // Array destructure, await our res.json() promises
    const [mut1, mut2] = await Promise.all(results.map(res => res.json()));
    console.log(mut1, mut2);

};

//If we have multiple promises we can even map over them and return them in a Promise.all.
export const getDogsWithBreed = async (breeds) => {
    const promises = breeds.map((breed) => {
        return fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    });
    const results = await Promise.all(promises);
    const data = await Promise.all(results.map(r => r.json()));
    console.log(data);
};

