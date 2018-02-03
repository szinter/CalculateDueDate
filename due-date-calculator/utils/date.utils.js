const SUNDAY = 0;
const SATURDAY = 6;
const EOB = 17;
const OOB = 9;

const isWorkingDay = (dateTime) => {
    const day = dateTime.getDay();
    
    return day !== SATURDAY && day !== SUNDAY;
};

const isWorkingHour = (dateTime) => {
    const hour = dateTime.getHours();
    
    return hour >= OOB && hour < EOB;
};

const isWorkTime = (dateTime) => {
    return isWorkingDay(dateTime) && isWorkingHour(dateTime);
};

module.exports = {
    isWorkTime: isWorkTime,
    isWorkingDay: isWorkingDay,
    isWorkingHour: isWorkingHour
};