import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      {/* Sidebar Start */}
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
          <Link to="/" className="navbar-brand mx-4 mb-3">
            <h4 className="text-primary">
              ADMIN <br /> DASHBOARD
            </h4>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <i className="fa fa-user" />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Madhavi Chotaliya</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link to="/" className="nav-item nav-link active">
              <i className="fa fa-tachometer-alt me-2" />
              Dashboard
            </Link>
            <Link to="/firesensor" className="nav-item nav-link">
              <i className="fa fa-th me-2" />
              Fire Sensors
            </Link>
            <Link to="/alcoholsensor" className="nav-item nav-link">
              <i className="fa fa-keyboard me-2" />
              Alchohol Sensors
            </Link>
            <Link to="/smokesensor" className="nav-item nav-link">
              <i className="fa fa-table me-2" />
              Smoke Sensors
            </Link>
          </div>
        </nav>
      </div>
      {/* Sidebar End */}
    </>
  );
}

export default Sidebar;
