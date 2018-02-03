const {CalculateDueDate} = require('./due-date-calculator');

const exampleData = [
    [new Date(Date.UTC(2018, 1, 2, 15, 25)), 12],
    [new Date(Date.UTC(2018, 1, 2, 11, 25)), 30],
    [new Date(Date.UTC(2018, 1, 1, 11, 25)), 5]
];

for(let index = 0; index < exampleData.length; index++){
    console.log(exampleData[index]);
    console.log("result ", CalculateDueDate.apply(this, exampleData[index]));
}