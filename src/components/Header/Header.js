import React from 'react';

const Header = () => {
    return (
        <div className="shadow p-4 mt-3 rounded text-center">
            <h2 className="text-success fw-bolder">Build Web Application</h2>
            <p>A web application (or web app) is application software that runs on a web server.</p>
            <h2>Total Budget: <span className="fw-bolder text-success">10 Million</span></h2>
        </div>
    );
};

export default Header;