import React from "react";

function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: "#f4f4f4",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#1e293b",
          marginBottom: "30px",
        }}
      >
        Contact Me
      </h1>

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
        alt="Contact"
        style={{
          width: "320px",
          maxWidth: "100%",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      />

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          textAlign: "left",
        }}
      >
        <h3>Name</h3>
        <p>Shubhamkumar Suresh Wagale</p>

        <h3>Email</h3>
        <p>shubhamkumarsw@email.com</p>

        <h3>Phone</h3>
        <p>+91 8788371354</p>

        <h3>Location</h3>
        <p>Maharashtra, India</p>

        <h3>GitHub</h3>
        <p>https://github.com/your-username</p>

        <h3>LinkedIn</h3>
        <p>https://linkedin.com/in/your-profile</p>
      </div>
    </div>
  );
}

export default Contact;