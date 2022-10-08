
export const Reserva = () => {
  return (
    <div>
          <h2 className="text-center mt-3">Reserva</h2>
          <div className="container text-center">
              <div className="row">
                  <div className="col">
                      <div className="container mt-5 p-5">
                          <h3>Reserva con nosotros</h3>
                          <p>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.
                          </p>

                          <h4>Dirección</h4>
                          <p>Obispo Hipólito Salas 94
                          Concepción, Bío Bío</p>

                      </div>
                  </div>
                  <div className="col">
                      <div className="container mt-5">
                          <div className="mb-3">
                              <input
                                  type="text"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Nombre"
                              />
                          </div>

                          <div className="mb-3">
                              <input
                                  type="email"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Email"
                              />
                          </div>

                          <div className="mb-3">
                              <input
                                  type="text"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  placeholder="Teléfono"
                              />
                          </div>

                          <div className="mb-3">
                              <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                  placeholder="Descripción"
                              ></textarea>
                          </div>

                          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                              <button type="submit" className="btn btn-outline-warning">Enviar</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


      </div>
  );
}
