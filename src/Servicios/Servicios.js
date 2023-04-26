import './Servicios.css'
import { Link } from 'react-router-dom'
export function Servicios(){
    return(
        <>
            <section class="container-fluid my-5">
                <div class="row text-center justify-content-around">
                    <div class="12 col-md-2 fondo">
                        <h4>Billetera</h4>
                        <i class="bi bi-credit-card-2-back fs-1"></i>
                    </div>
                    <div class="col-12 col-md-2 fondo">
                        <p>Administrar Productos</p>
                        <Link to="/administrar"><i class="bi bi-shop fs-1"></i></Link>
                    </div>
                    <div class="col-12 col-md-2 fondo">
                        <p>Nuestros Productos</p>
                        <Link to="/productos"><i class="bi bi-basket2 fs-1"></i></Link>
                    </div>
                    <div class="col-12 col-md-2 fondo">
                        <h4>Carrito</h4>
                        <i class="bi bi-cart4 fs-1"></i>
                    </div>
                </div>
            </section>
        </>
    )
}