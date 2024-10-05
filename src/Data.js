const questionArray = [
    {
        question: "What is a promise in JavaScript?",
        code: `
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
        `,
        options: [
            "An object representing the eventual completion or failure of an asynchronous operation.",
            "A function that runs after a timer is completed.",
            "A value that never changes.",
            "A type of event listener."
        ],
        description: "A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. In JavaScript, promises allow developers to write asynchronous code that is easier to read and maintain. A promise can be in one of three states: pending, fulfilled, or rejected. When a promise is pending, it means the asynchronous operation has not yet completed. Once the operation completes successfully, the promise transitions to the fulfilled state, providing a resulting value. If the operation fails, the promise is rejected, typically providing an error message. Promises can be chained using `.then()` for handling fulfilled promises and `.catch()` for handling rejections, allowing for cleaner handling of asynchronous workflows.",
        correctAnswer: 0 // index of the correct answer
    },
    {
        question: "What is the `this` keyword in JavaScript?",
        code: `
function showContext() {
  console.log(this);
}
        `,
        options: [
            "It refers to the current object in which the function is executing.",
            "It refers to the parent object.",
            "It refers to the window object in all contexts.",
            "It is a reference to the function itself."
        ],
        description: "The `this` keyword in JavaScript is a fundamental concept that refers to the context in which a function is executed. Its value is determined by how a function is called rather than where it is defined. In the global execution context, `this` refers to the global object (e.g., `window` in browsers). Inside a method, `this` refers to the object that the method is called on. In event handlers, `this` refers to the element that fired the event. In the case of arrow functions, `this` retains the value of the enclosing lexical context, which is useful in situations where you want to maintain the scope from a parent function. Understanding how `this` behaves is crucial for mastering object-oriented programming in JavaScript and effectively managing function contexts.",
        correctAnswer: 0 // index of the correct answer
    },
    {
        question: "What will the following code output?\n\nconsole.log(0.1 + 0.2 === 0.3);",
        code: `
console.log(0.1 + 0.2 === 0.3);
        `,
        options: ["true", "false", "NaN", "undefined"],
        description: "The statement `console.log(0.1 + 0.2 === 0.3);` will output `false` due to the way floating-point arithmetic works in JavaScript and many other programming languages. In JavaScript, numbers are represented using a double-precision 64-bit binary format, which can lead to precision errors in certain calculations. Specifically, the expression `0.1 + 0.2` does not exactly equal `0.3` due to how these values are represented in binary form. Instead, `0.1 + 0.2` results in a value that is very close to `0.3`, but not exactly equal. Consequently, the strict equality check (`===`), which compares both value and type without coercion, returns `false`. This behavior highlights the importance of being aware of floating-point precision issues when performing arithmetic operations in JavaScript.",
        correctAnswer: 1 // index of the correct answer
    },
    {
        question: "What is the difference between `==` and `===` in JavaScript?",
        code: `
console.log(0 == '0'); // true
console.log(0 === '0'); // false
        `,
        options: [
            "`==` compares values after coercion, `===` compares values without coercion.",
            "`==` compares both type and value, `===` only compares value.",
            "`===` compares both value and type, `==` only compares type.",
            "`==` compares objects, `===` compares arrays."
        ],
        description: "In JavaScript, `==` and `===` are both comparison operators, but they behave differently in how they compare values. The `==` operator, known as the equality operator, compares two values for equality after performing type coercion if necessary. This means that if the values being compared are of different types, JavaScript attempts to convert one or both of them to a common type before making the comparison. For example, `0 == '0'` would return `true` because the string `'0'` is coerced into a number. On the other hand, `===`, known as the strict equality operator, compares both the value and the type without any type conversion. This means that `0 === '0'` would return `false`, as the types are different (number vs. string). Understanding the difference between these two operators is crucial for writing reliable and bug-free JavaScript code, especially when dealing with user input or dynamic data.",
        correctAnswer: 0 // index of the correct answer
    },
    {
        question: "What is hoisting in JavaScript?",
        code: `
console.log(myVar); // undefined
var myVar = 5;
        `,
        options: [
            "Moving function declarations to the top of their scope before execution.",
            "Re-declaring variables after their initialization.",
            "Loading all external scripts before the DOM is rendered.",
            "Moving variables and functions to a separate block of code."
        ],
        description: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that you can use variables and call functions before they are declared in the code. For example, a function declaration can be called before its definition without causing an error. However, only the declarations are hoisted, not the initializations. For instance, if you declare a variable with `var` and then try to access it before its declaration, it will return `undefined`, not an error. Hoisting can lead to unexpected behavior, especially for beginners, which is why it's important to understand how it works. The introduction of `let` and `const` in ES6 has further refined variable scoping, making it less confusing, as these variables are not initialized until their declaration is encountered in the code.",
        correctAnswer: 0 // index of the correct answer
    }
];

export { questionArray };
