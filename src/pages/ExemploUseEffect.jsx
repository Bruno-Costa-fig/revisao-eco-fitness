import { useEffect, useState } from "react"

function ExemploUseEffect(){

    const [user, setUser] = useState({})

    function buscarUsuario(){
        fetch("https://api.github.com/users/Bruno-Costa-fig")
        .then((response) => response.json())
        .then((dados) => setUser(dados))
        .catch()
    }

    useEffect(() => {
        setInterval(() => {
            buscarUsuario()
        }, 3000)
    }, [])

    return (
        <>
            {!user.name ? "Carregando..." : user.name}
        </>
    )
}

export default ExemploUseEffect