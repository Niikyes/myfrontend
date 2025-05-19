import { useState } from "react";

export default function App() {
  const [clientes, setClientes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

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
    <div style={{
      maxWidth: 500,
      margin: "auto",
      padding: "2rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{
        color: "#2c3e50",
        textAlign: "center",
        marginBottom: "1.5rem",
        fontSize: "1.8rem"
      }}>Gestión de Clientes</h2>
      
      <div style={{
        backgroundColor: "white",
        padding: "1.5rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        marginBottom: "1.5rem"
      }}>
        <h3 style={{
          color: "#3498db",
          marginTop: 0,
          marginBottom: "1rem",
          fontSize: "1.2rem"
        }}>Agregar Nuevo Cliente</h3>
        
        <div style={{ marginBottom: "1rem" }}>
          <label style={{
            display: "block",
            marginBottom: "0.5rem",
            color: "#7f8c8d",
            fontWeight: "500"
          }}>Nombre</label>
          <input
            type="text"
            placeholder="Ingrese el nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #dfe6e9",
              borderRadius: "6px",
              fontSize: "1rem",
              transition: "border 0.3s",
              boxSizing: "border-box"
            }}
          />
        </div>
        
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{
            display: "block",
            marginBottom: "0.5rem",
            color: "#7f8c8d",
            fontWeight: "500"
          }}>Correo Electrónico</label>
          <input
            type="email"
            placeholder="Ingrese el correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #dfe6e9",
              borderRadius: "6px",
              fontSize: "1rem",
              transition: "border 0.3s",
              boxSizing: "border-box"
            }}
          />
        </div>
        
        <button 
          onClick={agregarCliente} 
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#2980b9"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#3498db"}
        >
          Agregar Cliente
        </button>
      </div>

      <div style={{
        backgroundColor: "white",
        padding: "1.5rem",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
      }}>
        <h3 style={{
          color: "#3498db",
          marginTop: 0,
          marginBottom: "1rem",
          fontSize: "1.2rem"
        }}>Lista de Clientes</h3>
        
        {clientes.length === 0 ? (
          <p style={{
            color: "#95a5a6",
            textAlign: "center",
            fontStyle: "italic"
          }}>No hay clientes registrados</p>
        ) : (
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0
          }}>
            {clientes.map((c, i) => (
              <li key={i} style={{
                padding: "0.75rem",
                borderBottom: "1px solid #ecf0f1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "background-color 0.2s"
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#f8f9fa"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
              >
                <span style={{ fontWeight: "500" }}>{c.nombre}</span>
                <span style={{
                  color: "#7f8c8d",
                  fontSize: "0.9rem"
                }}>{c.correo}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

