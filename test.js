
// describe("pow", function() {

//   it("raises to n-th power", function() {
//     assert.equal(pow(2, 3), 8);
//   });

// });

describe("pow", function() {

  describe("raises x to power 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it("if n is negative, the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("if n is not integer, the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

});