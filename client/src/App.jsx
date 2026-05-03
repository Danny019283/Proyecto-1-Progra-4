import {BrowserRouter, Routes, Route, Navigate}  from "react-router-dom"; //Sirve para tener múltiples rutas
import { ProductosPage } from "./pages/ProductosPage";
import { ProductoFormPage } from "./pages/ProductoFormPage";
import {Navigation} from "./components/Navigation";

function App() { //Componente básico de app        RUTAS de NAVEGACION
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/productos" />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/productos-create" element={<ProductoFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 