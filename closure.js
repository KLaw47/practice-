function outer() {
    let counter = 0;
  
    return function inner() {
      counter++;
      console.log(counter);
    };
  }
  
  const count = outer();
  count(); // ?
  count(); // ?
  count(); // ?
  