import React from 'react'

export const Card = (props) => {
    console.log(props);
    const {imageUrl, name, Ingredientes, price} = props.datos
  return (
    <div>
        <div key={props.datos.id}> 
        <div className="container mt-4">   
            <div className="row align-items-center">
            <div className="col">
            <div className="card " style={{width: '400px'}}>
            <img src={imageUrl} className="card-img-top" alt="..." style={{width: '400px'}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{Ingredientes}</p>
                <p className="card-footer">Precio: ${price}</p>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}
