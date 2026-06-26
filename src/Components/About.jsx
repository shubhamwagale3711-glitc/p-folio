import React from "react";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        backgroundColor: "#f8fafc",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#1e293b",
          marginBottom: "20px",
        }}
      >
        About Me
      </h1>

      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800"
        alt="About"
        style={{
          width: "300px",
          maxWidth: "100%",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      />

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#334155",
        }}
      >
        Hello! My name is <b>Shubhamkumar Suresh Wagale</b>.
        I am a Diploma Computer Engineering student who is
        passionate about Web Development, React JS, JavaScript,
        Artificial Intelligence, Networking and Software Testing.
      </p>

      <p
        style={{
          maxWidth: "800px",
          margin: "20px auto",
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#334155",
        }}
      >
        I enjoy creating modern, responsive and user-friendly
        websites. My goal is to become a skilled Full Stack Web
        Developer and build real-world projects.
      </p>
    </div>
  );
}

export default About;