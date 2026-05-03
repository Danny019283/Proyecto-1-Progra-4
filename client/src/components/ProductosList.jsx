import { useEffect, useState } from "react"
import { getAllProductos } from "../api/productos.api";
import { ProductoCard } from "./ProductoCard";

export function ProductosList() { 
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
      async function loadProductos() {
        const res = await getAllProductos();
        setProductos(res.data);
    }
    loadProductos();
  }, []);

  return <div>
    {productos.map(producto => (
         <ProductoCard key={producto.id} producto={producto} />
    ))}
  </div>;
  
}
