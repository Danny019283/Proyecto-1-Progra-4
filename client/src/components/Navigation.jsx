import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/productos" className="logo">
        App de Productos
      </Link>

      <Link to="/productos-create" className="btn">
        Crear producto
      </Link>
    </nav>
  );
}