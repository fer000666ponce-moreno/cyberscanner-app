export default function App() {
  const sensores = [
    { nombre: "RPM", valor: "850 rpm" },
    { nombre: "Temperatura", valor: "92°C" },
    { nombre: "Voltaje", valor: "13.9V" },
    { nombre: "TPS", valor: "14%" },
    { nombre: "O2", valor: "0.82V" },
    { nombre: "Velocidad", valor: "0 km/h" },
  ];

  return (
    <div style={{
      backgroundColor: "black",
      color: "#00ff99",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "monospace"
    }}>
      <h1>CYBER SCANNER VW</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: "15px"
      }}>
        {sensores.map((s, i) => (
          <div key={i} style={{
            border: "1px solid #00ff99",
            borderRadius: "15px",
            padding: "20px",
            backgroundColor: "#111"
          }}>
            <h2>{s.nombre}</h2>
            <p>{s.valor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
