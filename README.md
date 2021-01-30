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
  - Combining Arrays with Objects
  - Nesting in Object Destructuring
  - Rest in Object Destructuring
  - Object Destructuring and Functions

  [ES6 Object Destructuring](https://dev.to/sarah_chima/object-destructuring-in-es6-3fm)

  ---
  

