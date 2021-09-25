import React from 'react';

const SelectedEmployee = (props) => {
    // Destructuring Employee object
    const {img, name, salary} = props.employee;
    return (
        <div className="d-flex align-items-center shadow-sm mt-3 px-2">
            <div className="w-25">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="w-75 ms-3">
                <h6>{name}</h6>
                <p>Salary: ${salary}</p>
            </div>

        </div>
    );
};

export default SelectedEmployee;