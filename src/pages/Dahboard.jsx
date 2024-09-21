import axios from "axios"
import { useState, useEffect } from "react"

function Dashboard() {

    const [listaUsuarios, setListaUsuarios] = useState([])

    async function fetchUsuarios() {
        try {
            const token = localStorage.getItem("token")

            const response = await axios.get("http://localhost:3000/users", {
                headers: {
                    'Authorization': `Basic ${token}` 
                }
            })


            if (!!response && response.status == 200) {
                setListaUsuarios(response.data)
            }
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsuarios()
    }, [])

    return (<>
    <h1>Dashboard</h1>
    {listaUsuarios.length > 0 && listaUsuarios[0].nome}
    </>);
}

export default Dashboard;