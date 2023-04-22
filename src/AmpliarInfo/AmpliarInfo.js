import './AmpliarInfo.css'
import { useLocation } from 'react-router-dom'

export function AmpliarInfo(){

    let location = useLocation()
    let producto = location.state.producto
    console.log(producto)

    return(
        <>
            <br></br>
            <br></br>
            <br></br>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img 
                            src={producto.foto} 
                            class="img-fluid w-90" 
                            alt="foto" />
                    </div>
                    <div class="col-12 col-md-6 border p-2 rounded shadow">
                        <h2 class="fw-bold">{producto.nombre}</h2>
                        <p>{producto.descripcion}</p>
                        <i class="bi bi-star-fill text-warning fs-4 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-4 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-4 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-4 ms-1"></i>

                        <i class="bi bi-star-fill  ms-1"></i>
                        <br></br>
                        <span class="badge text-warning mt-3">Mas Vendido</span>
                        <br></br>
                        <h1>{producto.precio}<span class="badge text-primary mt-2">Oferta</span></h1>
                        <p class="text-muted me-3">Hasta 48 cuotas</p>
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/visa.png?alt=media&token=e90399ec-5bb0-4572-92a7-184b42660e5d" 
                            alt="icono"
                            class="img-fluid me-3">
                        </img>
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/american-express.png?alt=media&token=40ae3ca7-efe7-4ef6-93d5-0a3821200547" 
                            alt="icono"
                            class="img-fluid me-3">
                        </img>

                        <i class="bi bi-truck display-1"></i>
                        <br></br>
                        <form>
                            <label class="form-label">Cantidad:</label>
                            <input class="form-control" type="number" value="1"></input>
                            <button type="submit" class="boton btn-warning mt-2 w-100">
                                <i class="bi bi-cart"></i>
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        
        </>
    )
}