# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @spencer_malott/lotide`

**Require it:**

`const _ = require('@spencer_malott/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([array])`: Returns the head of a given array. If the array does not contain any items the function returns an empty array. 
* `tail([array])`: Returns the tail of a given array. If if one or fewer values are present in the array. The function returns an empty array. 
* `middle([array])`: Returns the middle item(s) of a given array. For arrays with a an odd length greater than or equal to 3, it returns the single middle number in the array. For arrays with an even length greater than or equal to 4, it returns the two middle numbers in the array. If the array length is two or less, it returns an empty array. 
* `countLetters('string')`: Returns an object with the key values equal to each of the letters in the string. The object values are equal to the number of times each letter key occurs in the string.
* `countOnly([array], {array[0]: boolean, array[1], boolean...})`: Returns an object that contains the names that have correspond to true values in the object passed into the function. The returned objects value corresponds to the number of times that name is found in the array passed into the function. 
* `findKey({Object}, callback function)`: A callback function that returns either true or false is used to find the key value of an object. The function returns the key value associated with the first true return of the callback function. 
* `findKeyByValue({Object}, value)`: This function returns the first key that has the associated value that is passed to this function. 
* `letterPositions("string")`: This function accepts a string and returns an object that contains key values equal to each of the string characters. The value associated with each key is an array that contains the position(s) at which the key character is found in the string. 
* `map([array], callback function)`: The function accepts an array and a function that operates on each element of the array. The function returns a new array of the elements were modified by the callback function. For example one could pass in an array of numbers and a callback function that multiples a number by 2. The result would be a new array equivalent to the original array but with each of the elements multiplied by 2.  
* `takeUntil([array], callback function`): The function accepts an array and a function that operates on each element of the array. The function creates a new array and attemps to populate it with the values of the original array until the value of the callback function is true. For instance if the following array was passed [1,2,-1,3] with a callback function that returns true for possitive values only, the returned array would be [1,2].
* `without([array1], [array2])`: The function accepts two arrays. This first array is the source array. The second array contains elements to discard from the first array. The function returns a new array that is a modified version of array1 that has had any elements found in both array1 and array2 removed. 