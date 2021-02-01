import React from 'react';
import { Text, View } from 'react-native';
import { fetchMyUser, fetchUser, getMovieById, getMovieCharacter, promiseAllModified } from '../../utils/FetchUser';


//example1
const myPromise = () => {
    return new Promise((resolve, reject) => {
        console.log('I promise!');
        setTimeout(() => {
            console.log('Idata fetched');
            resolve();
        }, 200);
    });
};

//example2
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        console.log('My reject call');
        setTimeout(() => {
            console.log('Server rejected call');
            reject(JSON.stringify('{status: 404, message: page not found}'));
        }, 3000);
    });
};

//example 3
const specialPromise = () => {
    return new Promise((resolve, reject) => {
        console.log('MAKING API CALL');
        setTimeout(() => {
            //Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
            //Math.floor Round a number downward to its nearest integer
            let random = Math.floor(Math.random() * 2); // 1 or 2
            if (random) {
                console.log('SUCCESS');
                resolve('Logined in successfully');
            } else {
                console.log('ERROR');
                reject('Login error');
            }
        }, 4000);
    });
};

const promiseToLove = iAmMature => {
    return new Promise((resolve, reject) => {
        if (iAmMature) {
            setTimeout(() => {
                resolve('I love you so much!');
            }, 2000);
        } else {
            setTimeout(() => {
                reject('It\'s not you, it\'s me...');
            }, 2000);
        }
    });
};

const promiseToProtect = iAmNice => {
    return new Promise((resolve, reject) => {
        if (iAmNice) {
            setTimeout(() => {
                resolve('I promise I will protect you!');
            }, 6000);
        } else {
            setTimeout(() => {
                reject('What? Get lost!');
            }, 6000);
        }
    });
};

const promiseToBeHereOnTime = hairLooksGood => {
    return new Promise((resolve, reject) => {
        if (hairLooksGood) {
            setTimeout(() => {
                resolve('I promise I will be there!');
            }, 2500);
        } else {
            setTimeout(() => {
                reject('How about tomorrow?');
            }, 2500);
        }
    });
};


const TAG = 'Promises.js';
const Promises = ({
    params,
}) => {

    console.log(TAG, 'called');

    // myPromise()
    //     .then(() => {
    //         console.log('I made it');
    //     });

    // rejectedPromise()
    //     .then(() => {
    //         console.log('SERVER RESPONDED');
    //     })
    //     .catch((err) => {
    //         console.log('My promise is rejected :(');
    //         console.log(err);
    //     });

    // specialPromise()
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    //     .then((res) => { //res undefined but final then will be called no matter what.
    //         console.log(`final then: ${res}`);
    //     });

    // console.log('\n\n');

    /*
    //CASE 1
    //First promise
    promiseToLove(false)
        .then(statement => {
            console.log(statement);
        })
        .catch(statement => {
            console.log(statement);
        })
        //returns another promise
        .then(() => promiseToProtect(false))
        //handles our second promise
        .then(statement => {
            console.log(statement);
        })
        .catch(statement => {
            console.log(statement);
        })
        // returns annother promise
        .then(() => promiseToBeHereOnTime(false))
        // handles our third promise
        .then(statement => {
            console.log(statement);
        })
        .catch(statement => {
            console.log(statement);
        })
        // this always runs
        .then(() => {
            console.log('And they lived happily ever after!!!');
        });

        */

    /*
console.log('\n\n');
//CASE 2
//First promise
promiseToLove(true)
.then(statement => {
    console.log(statement);
})
.catch(statement => {
    console.log(statement);
})
//returns another promise
.then(() => promiseToProtect(true))
//handles our second promise
.then(statement => {
    console.log(statement);
})
.catch(statement => {
    console.log(statement);
})
// returns annother promise
.then(() => promiseToBeHereOnTime(true))
// handles our third promise
.then(statement => {
    console.log(statement);
})
.catch(statement => {
    console.log(statement);
})
// this always runs
.then(() => {
    console.log('And they lived happily ever after!!!');
});

*/

    /*
    //CASE 3
    // I only wrote one catch(). But this catch() will be called 
    //if any of the promises before is rejected:
    //First promise
    promiseToLove(false)
        .then(statement => {
            console.log(statement);
        })
        //returns another promise
        .then(() => promiseToProtect(false))
        //handles our second promise
        .then(statement => {
            console.log(statement);
        })
        // returns annother promise
        .then(() => promiseToBeHereOnTime(false))
        // handles our third promise
        .then(statement => {
            console.log(statement);
        })
        .catch(statement => { //this one catch will be called of any of function fails
            console.log(statement);
        })
        // this always runs
        .then(() => {
            console.log('And they lived happily ever after!!!');
        });

        */

        //functions are called simultiousnously here but response you will get once all functions give response
    /*
        Promise.all(
        [promiseToLove(true),
        promiseToProtect(true),
        promiseToBeHereOnTime(true)])
        .catch((err) => {
            console.log(err);
            console.log('ERROR BOI');
        })
        .then(([response1, response2, response3]) => {
            console.log(`response1: ${response1}`);
            console.log(`response2: ${response2}`);
            console.log(`response3: ${response3}`);
        })
        ;
        */

        /*
        //fetch user
        // console.log('API =>', fetchUser());
        fetchMyUser()
        .then((data) => {
            console.log('SUX: ', data);
        })
        .catch(error => {
            console.log('ERR: ', error);
        });

        */

        /*
        //result of first promise is feed to second promise
        getMovieById(1)
        .then(data => getMovieCharacter(data))
        .then(response => {
            console.log('MOVIE:  suc', response);
        }).catch(err => {
            console.log('MOVIE: er ', err);
        });

        */

        promiseAllModified().then(data => {
            console.log('BOI BOI: data',data);
        }).catch(err => {
            console.log('BOI BOI: er',err);
        })

    return (
        <View>
            <Text>Promises</Text>
        </View>
    );
};

export default Promises;
