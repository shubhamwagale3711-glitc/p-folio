import React from "react";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          maxWidth: "1100px",
        }}
      >
        {/* Profile Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          style={{
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: "6px solid #f97316",
            objectFit: "cover",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        />

        {/* Text */}
        <div style={{ maxWidth: "550px" }}>
          <h3
            style={{
              color: "#f97316",
              marginBottom: "10px",
            }}
          >
            Hello, I'm
          </h3>

          <h1
            style={{
              fontSize: "20px",
              margin: "0",
            }}
          >
            Shubhamkumar
            <br />

          </h1>

          <h2
            style={{
              color: "#cbd5e1",
              marginTop: "15px",
            }}
          >
            Computer Engineering Student
          </h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              color: "#d1d5db",
            }}
          >
            I am passionate about Web Development, React JS,
            JavaScript, Artificial Intelligence and modern
            technologies. I enjoy building responsive,
            user-friendly and professional websites.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "12px 28px",
                background: "#f97316",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              View Projects
            </button>

            <button
              style={{
                padding: "12px 28px",
                background: "transparent",
                color: "white",
                border: "2px solid #f97316",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;