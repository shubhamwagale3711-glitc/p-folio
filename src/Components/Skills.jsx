import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React JS", level: "80%" },
    { name: "Git & GitHub", level: "85%" },
    { name: "C Programming", level: "80%" },
    { name: "C++", level: "75%" },
    { name: "Computer Networks", level: "80%" },
    { name: "Software Testing", level: "75%" },
    { name: "Problem Solving", level: "85%" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        padding: "60px 20px",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "45px",
          marginBottom: "10px",
        }}
      >
        My Skills
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#cbd5e1",
          marginBottom: "50px",
          fontSize: "18px",
        }}
      >
        Technologies and programming languages that I work with.
      </p>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              marginBottom: "25px",
              background: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div
              style={{
                width: "100%",
                height: "10px",
                background: "#475569",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: skill.level,
                  height: "10px",
                  background: "#f97316",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;