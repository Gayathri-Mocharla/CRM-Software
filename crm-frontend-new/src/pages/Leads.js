import React from "react";
import "./Leads.css";

function Leads() {

  const leads = [

    {
      company: "Infosys",
      person: "Rahul",
      status: "Hot Lead",
      revenue: "$5K"
    },

    {
      company: "TCS",
      person: "Priya",
      status: "Cold Lead",
      revenue: "$2K"
    },

    {
      company: "Wipro",
      person: "Kiran",
      status: "Converted",
      revenue: "$8K"
    }

  ];

  return (

    <div className="leads-page">

      <div className="lead-header">

        <div>

          <h1>Lead Management 📈</h1>

          <p>
            Track all your leads and opportunities
          </p>

        </div>

        <button className="lead-btn">
          + Add Lead
        </button>

      </div>

      <div className="lead-grid">

        {leads.map((lead, index) => (

          <div className="lead-card" key={index}>

            <div className="lead-top">

              <div className="lead-avatar">
                {lead.person.charAt(0)}
              </div>

              <div>

                <h2>{lead.company}</h2>

                <p>{lead.person}</p>

              </div>

            </div>

            <div className="lead-details">

              <span>{lead.status}</span>

              <h3>{lead.revenue}</h3>

            </div>

            <button>
              Contact Lead
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Leads;
