// test cases are described in fixtures.js
describe("parseJSON", function(){

  // it("should match the result of calling JSON.parse", function(){
  //   validObjects.forEach(function(obj){
  //     var result = parseJSON(JSON.stringify(obj));
  //     var equality = _.isEqual(result, obj); // why can't we use `===` here?
  //     expect(equality).toBeTruthy();
  //   });

  //   // if you really want to stress test your code, try this...
  //   // extraCreditStrings.forEach(function(string){
  //   //   var expected = JSON.parse(string);
  //   //   var result = parseJSON(string);
  //   //   var equality = _.isEqual(result, expected);
  //   //   expect(equality).toBeTruthy();
  //   // });
  // });

  it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[0];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });

  it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[1];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });

  it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[2];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });

  it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[3];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });

  it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[4];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });

  it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[5];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });

  it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[6];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });

  it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[7];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });

  it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[8];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });

    it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[9];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });

  it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[10];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });

  it("should match the result of calling JSON.parse", function(){
    var obj = validObjects[11];
    var result = parseJSON(JSON.stringify(obj));
    var equality = _.isEqual(result, obj); // why can't we use `===` here?
    console.log(obj +':  '+equality);
    console.log('\n\n\n');
    expect(equality).toBeTruthy();
  });



  // it("should error out sometimes", function(){
  //   invalidStrings.forEach(function(test){
  //     // expect(parseJSON(test)).toBe(undefined); // you can use this test if you'd prefer
  //     expect(function(){
  //       parseJSON(test);
  //     }).toThrow();
  //   });
  // });

});
