import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function FFlameesensor() {
  const [data, setData] = useState([]);

  return (
    <>
      <div>
        {/* Sidebar Start */}
        <Sidebar />
        {/* Sidebar End */}
        {/* Content Start */}
        <div className="content">
          {/* Navbar Start */}
          <Header />
          {/* Navbar End */}
          {/* Recent Sales Start */}
          <div className="container-fluid pt-4 px-4">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Flame Sensors</h6>
                <Link to="/">Show All</Link>
              </div>
              <div className="table-responsive">
                <table className="table text-start align-middle table-bordered table-hover mb-0">
                  <thead>
                    <tr className="text-dark">
                      <th scope="col">No.</th>
                      <th scope="col">Value</th>
                      <th scope="col">Time Stamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>0</td>
                      <td>2024-12-01 14:58:25 </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>1</td>
                      <td>2024-12-01 14:58:25 </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>0</td>
                      <td>2024-12-05 11:56:10 </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>1</td>
                      <td>2024-12-04 05:18:22 </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>0</td>
                      <td>2024-12-03 10:51:21 </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>0</td>
                      <td>2024-12-03 09:28:56 </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>1</td>
                      <td>2024-12-02 11:58:45 </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>0</td>
                      <td>2024-12-02 04:18:15 </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>0</td>
                      <td>2024-12-01 02:28:45 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Recent Sales End */}
          {/* Footer Start */}
          <Footer />
          {/* Footer End */}
        </div>
        {/* Content End */}
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </>
  );
}

export default FFlameesensor;
