const {expect} = require('chai');
const {timeUtils} = require('../../../due-date-calculator/utils');

describe('time.utils', () => {
    it('should expose getEOBDate',() => {
        expect(timeUtils.getEOBDate).to.be.a('function');
    });
    
    it('should expose getOOBDate', () => {
        expect(timeUtils.getOOBDate).to.be.a('function');
    }); 
    
    it('should expose getHoursInMs', () => {
        expect(timeUtils.getHoursInMs).to.be.a('function');
    }); 
    
    it('should expose getRemainingWorkDayInMs',() => {
        expect(timeUtils.getRemainingWorkDayInMs).to.be.a('function');
    });
    
    it('should expose getTurnAroundOverFlowInMs', () => {
        expect(timeUtils.getTurnAroundOverFlowInMs).to.be.a('function');
    }); 
    
    it('should expose getWholeWorkDayCount', () => {
        expect(timeUtils.getWholeWorkDayCount).to.be.a('function');
    }); 
    
    it('should expose getWholeWorkDayOverFlow',() => {
        expect(timeUtils.getWholeWorkDayOverFlow).to.be.a('function');
    });
    
    it('should expose getDueDateTime', () => {
        expect(timeUtils.getDueDateTime).to.be.a('function');
    }); 
    
    it('should expose isDueToday', () => {
        expect(timeUtils.isDueToday).to.be.a('function');
    }); 
    
    it('should expose getSameDayDueDateTime', () => {
        expect(timeUtils.getSameDayDueDateTime).to.be.a('function');
    }); 
    
    describe('.getEOBDate', () => {
        const {getEOBDate} = timeUtils;
        const monday = new Date(Date.UTC(2018, 1, 5, 14));
        const mondayEOB = new Date(Date.UTC(2018, 1, 5, 17));

        it('should return Date object with EOB set as time', () => {
            expect(getEOBDate(monday).getTime()).to.be.equal(mondayEOB.getTime());
        });
    });
    
    describe('.getOOBDate', () => {
        const {getOOBDate} = timeUtils;
        const monday = new Date(Date.UTC(2018, 1, 5, 14));
        const mondayOOB = new Date(Date.UTC(2018, 1, 5, 9));

        it('should return Date object with EOB set as time', () => {
            expect(getOOBDate(monday).getTime()).to.be.equal(mondayOOB.getTime());
        });
    });
    
    describe('.getHoursInMs', () => {
        const {getHoursInMs} = timeUtils;
        const ONE_HOUR = 3600000;
        const NUMBER_OF_DAYS = 11;
        const elevenHoursInMs = ONE_HOUR * NUMBER_OF_DAYS;
        
        it('should return hours in millisecunds', () => {
            expect(getHoursInMs(NUMBER_OF_DAYS)).to.be.equal(elevenHoursInMs);
        });
    });
    
    describe('.getRemainingWorkDayInMs', () => {
        const {getRemainingWorkDayInMs} = timeUtils;
        const ONE_HOUR = 3600000;
        const monday = new Date(Date.UTC(2018, 1, 5, 14, 30));
        const remainingWorkDayInMs = 2.5 * ONE_HOUR;
        
        it('should return the remaining workday in millisecunds', () => {
            expect(getRemainingWorkDayInMs(monday)).to.be.equal(remainingWorkDayInMs);
        });
    });
    
    describe('.getTurnAroundOverFlowInMs', () => {
        const {getTurnAroundOverFlowInMs} = timeUtils;
        const ONE_HOUR = 3600000;
        const remainingWorkDayInH = 2.5;
        const remainingWorkDayInMs = remainingWorkDayInH * ONE_HOUR;
        const turnAround = 14;
        const monday = new Date(Date.UTC(2018, 1, 5, 14, 30));
        const owerFlowInMs = (turnAround * ONE_HOUR) - remainingWorkDayInMs;
        
        it('should return turn around over flow In Millisecunds', () => {
            expect(getTurnAroundOverFlowInMs(monday, turnAround)).to.be.equal(owerFlowInMs);
        });
    });
    
    describe('.getWholeWorkDayCount', () => {
        const {getWholeWorkDayCount} = timeUtils;
        const ONE_HOUR = 3600000;
        const ONE_WORK_DAY = ONE_HOUR * 8;
        const NUMBER_OF_DAYS = 11;
        const someRandomOwerFlow = 2623157;
        const testDateInMs = NUMBER_OF_DAYS * ONE_WORK_DAY + someRandomOwerFlow;
        
        it('should return the number of full workdays', () => {
            expect(getWholeWorkDayCount(testDateInMs)).to.be.equal(NUMBER_OF_DAYS);
        });
    });
    
    describe('.getWholeWorkDayOverFlow', () => {
        const {getWholeWorkDayOverFlow} = timeUtils;
        const ONE_HOUR = 3600000;
        const ONE_WORK_DAY = ONE_HOUR * 8;
        const NUMBER_OF_DAYS = 11;
        const someRandomOwerFlow = 1263157;
        const testDateInMs = NUMBER_OF_DAYS * ONE_WORK_DAY + someRandomOwerFlow;
        
        it('should return the remaining time in Ms after full workdays', () => {
            expect(getWholeWorkDayOverFlow(testDateInMs)).to.be.equal(someRandomOwerFlow);
        });
    });
    
    describe('.getDueDateTime', () => {
        const {getDueDateTime} = timeUtils;
        const monday = new Date(Date.UTC(2018, 1, 5, 14, 30));
        const ONE_HOUR = 3600000;
        const DUE_DATE_HOURS = 5; 
        const someRandomOwerFlow = 1263157;
        const testTimeInMs = DUE_DATE_HOURS * ONE_HOUR + someRandomOwerFlow;
        const expectedDateTime = new Date((new Date(Date.UTC(2018, 1, 5, 9))).getTime() + testTimeInMs);
        
        it('should return dueDate set to OOB + timeInMs ', () => {
            expect(getDueDateTime(monday, testTimeInMs).getTime()).to.be.equal(expectedDateTime.getTime());
        });
    });
    
    describe('.isDueToday', () => {
        const {isDueToday} = timeUtils;
        const ONE_HOUR = 3600000;
        const monday = new Date(Date.UTC(2018, 1, 5, 14, 30));
        const remainingWorkDayInMs = 2.5 * ONE_HOUR;
        
        it('should return true if the due date is the same day as the submit day', () => {
            const turnAround = 2;
            expect(isDueToday(monday, turnAround)).to.be.true;
        });
        
        it('should return false if the due date is NOT the same day as the submit day', () => {
            const turnAround = 5;
            expect(isDueToday(monday, turnAround)).to.be.false;
        });
    });
    
    describe('.getSameDayDueDateTime', () => {
        const {getSameDayDueDateTime} = timeUtils;
        const monday = new Date(Date.UTC(2018, 1, 5, 10, 30));
        const ONE_HOUR = 3600000;
        const DUE_DATE_HOURS = 5; 
        const someRandomOwerFlow = 1263157;
        const testTimeInMs = DUE_DATE_HOURS * ONE_HOUR + someRandomOwerFlow;
        const expectedDateTime = new Date(monday.getTime() + testTimeInMs);
        
         it('should return dueDate set to submitDate + timeInMs ', () => {
            expect(getSameDayDueDateTime(monday, testTimeInMs).getTime()).to.be.equal(expectedDateTime.getTime());
        });
    });
});