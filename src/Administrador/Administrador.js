import { useState, /*useEffect*/ } from 'react'
import './Administrador.css'
import { registrarProductosEnBd } from '../services/agregarProducto'

export function Administrador(){

    const[nombre, setNombre] = useState("")
    const[foto, setFoto] = useState("")
    const[descripcion, setDescripcion] = useState("")
    const[cantidad, setCantidad] = useState("")
    const[precio, setprecio] = useState("")
    const[clasificacion, setClasificacion] = useState("")
    const[marca, setMarca] = useState("")
    const[presentacion, setPresentacion] = useState("")
    const[peso, setPeso] = useState("")
    const[proveedor, setProveedor] = useState("")
    const[estado, setEstado] = useState("")
    const[volumen, setVolumen] = useState("")
    const[fechaelaboracion, setFechaelaboracion] = useState("")
    const[fechavencimiento, setFechavencimiento] = useState("")
    const[descuento, setDescuento] = useState("")

    function procesarFormulario(evento){
        evento.preventDefault()
        let datosProducto = {
            "nombre": nombre,
            "foto": foto,
            "descripcion": descripcion,
            "cantidad": cantidad,
            "precio": precio,
            "clasificacion": clasificacion,
            "marca": marca,
            "presentacion": presentacion,
            "peso": peso,
            "proveedor": proveedor,
            "estado": estado,
            "volumen": volumen,
            "fechaIngreso": fechaelaboracion,
            "fechaVencimiento": fechavencimiento,
            "descuento": descuento
        }
        console.log(datosProducto)
        registrarProductosEnBd(datosProducto)
        .then(function(respuest){
            console.log(respuest)
        })
        
    }

    return(

        <>
            <br></br>
            <br></br>
            <div class="container-fluid my-5 center">
                <br></br>
                <div class="container-fluid my-5">
                    <div class="row">
                        <div class="col-6">
                            <img src="https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/plato_200grs.jpg?alt=media&token=33c9bdd5-7faa-45de-a317-829811b0ebe4" alt="foto" class="img-fluid"></img>
                            
                        </div>
                        <div class="col-6">
                            <h2>Plato de 200grs</h2>
                            <form class="my-3" onSubmit={procesarFormulario}>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-person-fill"></i></span>
                                            <input 
                                                type="text"    
                                                class="form-control" 
                                                placeholder="Nombre" 
                                                id="nombre"
                                                onChange={(evento)=>{
                                                    setNombre(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-person-square"></i></span>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                placeholder="Foto" 
                                                id="foto"
                                                onChange={(evento)=>{
                                                    setFoto(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-card-text"></i></span>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                placeholder="Descripcion" 
                                                id="descripcion"
                                                onChange={(evento)=>{
                                                    setDescripcion(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-123"></i></span>
                                            <input 
                                                type="number" 
                                                class="form-control" 
                                                placeholder="Cantidad" 
                                                id="cantidad"
                                                onChange={(evento)=>{
                                                    setCantidad(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-currency-exchange"></i></span>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                placeholder="Precio Unitario" 
                                                id="precio"
                                                onChange={(evento)=>{
                                                    setprecio(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-archive-fill"></i></span>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                placeholder="Clasificacion" 
                                                id="clasificacion"
                                                onChange={(evento)=>{
                                                    setClasificacion(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-tags-fill"></i></span>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                placeholder="Marca" 
                                                id="marca"
                                                onChange={(evento)=>{
                                                    setMarca(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-box-seam-fill"></i></span>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                placeholder="Presentacion" 
                                                id="presentacion"
                                                onChange={(evento)=>{
                                                    setPresentacion(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-building-fill"></i></span>
                                            <input 
                                                type="number" 
                                                class="form-control" 
                                                placeholder="Peso" 
                                                id="peso"
                                                onChange={(evento)=>{
                                                    setPeso(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-basket-fill"></i></span>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                placeholder="Proveedor" 
                                                id="proveedor"
                                                onChange={(evento)=>{
                                                    setProveedor(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-bug-fill"></i></span>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                placeholder="Estado" 
                                                id="estado"
                                                onChange={(evento)=>{
                                                    setEstado(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-list-ol"></i></span>
                                            <input 
                                                type="number" 
                                                class="form-control" 
                                                placeholder="Volumen" 
                                                id="volumen"
                                                onChange={(evento)=>{
                                                    setVolumen(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-calendar2-check-fill"></i></span>
                                            <input 
                                                type="number" 
                                                class="form-control" 
                                                placeholder="Fecha Elaboracion" 
                                                id="fechaIngreso"
                                                onChange={(evento)=>{
                                                    setFechaelaboracion(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-calendar2-date-fill"></i></span>
                                            <input 
                                                type="number" 
                                                class="form-control" 
                                                placeholder="Fecha Vencimiento" 
                                                id="fechaVencimiento"
                                                onChange={(evento)=>{
                                                    setFechavencimiento(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group mb-1">
                                            <span 
                                                class="input-group-text" 
                                                id="basic-addon1"><i class="bi bi-cash-coin"></i></span>
                                            <input 
                                                type="text" 
                                                class="form-control" 
                                                placeholder="Descuento" 
                                                id="decuento"
                                                onChange={(evento)=>{
                                                    setDescuento(evento.target.value)
                                                }}/>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-outline-success">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
               
        </>

    )

}