import { useState } from "react";

export default function App() {
  const [clientes, setClientes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  // Función para agregar un cliente a la lista
  const agregarCliente = () => {
    if (nombre.trim() === "" || correo.trim() === "") {
      alert("Por favor, completa nombre y correo");
      return;
    }
    setClientes([...clientes, { nombre, correo }]);
    setNombre("");
    setCorreo("");
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Agregar Cliente</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ width: "100%", marginBottom: 8, padding: 8 }}
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        style={{ width: "100%", marginBottom: 8, padding: 8 }}
      />
      <button onClick={agregarCliente} style={{ width: "100%", padding: 10 }}>
        Agregar Cliente
      </button>

      <h3>Clientes agregados:</h3>
      <ul>
        {clientes.map((c, i) => (
          <li key={i}>
            {c.nombre} - {c.correo}
          </li>
        ))}
      </ul>
    </div>
  );
}

