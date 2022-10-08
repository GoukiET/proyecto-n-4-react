import './banner.css'
export const Banner = () => {
  return (

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://as1.ftcdn.net/v2/jpg/02/34/63/14/1000_F_234631446_kncnFFWKZPimGcyMMLDnA7WbgSfZx9gX.jpg" className="d-block w-100" alt="" />
        </div>
        <div className="carousel-item">
          <img src="https://as1.ftcdn.net/v2/jpg/02/34/63/14/1000_F_234631446_kncnFFWKZPimGcyMMLDnA7WbgSfZx9gX.jpg" className="d-block w-100" alt="" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
   

      )
  }
