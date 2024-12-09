import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function Alchoholsensor() {
  const [data, setData] = useState([]);

  const getData = async () => {
    // const response = await fetch("https://reactjswithiot.hstn.me/API/fetchalchoholapi.php", {
    //   method: "GET",
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Network response was not ok " + res.statusText);
    //     }
    //     return res.json();
    //   })
    //   .then((res) => {
    //     if (res.data) {
    //       setData(res.data);
    //     } else {
    //       console.error("No data available", res.message);
    //     }
    //   })
    //   .catch((error) => console.error("Error fetching data:", error));

    try {
      const response = await axios.get("https://reactjswithiot.hstn.me/API/fetchalchoholapi.php");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  useEffect(() => {
    getData();
  }, []);

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
                <h6 className="mb-0">Alchohol Sensors</h6>
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
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{item.sensor_id}</td>
                        <td>{item.temp_value}</td>
                        <td>{item.timestamp}</td>
                      </tr>
                    ))}
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
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </>
  );
}

export default Alchoholsensor;
