// import chai, declare expect variable
const expect = require('chai').expect;

//import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

//unit tests for 'fizzBuzzer' function
describe('adder', function() {

    //test normal case
  it('should return fizz when input divisible by 3', function() {
        const normalCases = [3, 6, 9];
    normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input);
        expect(answer).to.equal("fizz");
    });
  });
  it('should return buzz when input divisible by 5', function() {
    const normalCases = [5, 10, 20];
normalCases.forEach(function(input) {
    const answer = fizzBuzzer(input);
    expect(answer).to.equal("buzz");
    });
  });
  it('should return fizz-buzz when input is divisible by 15', function() {
    const normalCases = [15, 45, 60];
normalCases.forEach(function(input) {
    const answer = fizzBuzzer(input);
    expect(answer).to.equal("fizz-buzz");
    });
  });
  it('should return error when input not a number', function() {
    const badCases = [null];
badCases.forEach(function(input) {
    expect(function(){
        fizzBuzzer(input); 
    }).to.throw(Error);
    });
  });
});