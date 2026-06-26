import React from "react";

function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Contact",
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1e293b",
        color: "#fff",
        padding: "15px 40px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "#f97316",
        }}
      >
        Shubham Portfolio
      </h2>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "15px",
          margin: 0,
          padding: 0,
        }}
      >
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              cursor: "pointer",
              padding: "10px 15px",
              borderRadius: "6px",
              backgroundColor:
                activeTab === tab ? "#f97316" : "transparent",
              color: "#fff",
              transition: "0.3s",
            }}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;