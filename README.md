# CalculateDueDate
HW for Emarsys

## Guide
Start usage with the following commands:
`npm install`
`npm install mocha -g`

Mocha needs to be installed globbaly in order to run tests with npm script.

### run tests
`npm test`
### run from main.js
`npm start`


### trouble shooting
There where instances when `npm install` did fail to execute.
if this is the case then the following commands solved the problem:
1. `rm -rf node_modules`
2. `npm chache verify`
3. `npm install`

## Notes
* Sources are also available on my google drive as requested: [Link to the Shared folder](https://drive.google.com/drive/folders/1FnPvfUNzJaFZmecoysaIsnAK5ttuo4aO?usp=sharing) 
* For testing I am using Mocha and Chai because the configuring overhead is basicly non existent.
* CalculateDueDate naming of the methode is not following the usual camel case clean code pattern
 as only constructors should have their names in upper camel case(Pascal Case) and all variables should use lower camel case.
It is used here following the naming requirements of the _provided specification_

## Home Work Description
[Link to the specification](https://github.com/szinter/CalculateDueDate/blob/master/Due_Date_Calculator_JS.pdf)
