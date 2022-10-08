import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { Card } from "../../components/card/Card";
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

        <div>
            <h2 className="text-center mb-5">Menu</h2>            

           {
            menu.map(carta => <Card datos={carta}/>)
           }
        </div>


    )
}

export default Menu;

