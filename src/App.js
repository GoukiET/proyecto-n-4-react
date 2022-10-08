import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './routes/navigation/Navigation';
import { Fragment } from 'react';
import { Home } from './routes/home/Home';
import Menu from './routes/menu/Menu';
import { Reserva } from './routes/reserva/Reserva';

function App() {

  return (
      <Fragment>
          <Routes>
              <Route path='/' element={<Navigation />}> {/* Ruta para captar errores */}
                  <Route index element={<Home />}/>
                  <Route path='menu' element={<Menu />}/>
                  <Route path='reserva' element={<Reserva />}/>
              </Route>
          </Routes>
      </Fragment>
  );
}

export default App;
