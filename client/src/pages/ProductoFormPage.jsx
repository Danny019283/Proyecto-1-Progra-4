
 // Permite crear y editar productos

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProducto,
  getProducto,
  updateProducto,
} from "../api/productos.api";

export function ProductoFormPage() {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    existencias: "",
  });

  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function cargarProducto() {
      if (params.id) {
        const res = await getProducto(params.id);

        setProducto({
          nombre: res.data.nombre,
          precio: res.data.precio,
          existencias: res.data.existencias,
        });
      }
    }

    cargarProducto();
  }, [params.id]);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const guardarProducto = async (e) => {
    e.preventDefault();
    setError("");

    if (producto.nombre.trim() === "") {
      setError("El nombre del producto es obligatorio.");
      return;
    }

    if (producto.nombre.trim().length < 2) {
      setError("El nombre debe tener al menos 2 caracteres.");
      return;
    }

    if (Number(producto.precio) <= 0) {
      setError("El precio debe ser mayor a 0.");
      return;
    }

    if (Number(producto.existencias) < 0) {
      setError("Las existencias no pueden ser negativas.");
      return;
    }

    const datos = {
      nombre: producto.nombre.trim(),
      precio: Number(producto.precio),
      existencias: Number(producto.existencias),
    };

    try {
      setCargando(true);

      if (params.id) {
        await updateProducto(params.id, datos);
      } else {
        await createProducto(datos);
      }

      navigate("/productos");
    } catch (error) {
      setError("No se pudo guardar el producto. Revise los datos.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="form-container">
      <h1>{params.id ? "Editar producto" : "Crear producto"}</h1>

      <form onSubmit={guardarProducto} className="formulario">
        {error && <p className="mensaje-error">{error}</p>}

        <label>Nombre del producto</label>
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          placeholder="Ejemplo: Pepsi"
          required
        />

        <label>Precio</label>
        <input
          type="number"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          placeholder="Ejemplo: 1200"
          min="1"
          required
        />

        <label>Existencias</label>
        <input
          type="number"
          name="existencias"
          value={producto.existencias}
          onChange={handleChange}
          placeholder="Ejemplo: 10"
          min="0"
          required
        />

        <div className="form-buttons">
          <button type="submit" disabled={cargando}>
            {cargando ? "Guardando..." : params.id ? "Actualizar" : "Guardar"}
          </button>

          <button
            type="button"
            className="secondary"
            onClick={() => navigate("/productos")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}