import React from "react";
import "./Customers.css";

function Customers() {

  const customers = [
    {
      name: "Sowjanya",
      email: "sowjanya@gmail.com",
      phone: "9876543210",
      company: "Infosys",
      status: "Active"
    },

    {
      name: "Rahul",
      email: "rahul@gmail.com",
      phone: "9876541230",
      company: "TCS",
      status: "Pending"
    },

    {
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9998887776",
      company: "Wipro",
      status: "Active"
    },

    {
      name: "Kiran",
      email: "kiran@gmail.com",
      phone: "8887776665",
      company: "Accenture",
      status: "Inactive"
    }
  ];

  return (

    <div className="customer-page">

      <div className="customer-header">

        <div>
          <h1>Customer Management 👥</h1>
          <p>Manage all your customers efficiently</p>
        </div>

        <button className="add-btn">
          + Add Customer
        </button>

      </div>

      <div className="customer-grid">

        {customers.map((customer, index) => (

          <div className="customer-card" key={index}>

            <div className="customer-top">

              <div className="avatar">
                {customer.name.charAt(0)}
              </div>

              <div>

                <h2>{customer.name}</h2>

                <span className={customer.status}>
                  {customer.status}
                </span>

              </div>

            </div>

            <div className="customer-info">

              <p>📧 {customer.email}</p>

              <p>📞 {customer.phone}</p>

              <p>🏢 {customer.company}</p>

            </div>

            <div className="customer-buttons">

              <button className="view-btn">
                View
              </button>

              <button className="edit-btn">
                Edit
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Customers;
