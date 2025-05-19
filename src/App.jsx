import { useState } from "react";
import './App.css';

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
    <div className="form-container">
      <div style={{ 
        width: "100%",
        maxWidth: "500px", 
        padding: "40px",
        borderRadius: "20px",
        background: "linear-gradient(135deg,rgb(72, 58, 79) 0%,rgb(28, 18, 33) 100%)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        border: "1px solid rgba(255,255,255,0.3)",
        backdropFilter: "blur(10px)",
        position: "relative",
        overflow: "hidden",
        zIndex: 1
      }}>
        {/* Efecto decorativo */}
        <div style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100,108,255,0.15) 0%, rgba(0,0,0,0) 70%)",
          zIndex: -1
        }}></div>
        
        <div style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(0,0,0,0) 70%)",
          zIndex: -1
        }}></div>

        <h2 style={{
          color: "#4f46e5",
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "32px",
          fontWeight: "700",
          letterSpacing: "-0.5px",
          background: "linear-gradient(45deg, #4f46e5, #ec4899)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent"
        }}>Agregar Cliente</h2>
        
        <div style={{ marginBottom: "25px" }}>
          <label style={{
            display: "block",
            marginBottom: "10px",
            fontWeight: "600",
            color: "#FFFFFF",
            fontSize: "16px"
          }}>Nombre</label>
          <input
            type="text"
            placeholder="Ej: María González"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ 
              width: "100%", 
              padding: "15px",
              borderRadius: "12px",
              border: "2px solid #e0e7ff",
              fontSize: "16px",
              transition: "all 0.3s ease",
              outline: "none",
              boxSizing: "border-box",
              backgroundColor: "rgba(255,255,255,0.8)",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              ":focus": {
                borderColor: "#4f46e5",
                boxShadow: "0 0 0 3px rgba(79,70,229,0.2)"
              }
            }}
          />
        </div>
        
        <div style={{ marginBottom: "30px" }}>
          <label style={{
            display: "block",
            marginBottom: "10px",
            fontWeight: "600",
            color: "#FFFFFF",
            fontSize: "16px"
          }}>Correo electrónico</label>
          <input
            type="email"
            placeholder="Ej: contacto@ejemplo.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            style={{ 
              width: "100%", 
              padding: "15px",
              borderRadius: "12px",
              border: "2px solid #e0e7ff",
              fontSize: "16px",
              transition: "all 0.3s ease",
              outline: "none",
              boxSizing: "border-box",
              backgroundColor: "rgba(255,255,255,0.8)",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              ":focus": {
                borderColor: "#4f46e5",
                boxShadow: "0 0 0 3px rgba(79,70,229,0.2)"
              }
            }}
          />
        </div>
        
        <button 
          onClick={agregarCliente} 
          style={{ 
            width: "100%", 
            padding: "16px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(45deg, #4f46e5, #7c3aed)",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            marginBottom: "30px",
            boxShadow: "0 4px 15px rgba(79,70,229,0.3)",
            position: "relative",
            overflow: "hidden",
            ":hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(79,70,229,0.4)"
            },
            ":active": {
              transform: "translateY(0)"
            }
          }}
        >
          <span style={{ position: "relative", zIndex: 2 }}>
            Agregar Cliente
          </span>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(45deg, #7c3aed, #4f46e5)",
            opacity: 0,
            transition: "opacity 0.3s ease",
            zIndex: 1,
            ":hover": {
              opacity: 1
            }
          }}></div>
        </button>

        <h3 style={{
          color: "#4f46e5",
          marginBottom: "20px",
          fontSize: "22px",
          fontWeight: "600",
          paddingBottom: "10px",
          borderBottom: "2px solid #e0e7ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <span style={{ 
            backgroundColor: "#e0e7ff",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "10px",
            color: "#4f46e5",
            fontSize: "14px"
          }}>
            {clientes.length}
          </span>
          Clientes agregados
        </h3>
        
        {clientes.length === 0 ? (
          <div style={{
            padding: "20px",
            backgroundColor: "#f0f4ff",
            borderRadius: "12px",
            textAlign: "center",
            color: "#64748b",
            fontSize: "15px"
          }}>
            No hay clientes registrados aún
          </div>
        ) : (
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            maxHeight: "300px",
            overflowY: "auto",
            paddingRight: "10px"
          }}>
            {clientes.map((c, i) => (
              <li key={i} style={{
                padding: "18px",
                marginBottom: "15px",
                backgroundColor: "rgba(255,255,255,0.7)",
                borderRadius: "12px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
                borderLeft: "4px solid #4f46e5",
                transition: "all 0.3s ease",
                ":hover": {
                  transform: "translateX(5px)",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                }
              }}>
                <div style={{ 
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "5px"
                }}>
                  <div style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#4f46e5",
                    marginRight: "10px"
                  }}></div>
                  <div style={{ 
                    fontWeight: "600", 
                    color: "#4f46e5",
                    fontSize: "16px"
                  }}>{c.nombre}</div>
                </div>
                <div style={{ 
                  display: "flex",
                  alignItems: "center",
                  color: "#64748b",
                  fontSize: "14px",
                  marginLeft: "18px"
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: "8px" }}>
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {c.correo}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}