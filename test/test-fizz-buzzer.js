// import chai
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', () => {
  it('should give fizz-buzz when divisible by 15', () => {
    const testNums = [15, 30, 45, 60];
    testNums.forEach(num => {
      expect(fizzBuzzer(num)).to.equal('fizz-buzz');
    });
  });

  it('should give fizz when divisible by 3', () => {
    const testNums = [3,6,9,12,18];
    testNums.forEach(num => {
      expect(fizzBuzzer(num)).to.equal('fizz');
    });
  });

  it('should give buzz when divisible by 5', () => {
    const testNums = [5,10,20,25];
    testNums.forEach(num => {
      expect(fizzBuzzer(num)).to.equal('buzz');
    });
  });

  it('should return the given number if not divisible by 3,5,15', () => {
    const testNums = [2,4,8,14,16];
    testNums.forEach(num => {
      expect(fizzBuzzer(num)).to.equal(num);
    });
  });

  it('should raise an error if arg not number', () => {
    const notNums = ['a', '1', true];
    notNums.forEach(input => {
      expect(()=>{
        fizzBuzzer(input)
      }).to.throw(Error);
    })
  });
});