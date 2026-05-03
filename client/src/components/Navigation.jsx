import {Link} from 'react-router-dom'

export function Navigation() { 
  return (
    <div>
        <Link to="/productos">
        <h1>App de Productos</h1>
        </Link>
        <Link to="/productos-create">create producto</Link>
    </div>
  )
}


