import { useEffect, useState } from "react";
import { getAllProductos } from "../api/productos.api";
import { ProductoCard } from "./ProductoCard";

export function ProductosList() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function cargarProductos() {
    const res = await getAllProductos();
    setProductos(res.data);
  }

  useEffect(() => {
    cargarProductos();
  }, []);

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <div className="page-header">
        <div>
          <h1>Lista de productos</h1>
          <p className="subtitle">
            Administración de productos registrados en el sistema
          </p>
        </div>
      </div>

      {mensaje && <p className="mensaje-exito">{mensaje}</p>}

      <input
        className="search-input"
        type="text"
        placeholder="Buscar producto por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {productosFiltrados.length === 0 ? (
        <div className="empty-state">
          <h2>No hay productos registrados</h2>
          <p>
            Puede crear un nuevo producto desde el botón de la parte superior.
          </p>
        </div>
      ) : (
        <div className="grid">
          {productosFiltrados.map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              cargarProductos={cargarProductos}
              setMensaje={setMensaje}
            />
          ))}
        </div>
      )}
    </div>
  );
}