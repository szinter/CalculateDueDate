const {expect} = require('chai');
const {dateUtils} = require('../../../due-date-calculator/utils');

describe('date.utils', () => {
    it('should expose isWorkTime',() => {
        expect(dateUtils.isWorkTime).to.be.a('function');
    });  
    it('should expose isWorkingDay', () => {
        expect(dateUtils.isWorkingDay).to.be.a('function');
    }); 
    it('should expose isWorkingHour', () => {
        expect(dateUtils.isWorkingHour).to.be.a('function');
    }); 
    
    describe('.isWorkingDay', () => {
        const {isWorkingDay} = dateUtils;
        const monday = new Date(Date.UTC(2018, 1, 5));
        const tuesday = new Date(Date.UTC(2018, 1, 6));
        const wednesday = new Date(Date.UTC(2018, 1, 7));
        const thursday = new Date(Date.UTC(2018, 1, 8));
        const friday = new Date(Date.UTC(2018, 1, 9));
        const saturday = new Date(Date.UTC(2018, 1, 10));
        const sunday = new Date(Date.UTC(2018, 1, 11));

        it('should return true on Monday .. Friday ', () => {
            expect(isWorkingDay(monday)).to.be.true;
            expect(isWorkingDay(tuesday)).to.be.true;
            expect(isWorkingDay(wednesday)).to.be.true;
            expect(isWorkingDay(thursday)).to.be.true;
            expect(isWorkingDay(friday)).to.be.true;
        });

        it('should return false on Saturday and Sunday ', () => {
            expect(isWorkingDay(saturday)).to.be.false;
            expect(isWorkingDay(sunday)).to.be.false;
        });
    });
  
    describe('.isWorkingHour', () => {
        const {isWorkingHour} = dateUtils;
        
        it('should return false before 9AM', () => {
             const before9AM = new Date(Date.UTC(2018, 1, 5, 1));
            expect(isWorkingHour(before9AM)).to.be.false;
        });
        
        it('should return true at 9AM', () => {
            const at9AM = new Date(Date.UTC(2018, 1, 5, 11));;
            expect(isWorkingHour(at9AM)).to.be.true;
        });
        
        it('should return true between [9AM, 17PM[', () => {
            const between9AM_17PM = new Date(Date.UTC(2018, 1, 5, 11));
            expect(isWorkingHour(between9AM_17PM)).to.be.true;
        });
        
        it('should return false at 17PM', () => {
            const at17PM = new Date(Date.UTC(2018, 1, 5, 17));
            expect(isWorkingHour(at17PM)).to.be.false;
        });
        
        it('should return false after 17PM', () => {
            const after17PM = new Date(Date.UTC(2018, 1, 5, 18));
            expect(isWorkingHour(after17PM)).to.be.false;
        });        
    });
    
    describe('.isWorkTime', () => {
        const {isWorkTime} = dateUtils;
        
        it('should return false on Monday .. Friday before 9AM', () => {
            const mondayBefore9AM = new Date(Date.UTC(2018, 1, 5, 8));
            expect(isWorkTime(mondayBefore9AM)).to.be.false;
        });
        
        it('should return true on Monday .. Friday between [9AM, 17PM[', () => {
            const tuesdayBetween9AM_17PM = new Date(Date.UTC(2018, 1, 6, 11));
            expect(isWorkTime(tuesdayBetween9AM_17PM)).to.be.true;
        });
        
        it('should return false on Monday .. Friday after 17PM', () => {
            const wednesdayAfter17PM = new Date(Date.UTC(2018, 1, 7, 18));
            expect(isWorkTime(wednesdayAfter17PM)).to.be.false;
        });
        
        it('should return false on Saturday and Sunday', () => {
            const saturdayBetween9AM_17PM = new Date(Date.UTC(2018, 1, 10, 11));
            const sundayBetween9AM_17PM = new Date(Date.UTC(2018, 1, 10, 11));
            expect(isWorkTime(saturdayBetween9AM_17PM)).to.be.false;
            expect(isWorkTime(sundayBetween9AM_17PM)).to.be.false;
        });
    });
});