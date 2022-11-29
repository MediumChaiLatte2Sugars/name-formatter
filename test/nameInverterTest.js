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
});