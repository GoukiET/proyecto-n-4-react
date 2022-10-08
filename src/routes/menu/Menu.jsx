import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';

const Menu = () => {
    const [ menu, setMenu ] = useState([]) //trae el menu de firestore

    useEffect(() => {

        const getMenu = async() => {
        try {
            const colRef = collection(db, 'menu');
            const snapshots = await getDocs(colRef)
            const docs = snapshots.docs.map((doc) => {
                const data = doc.data()
                data.id = doc.id
                return data
            })
            setMenu(docs)
            console.log(docs);
        } catch (error) {
            console.log(error)
            }
        }
        getMenu()
    }, [])

    return (
/*         <div>
            <h2 className="text-center">Menu</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">               
                
                    <div class="col">
                        
                            <div className="card">
                                {
                                    menu.map(carta => (
                                        <div key={carta.id}>
                                            <img src={carta.imageUrl} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{carta.name}</h5>
                                                <p className="card-text">{carta.Ingredientes}</p>
                                                <p className="card-footer">Precio: ${carta.price}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        
                    </div>
                
            </div>
        </div> */

        <div>
            <h2 className="text-center">Menu</h2>            
                                {
                                    menu.map(carta => (
                                        <div key={carta.id}>
                                            <div className="container mt-4">   
                                                <div className="row">
                                                    <div className="col-6">                      
                                                        <div className="card">
                                                            <img src={carta.imageUrl} className="card-img-top" alt="..." />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{carta.name}</h5>
                                                                <p className="card-text">{carta.Ingredientes}</p>
                                                                <p className="card-footer">Precio: ${carta.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                        
                                            </div>
                                        </div>
                                    ))
                                }
                        
           
        </div>


    )
}

export default Menu;

