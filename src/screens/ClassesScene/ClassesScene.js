import React from 'react';
import { Text, View } from 'react-native';

//es5 classes
function Person(name, height) {
    this.name = name;
    this.height = height;

    //defining method internally or with prototype
    this.sayHeight = function () {
        console.log(this.height);
    };
}

Person.prototype.sayName = function () {
    this.console.log(`calss name: ${this.name}`);
};

//////////

//ES6 classes
class NewPerson {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    sayHeight() {
        console.log(this.height);
    }
    sayName() {
        console.log(this.name);
    }
    get fullName() {
        return this.computeFullName;
    }
    computeFullName() {
        return this.name + ' ' + ' is a great guy';
    }
    static sayHi() {
        console.log('Hi guys!!');
    }
}

//subclass
class Developer extends NewPerson {
    constructor(name, height) {
        super(name, height);
        this.name = 'iOS dev';
    }

    sayTools(tool1, tool2) {
        console.log('I love ' + tool1 + ' and ' + tool2);

    }

}

const ClassesScene = ({
    params,
}) => {

    let Prachi = new Person('Prachi', '150');
    Prachi.sayHeight();
    // Prachi.sayName(); //not getting called here

    let Dhanraj = new NewPerson();
    Dhanraj.name = 'Thor';
    Dhanraj.sayHeight();
    Dhanraj.sayName();

    let Vanshi = new NewPerson('Vanshi', 60);
    Vanshi.sayName();
    console.log(Vanshi.fullName());
    console.log(Vanshi.computeFullName());


    NewPerson.sayHi();

    let Sachi = new Developer();
    Sachi.sayName();
    Sachi.sayTools('tom', 'jerry');

    return (
        <View>
            <Text>ClassesScene</Text>
        </View>
    );
};

export default ClassesScene;
