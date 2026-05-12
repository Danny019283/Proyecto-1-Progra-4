import { useNavigate } from "react-router-dom";
import { deleteProducto } from "../api/productos.api";

export function ProductoCard({ producto, cargarProductos, setMensaje }) {
  const navigate = useNavigate();

  const eliminarProducto = async () => {
    const confirmar = window.confirm(
      `¿Desea eliminar el producto "${producto.nombre}"?`
    );

    if (confirmar) {
      await deleteProducto(producto.id);
      await cargarProductos();

      setMensaje("Producto eliminado correctamente.");

      setTimeout(() => {
        setMensaje("");
      }, 3000);
    }
  };

  return (
    <div className="card">
      <h2>{producto.nombre}</h2>

      <p>
        <strong>Precio:</strong> ₡
        {Number(producto.precio).toLocaleString("es-CR")}
      </p>

      <p>
        <strong>Existencias:</strong> {producto.existencias}
      </p>

      <div className="card-buttons">
        <button onClick={() => navigate(`/productos/${producto.id}`)}>
          Editar
        </button>

        <button className="delete" onClick={eliminarProducto}>
          Eliminar
        </button>
      </div>
    </div>
  );
}