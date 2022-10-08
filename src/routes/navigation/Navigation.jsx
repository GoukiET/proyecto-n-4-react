import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.css'
export const Navigation = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
              
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
              <Link to="/reserva" className="nav-link">
                Reservas
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

