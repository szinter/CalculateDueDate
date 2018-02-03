const dateUtils = require('./date.utils');
const ONE_DAY = 86400000;

const nextDay = (baseDay) => {
    const todayInMilliSecunds = baseDay.getTime();
    const nextDayInMillisecunds = todayInMilliSecunds + ONE_DAY;
    
    return new Date(nextDayInMillisecunds);
};

const nextWorkDay = (baseDay) => {
    const tomorrow = nextDay(baseDay);
    
    if (dateUtils.isWorkingDay(tomorrow)) {
        return tomorrow;
    } else {
        return nextWorkDay(tomorrow);
    }
};

const getTargetDay = (dateTime, extraWorkDays) => {
    let targetDay = dateTime;
    
    for (let count = 0; count <= extraWorkDays; count++) {
        targetDay = nextWorkDay(targetDay);
    }
    return targetDay;
};

module.exports = {
    nextWorkDay: nextWorkDay,
    nextDay: nextDay,
    getTargetDay: getTargetDay
};