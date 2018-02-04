const dateUtils = require('./date.utils');
const ONE_DAY = 86400000;

const getNextDay = (baseDay) => {
    const todayInMilliSecunds = baseDay.getTime();
    const nextDayInMillisecunds = todayInMilliSecunds + ONE_DAY;
    
    return new Date(nextDayInMillisecunds);
};

const getNextWorkDay = (baseDay) => {
    const tomorrow = getNextDay(baseDay);
    
    if (dateUtils.isWorkingDay(tomorrow)) {
        return tomorrow;
    } else {
        return getNextWorkDay(tomorrow);
    }
};

const getTargetDay = (dateTime, extraWorkDays) => {
    let targetDay = dateTime;
    
    for (let count = 0; count <= extraWorkDays; count++) {
        targetDay = getNextWorkDay(targetDay);
    }
    return targetDay;
};

module.exports = {
    getNextWorkday: getNextWorkDay,
    getNextDay: getNextDay,
    getTargetDay: getTargetDay
};