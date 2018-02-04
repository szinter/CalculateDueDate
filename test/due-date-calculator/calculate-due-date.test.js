const {expect} = require('chai');
const CalculateDueDate = require('../../due-date-calculator/calculate-due-date');

describe('calculate-due-date', function() {
    it('should return CalculateDueDate as a function ', function() {
        expect(CalculateDueDate).to.be.a('function');
    });  
});