import React from 'react'

const Navbar = () => {
    return (
        <React.Fragment>
            <div className="navbar navbar-dark bg-dark mb-4">
                <span className="navbar-brand">
                    Hazael López
                </span>
                <button className="btn btn-outline-danger">
                    <i className="fa fa-sign-out-alt"></i>
                    <span> Salir</span>
                </button>
            </div>
        </React.Fragment>
    )
}

export default Navbar
