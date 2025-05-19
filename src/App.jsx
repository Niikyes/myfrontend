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
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "600px",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        overflow: "hidden"
      }}>
        {/* Encabezado */}
        <div style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "25px",
          textAlign: "center"
        }}>
          <h1 style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: "600"
          }}>Gestión de Clientes</h1>
          <p style={{
            margin: "8px 0 0",
            opacity: 0.9,
            fontSize: "14px"
          }}>Agrega y administra tus clientes</p>
        </div>

        {/* Formulario */}
        <div style={{ padding: "30px" }}>
          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#4a5568",
              fontWeight: "500",
              fontSize: "14px"
            }}>Nombre completo</label>
            <input
              type="text"
              placeholder="Ej: María González"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "16px",
                transition: "all 0.3s",
                boxSizing: "border-box",
                backgroundColor: "#f8fafc"
              }}
            />
          </div>
          
          <div style={{ marginBottom: "30px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#4a5568",
              fontWeight: "500",
              fontSize: "14px"
            }}>Correo electrónico</label>
            <input
              type="email"
              placeholder="Ej: maria@ejemplo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                fontSize: "16px",
                transition: "all 0.3s",
                boxSizing: "border-box",
                backgroundColor: "#f8fafc"
              }}
            />
          </div>
          
          <button 
            onClick={agregarCliente} 
            style={{
              width: "100%",
              padding: "14px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
          >
            Agregar Cliente
          </button>
        </div>

        {/* Lista de clientes */}
        <div style={{
          borderTop: "1px solid #edf2f7",
          padding: "25px 30px"
        }}>
          <h3 style={{
            marginTop: 0,
            marginBottom: "20px",
            color: "#4a5568",
            fontSize: "18px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center"
          }}>
            <span style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              background: "#667eea",
              color: "white",
              borderRadius: "50%",
              textAlign: "center",
              lineHeight: "24px",
              marginRight: "10px",
              fontSize: "14px"
            }}>
              {clientes.length}
            </span>
            Clientes registrados
          </h3>
          
          {clientes.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "30px",
              color: "#a0aec0"
            }}>
              <p style={{ margin: 0 }}>No hay clientes registrados aún</p>
            </div>
          ) : (
            <div style={{
              maxHeight: "300px",
              overflowY: "auto",
              borderRadius: "10px",
              border: "1px solid #e2e8f0"
            }}>
              {clientes.map((c, i) => (
                <div key={i} style={{
                  padding: "15px",
                  borderBottom: "1px solid #edf2f7",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.3s",
                  backgroundColor: i % 2 === 0 ? "#f8fafc" : "white"
                }}>
                  <div>
                    <div style={{
                      fontWeight: "600",
                      color: "#2d3748"
                    }}>{c.nombre}</div>
                    <div style={{
                      fontSize: "14px",
                      color: "#718096",
                      marginTop: "4px"
                    }}>{c.correo}</div>
                  </div>
                  <div style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #a0aec0 0%, #718096 100%)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}>
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

