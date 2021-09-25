import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import SelectedEmployees from '../SelectedEmployees/SelectedEmployees';

const Employees = () => {
    // initializing Emplyee state
   const [employees, setEmployees] = useState([]);

   //Selected Employee list
   const [selectedEmployees, setSelectedEmployees] = useState([]);

   //Fetching employee data
   useEffect(()=>{
       fetch('/data.JSON')
       .then(res => res.json())
       .then(data => setEmployees(data))
   }, []);

   //Selecting employees 
   const handleAddToList = employee => {
    //checking duplicate
    const check = selectedEmployees.find(e => e.key === employee.key);
    if(!check){
        // Adding new employee to the list
        const newEmployeeAddedList = [...selectedEmployees, employee];
        setSelectedEmployees(newEmployeeAddedList);
    }
   }
    return (
        <div className="row mt-5">
            <div className="col-md-9">
                <div className="row">
                    {
                        // Displaying Employees
                        employees.map(employee => <Employee key={employee.key} handleAddToList={handleAddToList} employee={employee}></Employee>)
                    }
                </div>
            </div>
            <div className="col-md-3">
                <SelectedEmployees selectedEmployees={selectedEmployees}></SelectedEmployees>
            </div>
        </div>
    );
};

export default Employees;