import './Home.css'
import { AcercaDe } from '../AcercaDe/AcercaDe'
import { Servicios } from '../Servicios/Servicios'


export function Home(){
    return(
        <>
            <section>
                <div class="banner">
                    <h1>Bienvenido al Restaurante, Disfruta de los Mejores productos de todo el Territorio</h1>
                </div>
            </section>
            <AcercaDe></AcercaDe>
            <Servicios></Servicios>
        </>
    )
}