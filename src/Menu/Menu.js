import { Link } from 'react-router-dom'
import './Menu.css'

export function Menu(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark menu fixed-top">
                <div class="container-fluid">
                    <Link class="navbar-brand menu1" to="/"><img 
                    src="https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/emoticon_cerdito.png?alt=media&token=95acaa29-8a2e-47b9-a91a-f37d661259a8" 
                    alt="foto" 
                    class="img-fluid img">
                    </img>SR. TOLIMA</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link class="nav-link active menu1" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link menu1" to="/administrar">Productos de la Casa</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link menu1" to="/productos">Todos los Productos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}