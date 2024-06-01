//Dependencies
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employees = [
  
];

//data
let continueAdding=true

//function
// Collect employee data
const collectEmployees = function() {

  //userinteraction
      // TODO: Get user input to create and return an array of employee objects
while (continueAdding){
  const firstName= prompt('Enter first name');
  const lastName= prompt('Enter last name');
  const salary = prompt("Please enter your salary");
  // const salary
  if (!firstName || !lastName || !salary){ //add salary
    alert("Please enter all values");
    return;
     
  }

  const emp = {
    firstName: firstName,
    lastName: lastName,
    salary: parseFloat(salary)
  }

  employees.push(emp);
  continueAdding = confirm("Do you want to add more employee?");
  }
  return employees;
}



// Display the average salary
let sum=0;
let average=0;
const displayAverageSalary = function(employeesArray) {
   
   const totalEmp = employeesArray.length;

   for(let i=0; i<employeesArray.length; i++){
    sum = sum + employeesArray[i].salary;
   }

   average = sum / totalEmp;
   console.log("Average salary is: "+average);
  
  }
  // TODO: Calculate and display the average salary


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  
  const randomEmp = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`Random picked employee is ${randomEmp.firstName} ${randomEmp.lastName}`)
  //math.floor math.random length 
