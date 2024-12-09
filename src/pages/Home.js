import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
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
          {/* Sale & Revenue Start */}
          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  `
                  <i className="fa fa-chart-line fa-3x text-primary" />
                  <div className="ms-3">
                    <p className="mb-2">Complaints</p>
                    <h6 className="mb-0">252</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa fa-chart-bar fa-3x text-primary" />
                  <div className="ms-3">
                    <p className="mb-2">Alerts</p>
                    <h6 className="mb-0">256</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa fa-chart-area fa-3x text-primary" />
                  <div className="ms-3">
                    <p className="mb-2">Devices</p>
                    <h6 className="mb-0">785</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa fa-chart-pie fa-3x text-primary" />
                  <div className="ms-3">
                    <p className="mb-2">Users</p>
                    <h6 className="mb-0">965</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sale & Revenue End */}
          {/* Recent Sales Start */}
          <div className="container-fluid pt-4 px-4">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Devices</h6>
              </div>
              <div className="table-responsive">
                <table className="table text-start align-middle table-bordered table-hover mb-0">
                  <thead>
                    <tr className="text-dark">
                      <th scope="col">No.</th>
                      <th scope="col">Device Name</th>
                      <th scope="col">Status</th>
                      <th scope="col">Time Stamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>PIR</td>
                      <td>123</td>
                      <td>2024-12-05 09:18:12 </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>IR</td>
                      <td>125</td>
                      <td>2024-12-05 08:48:10 </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Ultra-Sonic</td>
                      <td>564</td>
                      <td>2024-12-04 14:58:39 </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>IR</td>
                      <td>756</td>
                      <td>2024-12-03 13:48:44 </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Ultra-Sonic</td>
                      <td>256</td>
                      <td>2024-12-03 12:38:23 </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Ultra-Sonic</td>
                      <td>484</td>
                      <td>2024-12-02 19:42:21 </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>IR</td>
                      <td>254</td>
                      <td>2024-12-02 08:28:34 </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>PIR</td>
                      <td>785</td>
                      <td>2024-12-02 11:12:25 </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>PIR</td>
                      <td>145</td>
                      <td>2024-12-01 14:58:43 </td>
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
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </>
  );
}

export default Home;
