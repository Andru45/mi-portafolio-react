import React from "react";

const Habilidades = () => {
  return (
    <section
      data-aos="zoom-in" // Animación de zoom
      data-aos-duration="1000"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h2>Habilidades</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ textAlign: "center" }}>
          <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="JavaScript" style={{ width: "100px" }} />
          <p>JavaScript</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React.js" style={{ width: "100px" }} />
          <p>React.js</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS3" style={{ width: "100px" }} />
          <p>CSS3</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML5" style={{ width: "100px" }} />
          <p>HTML5</p>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
