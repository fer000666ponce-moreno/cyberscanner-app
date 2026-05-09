import { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    dispositivo: "Cargando...",
    sistema: "Cargando...",
    conectado: false,
    tipoConexion: "desconocido",
    ipPublica: "Cargando..."
  });

  const scan = () => {
    // Simulación de datos (puedes reemplazar con lógica real después)
    setData({
      dispositivo: "Android",
      sistema: "web/apk",
      conectado: true,
      tipoConexion: "wifi",
      ipPublica: "187.234.xxx.xxx"
    });
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#0f0",
        padding: 20,
        fontFamily: "monospace",
        minHeight: "100vh"
      }}
    >
      <h2>CYBER SCANNER</h2>

      <button
        onClick={scan}
        style={{
          padding: "10px 20px",
          background: "#0f0",
          color: "#000",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        ESCANEAR RED
      </button>

      <pre style={{ marginTop: 20 }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
