function outer() {
    let counter = 0;
  
    return function inner() {
      counter++;
      console.log(counter);
    };
  }
  
  const count = outer();
  count(); // 1
  count(); // 2
  count(); // 3
  

// here I'm going to make a function that returns a new function that multiplies by a number that I passed in.

function makeMultiple(multiplier) {
    return function (number) {
        return number * multiplier;
    }
}

const double = makeMultiple(2);
console.log(double(5))

//double is defined as the base function I already made and it multiplies by 2 see line 18, where make multiple takes the multiplier. 2 is the multiplier in this case.
// when I console log double, its going to return the number i pass in, and the multiplier. like it says on line 20.