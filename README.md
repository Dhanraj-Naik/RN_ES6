## Working with ES6

### Import and Export
[ES6 Modules and How to Use Import and Export in JavaScript](https://www.digitalocean.com/community/tutorials/js-modules-es6)

---
### Scope 
- **Global Scope**
- **Local Scope** : can be divided into function scope and block scope.
  + **Function Scope** : Variable declared within the function
  + **Block Scope** : area within if, switch conditions or for and while loops. Whenever you see **{Curley brackets}** , it is a block scope.In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block. 
  *let* and *const* are block scope variables. *var* is globally scoped or function scoped.
  ![Block Scope](./externalAssets/block_scope.png "Block Scope example")

  ---

  ### Arrow Functions
  + An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.
  + An arrow function can be used with array methods like *map*, *filter*, *reduce*
  + **this** Binding with Arrow Functions
    - Arrow functions do not bind their own **this**.Rather, **this** in an arrow function always refers to its parent's this. Arrow functions inherit the scope of their parent.

    In ES5, we use **this** either by storing  parents **this** in a variable and use it, or we **bind(this)** ot the function to use it.
  +  References:


      [ES6 arrow functions Examples and Usage](https://www.digitalocean.com/community/tutorials/getting-started-with-es6-arrow-functions-in-javascript)


      [ES5 functions and ES6 arrow functions explaination on binding](https://dev.to/sarah_chima/arrow-functions-in-es6-24)

---

### Template Literals or `Template Strings`
+ Tempelate strings use back-ticks rather then quotes to denote a string.
+ String substitution using tempelate literals
+ Multiline Strings are easy .

---

### Destructuring Arrays and objects
+ Array Destructuring
  - Basic Destructuring
  - Skipping Items in an Array
  - Assigning the rest of an array
  - Destructuring Assignment with Functions
  - Using Default Values
  - Swapping Values using Destructuring Assignment

```javascript
let a = 10;
let b = 20;
console.log(`Before swap a: ${a} b: ${b}`);
[a, b] = [b, a];
console.log(`After swap a: ${a} b: ${b}`);
```

[ES6 Array Destructuring](https://dev.to/sarah_chima/destructuring-assignment---arrays-16f)

+ Object Destructuring
  - Basic Destructuring
  - Using a new Variable Name
  - Using default values
  - Computed property names

  ```javascript
  var prop = "name";
  var {[prop] : foo} = {name: "Sarah", country: "Nigeria", job: "Developer"};
  console.log(foo);//"Sarah"
  ```
  - **Object.entries** method returns an array of given objects own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a *for...in* or *for-each* loop. 

    ```javascript
    const note = {
        id: 1,
        title: 'My first note',
        date: '01/01/1970',
    }
    // Using forEach
    Object.entries(note).forEach(([key, value]) => {
        console.log(`${key}: ${value}`)
    })
    ```
  
  - Combining Arrays with Objects
  - Nesting in Object Destructuring
  - Rest in Object Destructuring
  - Object Destructuring and Functions

  [ES6 Object Destructuring](https://dev.to/sarah_chima/object-destructuring-in-es6-3fm)

  ---
  ### Classes
  + Class defination in ES5

  ```javascript
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

    //creating instance
    let Prachi = new Person('Prachi', '150');
    Prachi.sayHeight();
    // Prachi.sayName(); //not getting called here

    let Dhanraj = new NewPerson();
    Dhanraj.name = 'Thor';
    Dhanraj.sayHeight();
    Dhanraj.sayName();
  ```
  + Class defination in ES6
  + Creating instance of class
  + Methods in classes
    - Prototype methods
    - Static methods
  + SubClassing Classes

  ```javascript
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

    ////creating instance
    let Vanshi = new NewPerson('Vanshi', 60);
    Vanshi.sayName();
    console.log(Vanshi.fullName());
    console.log(Vanshi.computeFullName());


    NewPerson.sayHi();

    let Sachi = new Developer();
    Sachi.sayName();
    Sachi.sayTools('tom', 'jerry');
  ```

  [Good Explaination on es5 and es6 classes](https://dev.to/sarah_chima/es6-classes-7m)

  ---

  ### Maps
  - Maps are a new object type that allow to store collections of key-value pairs.
  - Unlike with objects, map keys can be of any type, even objects or functions.
  - On top of that, with maps we can iterate in the order in which the values were added, contrary to objects where there’s no guarantee about the order.
  - examples:

  ```javascript
        const sayHello = () => console.log('Hello guyzz!');
        //map initialization
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

        //call
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
    
        USING FOREACH: key : Dhanraj has value name.
        MapType.js:8 USING FOREACH: key : BallPen has value pen.
        MapType.js:8 USING FOREACH: key : This is a function has value function sayHello() {
        return console.log('Hello guyzz!');
    }.
    

  ``` 

  ---
  ### Generators
  - Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.
  Or in simple words, A generator allows you to pause the execution of a function and resume it later. 

  ```javascript
    //example 1: generator function
    function* someGenerator() {
        yield 'Cats';
        yield 'Dogs';
        yield 'Birds';
    }
    const gen = someGenerator();

    //call
    console.log(gen.next()); //{value: 'Cats', done: false}
    console.log(gen.next().value); //Dogs
    console.log(gen.next().done); //false
    console.log(gen.next()); //{value: undefined, done: true}

    //example2
    //eg2: ID Generator
    function* idCreator() {
        let i = 0;
        while (true) {
            ++i;
            yield i;
        }
    }

    const myIdGen = idCreator();

    //call
    console.log(myIdGen.next()); //{value: 1, done: false}
    console.log(myIdGen.next()); //{value: 1, done: false}
    ...
    console.log(myIdGen.next());  //{value: 10, done: false}
  ```


  ### Spread With Array
  + Spread allows objects and iterables (such as arrays) to be unpacked, or expanded, which can be used to make shallow copies of data structures to increase the ease of data manipulation.
  + Combining two arrays

  ```javascript
    // Create an Array
    const tools = ['hammer', 'screwdriver']
    const otherTools = ['wrench', 'saw']

    //OLD WAY
    // Concatenate tools and otherTools together
    const allTools = tools.concat(otherTools)

    //WITH ES6
    // Unpack the tools Array into the allTools Array
    const allTools = [...tools, ...otherTools]
    //output: ["hammer", "screwdriver", "wrench", "saw"]
  ```
  + Adding an object in array

    ```javascript
    // Array of users
    const users = [
        { id: 1, name: 'Ben' },
        { id: 2, name: 'Leslie' },
    ]

    //old way
    // A new user to be added
    const newUser = { id: 3, name: 'Ron' }
    users.push(newUser)

    //using es6
    const updatedUsers = [...users, newUser]
    //output :
    `[{id: 1, name: "Ben"}
    {id: 2, name: "Leslie"}
    {id: 3, name: "Ron"}]`
    ```
    ``This is helpful with handling immutability``

  + In Javascript, when you create an object or array and assign it to another variable, you are not actually creating a new object—you are passing a reference.

  ```javascript
    //an array is created and assigned to another variable
    // Create an Array
    const originalArray = ['one', 'two', 'three']
    // Assign Array to another variable
    const secondArray = originalArray

    //Removing the last item of the second Array will modify the first one
    secondArray.pop()
    console.log(originalArray)
    //output:
    `["one", "two"]`
  ```

  ``Spread allows you to make a shallow copy of an array or object, meaning that any top level properties will be cloned, but nested objects will still be passed by reference. For simple arrays or objects, a shallow copy may be all you need``

  ```javascript
    // Create an Array
    const originalArray = ['one', 'two', 'three']
    // Use spread to make a shallow copy
    const secondArray = [...originalArray]
    // Remove the last item of the second Array
    secondArray.pop()
    console.log(originalArray) 
    //output
    `["one", "two", "three"]` 
  ```


  ### Spread with Object
  + When working with objects, spread can be used to copy and update objects.
  + Originally, **Object.assign()** was used to copy an object.

  ```javascript
    // Create an Object and a copied Object with Object.assign()
    const originalObject = { enabled: true, darkMode: false }
    const secondObject = Object.assign({}, originalObject)

    `The secondObject will now be a clone of the originalObject`
  ```
  + You can shallow copy an object by spreading it into a new one.

  ```javascript
    // Create an object and a copied object with spread
    const originalObject = { enabled: true, darkMode: false }
    const secondObject = { ...originalObject }
    console.log(secondObject)
    //output:
    `{enabled: true, darkMode: false}`
  ```

  + Adding or modifying properties on an existing object in an immutable fashion.

  ```javascript
    const user = {
        id: 3,
        name: 'Ron',
    }

    const updatedUser = { ...user, isLoggedIn: true }
    console.log(updatedUser)
    //output
    {id: 3, name: "Ron", isLoggedIn: true}
  ```

  + Updating objects via spread is that any nested object will have to be spread as well.

  ```javascript
    const user = {
    id: 3,
    name: 'Ron',
    organization: {
        name: 'Parks & Recreation',
        city: 'Pawnee',
    },
    }

    //test1:
    const updatedUser = { ...user, organization: { position: 'Director' } }
    console.log(updatedUser)
    //Output:
    `
    id: 3
    name: "Ron"
    organization: {position: "Director"}
    `

  ```

  ``But since we are seeking an immutable solution, we can spread the inner object to retain the existing properties``


  ```javascript
    const updatedUser = {
        ...user,
        organization: {
            ...user.organization,
            position: 'Director',
        },
    }

    console.log(updatedUser)
    //output:
    `
    id: 3
    name: "Ron"
    organization: {name: "Parks & Recreation", city: "Pawnee", position: "Director"}
    `
  ```


  ### Rest parameter
  + syntax appears the same as spread (...) but has the opposite effect. 
  + Instead of unpacking an array or object into individual values, the rest syntax will create an array of an indefinite number of arguments.

  ```javascript
    function restTest(...args) {
        console.log(args)
    }

    restTest(1, 2, 3, 4, 5, 6)

    //output:
    [1, 2, 3, 4, 5, 6]
  ```
  + Rest syntax can be used as the only parameter or as the last parameter in the list. If used as the only parameter, it will gather all arguments, but if it’s at the end of a list, it will gather every argument that is remaining

  ```javascript
    function restTest(one, two, ...args) {
        console.log(one)
        console.log(two)
        console.log(args)
    }

    restTest(1, 2, 3, 4, 5, 6)
    //output:
    1
    2
    [3, 4, 5, 6]
  ```

