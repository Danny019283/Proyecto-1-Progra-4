import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProductosPage } from "./pages/ProductosPage";
import { ProductoFormPage } from "./pages/ProductoFormPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/productos" />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/productos-create" element={<ProductoFormPage />} />
        <Route path="/productos/:id" element={<ProductoFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;