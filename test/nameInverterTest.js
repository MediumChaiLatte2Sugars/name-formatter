const { expect } = require('chai');
const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name', function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name with additional whitespace', function() {
    const inputName = "name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a last-name, first-name when passed a first and last name', function() {
    const inputName = "name lastname";
    const expectedOutput = "lastname, name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  //Stretch
  it('should return a last-name, first-name when passed a first and last name with extra whitespace around', function() {
    const inputName = "name lastname ";
    const expectedOutput = "lastname, name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return an empty string when passed a single honorific', function() {
    const inputName = "Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return honorific first-name when passed honorific first-name', function() {
    const inputName = "Dr. Doctor";
    const expectedOutput = "Dr. Doctor";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a honorific last-name, first-name when passed honorific first-name last-name', function() {
    const inputName = "Dr. Michael Pichael";
    const expectedOutput = "Dr. Pichael, Michael";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function() {
    const inputName = " Dr. Michael Pichael ";
    const expectedOutput = "Dr. Pichael, Michael";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should throw an error when name is undefined', function() {
    const inputName = undefined;
    assert.throws(() => { nameInverter(inputName) }, Error);
  });
});