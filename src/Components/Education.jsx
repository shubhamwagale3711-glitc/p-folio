import React from "react";

function Education() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: "#e0f7fa",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#1e293b",
          marginBottom: "30px",
        }}
      >
        Education
      </h1>

      <img
        src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
        alt="Education"
        style={{
          width: "320px",
          maxWidth: "100%",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      />

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "left",
          background: "#ffffff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h3>SSC (2020–2021)</h3>
        <p>80% - Anudanit Prathmik va Madhyamik Ashram School</p>

        <hr />

        <h3>HSC (2022–2023)</h3>
        <p>55% - Ashram School Talvada</p>

        <hr />

        <h3>Diploma in Computer Engineering</h3>

        <ul>
          <li>Semester 1 - 66%</li>
          <li>Semester 2 - 72%</li>
          <li>Semester 3 - 83%</li>
          <li>Semester 4 - 78%</li>
        </ul>

        <p>
          Currently pursuing Diploma in Computer Engineering with
          focus on Web Development, React JS, Networking,
          Programming and Software Testing.
        </p>
      </div>
    </div>
  );
}

export default Education;