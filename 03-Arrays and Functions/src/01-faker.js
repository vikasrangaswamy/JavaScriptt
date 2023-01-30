//Imported a module
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

//Creating an object
function Employee(){
    this.firstName=faker.name.fullName();
    this.lastName=faker.name.fullName();
    return this;
}
//Creating an empty array
let Employees=[];

// Function to create an array of objects
function createEmployees(num){
    for (let i=0;i<num;i++){
        Employees.push( new Employee());
    }
    return Employees;
}

//function call
createEmployees(10);

console.log(Employees);