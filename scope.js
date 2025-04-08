function testScope() {
    let a = 1;
    if (true) {
      let b = 2;
      var c = 3;
    }
  
    console.log(a);
    console.log(b); 
   console.log(c); 
  }
  
  testScope();
  

  // a is 1,
  // b is inside the if block, we cant run that and get the value aht the level of testscope()
  // var is function scoped, but we do not use it in es6. var might lead to some "function scope leaks"
