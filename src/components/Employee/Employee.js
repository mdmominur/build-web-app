import React from 'react';

const Employee = (props) => {
    // Destructuring employee object
    const {name, role, age, salary, img, country } = props.employee;
    return (
        <div className="col-md-4">
            <div className="card shadow rounded mb-4" >
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title fw-bolder">{name}</h5>
                    <table className="mt-4 fw-bold">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Role</td>
                                <td className="px-2">:</td>
                                <td className="text-success">{role}</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td className="px-2">:</td>
                                <td className="text-success">{age}</td>
                            </tr>
                            <tr>
                                <td>Salary</td>
                                <td className="px-2">:</td>
                                <td className="text-success">${salary}</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td className="px-2">:</td>
                                <td className="text-success">{country}</td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                    <button className="btn btn-success mt-4" onClick={()=> props.handleAddToList(props.employee)}><i className="fas fa-user-plus"></i> Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Employee;