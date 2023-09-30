import { Link, Outlet } from "react-router-dom";
import styles from './styles.module.css'

function Header(){

  return(
    <>
    <header>
      <div className={styles.container}>
        <ul>
          <li><Link to={'/'}>Tabla de puntajes</Link></li>
          <li><Link to={'/edit'}>Agregar puntos</Link></li>
          <li><Link to={'/add'}>Agregar participantes</Link></li>
        </ul>
      </div>
    </header>
    <Outlet />
    </>
  )
}

export default Header;