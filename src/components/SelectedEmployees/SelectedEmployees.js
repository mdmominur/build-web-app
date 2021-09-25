import React from 'react';
import SelectedEmployee from '../SelectedEmployee/SelectedEmployee';

const SelectedEmployees = (props) => {
    const {selectedEmployees} = props;
    const total = selectedEmployees.reduce((previous, employee) => previous+employee.salary, 0);
    return (
        <div className="shadow rounded p-4 sticky-top">
            <h5 className="fw-bold"><i className="fas fa-user"></i> Employees Added : <span className="text-success">{selectedEmployees.length}</span></h5>
            {
                selectedEmployees.map(employee => <SelectedEmployee key={employee.key} employee={employee}></SelectedEmployee>)
             
            }
            
            <h5 className="fw-bold mt-3">Total Cost : <span className="text-success">${total}</span></h5>

        </div>
    );
};

export default SelectedEmployees;