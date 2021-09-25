import React, { useEffect, useState } from 'react';

const Employees = () => {
   const [employees, setEmployees] = useState([]);
   useEffect(()=>{
       fetch('/data.JSON')
       .then(res => res.json())
       .then(data => console.log(data))
   }, []);
    return (
        <div className="row mt-5">
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-4">
                    <div class="card" >
                        <img src="" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/home" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3"></div>
        </div>
    );
};

export default Employees;