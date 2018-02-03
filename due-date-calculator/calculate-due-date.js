const utils = require('./utils');

module.exports = function CalculateDueDate(submitDate, turnAround) {
    const turnAroundOverFlowInMs = utils.timeUtils.getTurnAroundOverFlowInMs(submitDate, turnAround);
    const extraWholeWorkDays = utils.timeUtils.getWholeWorkDayCount(turnAroundOverFlowInMs);
    const extraTimeInMs = utils.timeUtils.getWholeWorkDayOverFlow(turnAroundOverFlowInMs);
    const targetDate = utils.dayUtils.getTargetDay(submitDate, extraWholeWorkDays);
    
    let dueDate = utils.timeUtils.getDueDateTime(targetDate, extraTimeInMs);
    
    if (utils.timeUtils.isDueToday(submitDate, turnAround)) {
        let turnAroundInMs = utils.timeUtils.getHoursInMs(turnAround);
        
        dueDate = utils.timeUtils.getSameDayDueDateTime(submitDate, turnAroundInMs);
    }
    
    return dueDate;
};