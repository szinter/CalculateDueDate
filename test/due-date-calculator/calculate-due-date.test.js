const {expect} = require('chai');
const CalculateDueDate = require('../../due-date-calculator/calculate-due-date');

describe('calculate-due-date', function() {
    it('should return CalculateDueDate as a function ', function() {
        expect(CalculateDueDate).to.be.a('function');
    });  
    
    it('should throw Error if submit date is NOT valid', function() {
        const monday = new Date(Date.UTC(2018, 1, 5, 8, 30));
        const sunday = new Date(Date.UTC(2018, 1, 4, 11, 30));
        expect(() => CalculateDueDate(monday)).to.throw();
        expect(() => CalculateDueDate(sunday)).to.throw();
    }); 
    
    it('should NOT throw Error if submit date IS valid', function() {
        const monday = new Date(Date.UTC(2018, 1, 5, 9, 30));
        expect(() => CalculateDueDate(monday)).to.not.throw();
    }); 
    
    describe('Due date calculations', () => {
        const testDataCollection = [
            [new Date(Date.UTC(2018, 1, 5, 10, 30)), 4],
            [new Date(Date.UTC(2018, 1, 6, 9, 34)), 13],
            [new Date(Date.UTC(2018, 1, 7, 16, 29)), 11],
            [new Date(Date.UTC(2018, 1, 8, 11, 17)), 30],
            [new Date(Date.UTC(2018, 1, 9, 12, 5)), 42]
        ];

        expectedResultCollection = [
            new Date(Date.UTC(2018, 1, 5, 14, 30)),
            new Date(Date.UTC(2018, 1, 7, 14, 34)),
            new Date(Date.UTC(2018, 1, 9, 11, 29)),
            new Date(Date.UTC(2018, 1, 14, 9, 17)),
            new Date(Date.UTC(2018, 1, 16, 14, 5))
        ];
        
        for(let index = 0; index < testDataCollection.length; index++){
            it('shold calculate with submitDate:' + testDataCollection[index][0] + ' turnAround:' + testDataCollection[index][1], () => {
                expect(CalculateDueDate.apply({}, testDataCollection[index]).getTime()).to.be.equal(expectedResultCollection[index].getTime());
            });
        }
    });
});

