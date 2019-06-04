# Javascript

## Index

## Operators

Now we know how to store information using variables, it's time to use those variables. For certain actions ( operations ) with our variables, we can use the operators provided by JS. An operator is a symbol which represents a certain action.

## Types of operators

### Comparison operators

When writing code you will frequently encounter situations where you want to compare certain values. To do this, you can use the [comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators). Comparison operators return `true` or `false`.

The operator `===` allows us to check if two values are **equal**.

```
console.log(123 === 123) //output: true

console.log(123 === 456) //output: false
```

------

The operator `!==` checks if two values are **not equal**.

```
console.log(123 !== 123) //output: false

console.log(123 !== 456) //output: true
```

------

If we want to check if a value is **greater or equal** or **smaller or equal** we use `>=`or `<=`respectively.

### Arithmetic operators

Obviously comparing values isn't the only thing you can do with JS. Thanks to the [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators) you can also add `+`, subtract `-`, divide `/` or mulitply `*` values.

Two other commonly used arithmetic operators are `++` and `--`. Can you deduct what they do, based on the following example: 

```
let x = 1
let y = 1

console.log(x) //output: 1
console.log(y) //output: 1

x++
console.log(x) //output: 2

y--
console.log(y) //output: 0

```

> extra: what's the difference between `++x` and `x++` ?

#### Logical operators

There are 3 kinds of [logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators): ``&&``(AND), ``||``(OR), ``!`` (NOT).

The `&&` operator wil return `true` when the left **AND** right statement are `true`.

The `||` operator wil return `true` when the left **OR** right statement is `true`.

The `!` operator wil return an opposite value.

```
let hungry = true
let thirsty = false

console.log( hungry && thirsty ) 	//output: false
console.log( hungry || thirsty ) 	//output: true
console.log( ! thirsty ) 			//output: true

```

#### Other operators

For a complete list of all operators you can use in JavaScript you can check the documentation on [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).

**Return to**:  [Overview](../)  
