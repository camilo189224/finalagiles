export async function consultarProductos(){

    const URL="http://localhost:8080/restaurantesr/api/"

    const PETICION={
        method:'GET'
    }

    let respuesta=await fetch(URL,PETICION)
    let datos=await respuesta.json()
    return datos


}
