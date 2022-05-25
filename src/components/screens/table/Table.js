import React from "react";
import "./Table.css";
import Image from "../../../assets/tableImg.png";

const Table = () => {
  const data = [
    {
      customerName: "Jhon Clavio",
      gender: "Male",
      profile: Image,
      phone: "+1-410-555-0112",
      country: "Bahrain",
      status: "Continues",
      statusColor: "#FFCF0F",
      date: "02.05.2022",
      action: "Actions",
    },
    {
      customerName: "Alex Smith",
      gender: "Male",
      profile: Image,
      phone: "+1-202-555-0199",
      country: "Canada",
      status: "Completed",
      statusColor: "#44C13C",
      date: "04.05.2022",
      action: "Actions",
    },
    {
      customerName: "Jhon Clavio",
      gender: "male",
      profile: Image,
      phone: "+1-410-555-0112",
      country: "Bahrain",
      status: "Completed",
      statusColor: "#FFCF0F",
      date: "02.05.2022",
      action: "Actions",
    },
    {
      customerName: "Jhon Clavio",
      gender: "male",
      profile: Image,
      phone: "+1-410-555-0112",
      country: "Bahrain",
      status: "Completed",
      statusColor: "#44C13C",
      date: "02.05.2022",
      action: "Actions",
    },
    {
      customerName: "Jhon Clavio",
      gender: "male",
      profile: Image,
      phone: "+1-410-555-0112",
      country: "Bahrain",
      status: "Completed",
      statusColor: "#FFCF0F",
      date: "02.05.2022",
      action: "Actions",
    },
    {
      customerName: "Jhon Clavio",
      gender: "male",
      profile: Image,
      phone: "+1-410-555-0112",
      country: "Bahrain",
      status: "Completed",
      statusColor: "#44C13C",
      date: "02.05.2022",
      action: "Actions",
    },
    {
      customerName: "Jhon Clavio",
      gender: "male",
      profile: Image,
      phone: "+1-410-555-0112",
      country: "Bahrain",
      status: "Completed",
      statusColor: "#FFCF0F",
      date: "02.05.2022",
      action: "Actions",
    },
    {
      customerName: "Jhon Clavio",
      gender: "male",
      profile: Image,
      phone: "+1-410-555-0112",
      country: "Bahrain",
      status: "Completed",
      statusColor: "#44C13C",
      date: "02.05.2022",
      action: "Actions",
    },
    {
      customerName: "Jhon Clavio",
      gender: "male",
      profile: Image,
      phone: "+1-410-555-0112",
      country: "Bahrain",
      status: "Completed",
      statusColor: "#FFCF0F",
      date: "02.05.2022",
      action: "Actions",
    },
    {
      customerName: "Jhon Clavio",
      gender: "male",
      profile: Image,
      phone: "+1-410-555-0112",
      country: "Bahrain",
      status: "Completed",
      statusColor: "#44C13C",
      date: "02.05.2022",
      action: "Actions",
    },
  ];

  return (
    <div className="tableContainer">
      <div className="card">
        <div className="table-responsive">
          <table className="table">
            <thead className="tableHead">
              <tr>
                <th style={{ width: "100px" }}>
                  <input type="checkbox" />
                </th>
                <th>Customer Name</th>
                <th>Phone Number</th>
                <th>Country</th>
                <th>Status</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <div className="profileContainer">
                        <img src={item.profile} />
                        <div className="profileNameContainer">
                          <span className="profileName">
                            {item.customerName}
                          </span>
                          <span className="profileGender">{item.gender}</span>
                        </div>
                      </div>
                    </td>
                    <td>{item.phone}</td>
                    <td>{item.country}</td>
                    <td>
                      <button
                        style={{ backgroundColor: item.statusColor }}
                        className="statusButton"
                      >
                        {item.status}
                      </button>
                    </td>
                    <td>{item.date}</td>
                    <td>{item.action}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
