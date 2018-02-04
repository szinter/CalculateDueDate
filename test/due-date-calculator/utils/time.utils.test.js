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
});