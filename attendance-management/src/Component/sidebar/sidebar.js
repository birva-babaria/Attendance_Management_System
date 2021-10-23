import React from "react";
import "./sidebar.css";

const Sidebar = () => {
    
    return (
        //SIDE-BAR
        
            <div className="sidebar">
                <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
                    style={{ width: '280px', height: '100%', position: 'fixed' }}>
                    <p className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <strong><span className="fs-5">Attendance-Management</span></strong>
                    </p>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item box">
                            <a href="/allHistory" className="nav-link text-white" aria-current="page">
                                Attendance History
                            </a>
                        </li>
                        <li className="nav-item box">
                            <a href="/all" className="nav-link text-white">
                                Modify Information
                            </a>
                        </li>
                        <li className="nav-item box">
                            <a href="/add" className="nav-link text-white">
                                Add Employee Record
                            </a>
                        </li>
                        <li className="nav-item box">
                            <a href="/about" className="nav-link text-white">
                                About
                            </a>
                        </li>
                        <li className="nav-item box">
                            <a href="/contactUs" className="nav-link text-white">
                                Contact us
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div classNameName="dropdown">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://www.jewishinteractive.org/wp-content/uploads/2016/03/person-768x768.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>ADMIN</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="/profile">Profile</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="/login" >Log out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Sidebar