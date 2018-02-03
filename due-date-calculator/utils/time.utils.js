const EOB = 17;
const OOB = 9;
const WORKDAY_HOURS = EOB - OOB;
const ONE_HOUR = 3600000;
const ONE_WORKDAY = WORKDAY_HOURS * ONE_HOUR;

const getEOBDate = (dateTime) => {
    let cloneDate = new Date(dateTime.getTime());
    
    cloneDate.setUTCHours(EOB, 0, 0);

    return cloneDate;
};

const getOOBDate = (dateTime) => {
    let cloneDate = new Date(dateTime.getTime());
    
    cloneDate.setUTCHours(OOB, 0, 0);
    
    return cloneDate;
};

const getHoursInMs = (hours) => {
    return ONE_HOUR * hours;
};

const getRemainingWorkDayInMs = (dateTime) => {
    const dateTimeEOB = getEOBDate(dateTime);

    return dateTimeEOB.getTime() - dateTime.getTime();
};

const getTurnAroundOverFlowInMs = (dateTime, turnAround) => {
    const turnAroundInMs = getHoursInMs(turnAround);
    let turnAroundOverFlowInMs =  turnAroundInMs - getRemainingWorkDayInMs(dateTime);
    
    if (turnAroundOverFlowInMs < 0) {
        turnAroundOverFlowInMs = turnAroundInMs;
    }
    
    return turnAroundOverFlowInMs;
};

const isDueToday = (dateTime, turnAround) => {
    return getRemainingWorkDayInMs(dateTime) - getHoursInMs(turnAround) >= 0;
};

const getWholeWorkDayCount = (timeInMs) => {
    return Math.floor(timeInMs / ONE_WORKDAY);
};

const getWholeWorkDayOverFlow = (timeInMs) => {
    return timeInMs % ONE_WORKDAY;
};

const getDueDateTime = (targetDateTime, timeInMs) => {
    const targetDateTimeInMs = targetDateTime.getTime();
    const targetDateTimeOOB = getOOBDate(targetDateTime);
    const targetDateTimeOOBInMs = targetDateTimeOOB.getTime();
    
    return new Date(targetDateTimeOOBInMs + timeInMs);
};

const getSameDayDueDateTime = (targetDateTime, timeInMs) => {
    const targetDateTimeInMs = targetDateTime.getTime();
    
    return new Date(targetDateTimeInMs + timeInMs);
};

module.exports = {
    getEOBDate: getEOBDate,
    getOOBDate: getOOBDate,
    getHoursInMs: getHoursInMs,
    getRemainingWorkDayInMs: getRemainingWorkDayInMs,
    getTurnAroundOverFlowInMs: getTurnAroundOverFlowInMs,
    getWholeWorkDayCount: getWholeWorkDayCount,
    getWholeWorkDayOverFlow: getWholeWorkDayOverFlow,
    getDueDateTime: getDueDateTime,
    isDueToday: isDueToday,
    getSameDayDueDateTime: getSameDayDueDateTime
};
