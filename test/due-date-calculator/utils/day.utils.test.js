const {expect} = require('chai');
const {dayUtils} = require('../../../due-date-calculator/utils');

describe('day.utils', () => {
    it('should expose getNextWorkDay',() => {
        expect(dayUtils.getNextWorkday).to.be.a('function');
    });
    
    it('should expose getNextDay', () => {
        expect(dayUtils.getNextDay).to.be.a('function');
    }); 
    
    it('should expose getTargetDay', () => {
        expect(dayUtils.getTargetDay).to.be.a('function');
    }); 
    
    const friday = new Date(Date.UTC(2018, 1, 2));
    const saturday = new Date(Date.UTC(2018, 1, 3));
    const sunday = new Date(Date.UTC(2018, 1, 4));
    const monday = new Date(Date.UTC(2018, 1, 5));
    const tuesday = new Date(Date.UTC(2018, 1, 6));
    const wednesday = new Date(Date.UTC(2018, 1, 7));
    
    describe('.getNextDay', () => {
        const {getNextDay} = dayUtils;

        it('should return next day regardless of weekend or not', () => {
            expect(getNextDay(friday).getTime()).to.be.equal(saturday.getTime());
            expect(getNextDay(saturday).getTime()).to.be.equal(sunday.getTime());
            expect(getNextDay(sunday).getTime()).to.be.equal(monday.getTime());
            expect(getNextDay(monday).getTime()).to.be.equal(tuesday.getTime());
            expect(getNextDay(tuesday).getTime()).to.be.equal(wednesday.getTime());
        });
    });
    
    describe('.getNextWorkday', () => {
        const {getNextWorkday} = dayUtils;
        
        it('should return next workday', () => {
            expect(getNextWorkday(friday).getTime()).to.be.equal(monday.getTime());
            expect(getNextWorkday(saturday).getTime()).to.be.equal(monday.getTime());
            expect(getNextWorkday(sunday).getTime()).to.be.equal(monday.getTime());
            expect(getNextWorkday(monday).getTime()).to.be.equal(tuesday.getTime());
            expect(getNextWorkday(tuesday).getTime()).to.be.equal(wednesday.getTime());
        });
    });
    
    describe('.getTargetDay', () => {
        const {getTargetDay} = dayUtils;
        const twoExtraWorkday = 2;
        const oneExtraWorkday = 1;
        const noExtraWorkday = 0;
        
        it('should return date after "number"Extra workday(s)', () => {
            expect(getTargetDay(friday, twoExtraWorkday).getTime()).to.be.equal(wednesday.getTime());
            expect(getTargetDay(monday, oneExtraWorkday).getTime()).to.be.equal(wednesday.getTime());
            expect(getTargetDay(tuesday, noExtraWorkday).getTime()).to.be.equal(wednesday.getTime());
        });
    });
});