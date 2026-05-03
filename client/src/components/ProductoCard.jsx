export function ProductoCard({producto}) { //Componente básico de app
  return (
  <div>
      <h1>{producto.nombre}</h1>
      <p>Precio: {producto.precio}</p>
      <p>Existencias: {producto.existencias}</p>
    </div>
  ) 
}
