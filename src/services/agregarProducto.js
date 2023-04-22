export async function registrarProductosEnBd(datos){

    console.log(datos)
    const URL="http://localhost:8080/tienda/api/"
    const PETICION={
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datos)
    }

    let respuesta=await fetch(URL,PETICION)
    let resultado=await respuesta.json()
    console.log(resultado)
    return resultado

}