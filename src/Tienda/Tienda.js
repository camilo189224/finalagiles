import './Tienda.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { consultarProductos } from '../services/consultarProductos'

export function Tienda(){

    const[cargaServicio,setCargaServicio]=useState(true)
    const[productos,setProductos]=useState(null)

    function cambiarFoto(evento){
        evento.preventDefault()
        evento.target.classList.remove("sombra")
    }

    function cambiarFoto2(evento){
        evento.preventDefault()
        evento.target.classList.add("sombra")
    }
    
    let navegador = useNavigate()
    function pasarInformacion(producto){
        navegador('/compras',{
            state:{producto}
        })
        
    }

    useEffect(function(){
        consultarProductos()
            .then(function(datos){
                setProductos(datos)
                setCargaServicio(false)   
            })
    },[])

    if(cargaServicio){
        return(
            <>
                consultarProductos()
                mostrarAlerta()
            </>
        )
        
    }else{

        return(
            <>
                <section>
                    <div class="banner1"></div>
                </section>
                <div class="row row-cols-1 row-cols-md-3 g-3 my-5">
                {console.log(productos)}
                    {
                        productos.map(function(producto){
                            return(
                                <div class="col zoom" onClick={function(){pasarInformacion(producto)}}>
                                
                                    <div class="card shadow h-100 ">
                                        <h2 class="fw-bold text-center">{producto.nombre}</h2>
                                        <img 
                                            src={producto.foto} 
                                            alt="foto" 
                                            class="img-fluid sombra" 
                                            onMouseOver={cambiarFoto} 
                                            onMouseLeave={cambiarFoto2}>
                                        </img>
                                        <br></br>
                                        <p class="text-center fw-bold">{producto.descripcion}</p>
                                        <br></br>
                                        <div class="row detalles">
                                            <h3 class="col-12 text-sucess text-center">${producto.precioUnitario}</h3>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )

    }

    /*let productos = [
        {nombre: "Plato de 200grs", 
        precio:"13.000", 
        descripcion:"Porcion pequeña para saciar las ganas de garritas 2 arepitas y 2 papitas cocidas.",
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/plato_200grs.jpg?alt=media&token=33c9bdd5-7faa-45de-a317-829811b0ebe4"},
    
        {nombre: "Plato de 250grs", 
        precio:"15.000", 
        descripcion:"Porcion personal acompañada de garrita arepita y papita cocida.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/plato_250grs.jpg?alt=media&token=1af860a4-5947-44f8-9b46-cb79afebe883"},
        
        {nombre: "Plato de 300grs", 
        precio:"17.000", 
        descripcion:"Porcion mas q personal acompañada de garrita arepita y papita cocida.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/plato_300grs.jpg?alt=media&token=293dcdaa-41f2-4c7a-b3d5-d7ff3edcfd4a"},
        
        {nombre: "Plato de 350grs", 
        precio:"19.000", 
        descripcion:"Porcion mucho mas q personal acompañada de garrita arepita y papita cocida.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/plato_350grs.jpg?alt=media&token=9c44f9e9-b28e-4480-bab1-5d5a0bf52daf"},
        
        {nombre: "Plato de 400grs", 
        precio:"22.000", 
        descripcion:"Porcion super personal acompañada de garrita arepita y papita cocida.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/plato_400grs.jpg?alt=media&token=92302b79-3133-405c-8ac1-eecc646e6ef7"},
        
        {nombre: "Plato de 500grs", 
        precio:"27.000", 
        descripcion:"Porcion doble acompañada de garritas 2 arepitas y 2 papitas cocidas.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/plato_500grs.jpg?alt=media&token=e4ab9321-f35a-4c38-8c3d-8ab36b24e2e1"},
        
        {nombre: "Empanad. Lechona", 
        precio:"3.500", 
        descripcion:"Deliciosas y muy crocantes con mas del 80% de carne.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/empanadas_lechona.jpg?alt=media&token=17a67b0f-1994-4c66-a67d-4608c6ce823a"},
        
        {nombre: "Cojin", 
        precio:"650.000",
        descripcion:"para 50 porciones acompañada de 50 papas y 50 arepas.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/CojinLechona2.jpeg?alt=media&token=27e39d12-5b52-4a74-9664-68187d0939ae"},
        
        {nombre: "Coca 250ml", 
        precio:"2.000", 
        descripcion:"Especial para calmar tu sed.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/coca-colamini.jpg?alt=media&token=f136f126-d355-491e-b671-7802e932adaf"},

        {nombre: "Coca Cero 250ml", 
        precio:"2.000", 
        descripcion:"Especial para calmar tu sed.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/coca-ceromini.jpg?alt=media&token=f9f331fc-100c-4e93-8bc6-f991f84fd619"},
        
        {nombre: "Coca 400ml", 
        precio:"3.000", 
        descripcion:"Especial para calmar tu sed.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/coca-colaflexy.jpg?alt=media&token=f5e02826-feb7-4ae0-a7da-eec5f31dbf71"},

        {nombre: "Coca 600ml", 
        precio:"4.000", 
        descripcion:"Especial para calmar tu sed.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/coca-cola600.jpg?alt=media&token=7e031f2c-c9a5-4bc0-971d-a3cff4bb862d"},

        {nombre: "Hit Lulo 500ml", 
        precio:"3.500", 
        descripcion:"Ideal sabor a Lulo para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/hitlulo.jpg?alt=media&token=84a0ec24-f830-4373-bd5b-1223e72983cb"},

        {nombre: "Hit Mora 500ml", 
        precio:"3.500", 
        descripcion:"Ideal sabor a Mora para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/hitmra.jpg?alt=media&token=84f1cc0f-51e2-4f2c-8a66-2e4900243057"},

        {nombre: "Hit Tropical 500ml", 
        precio:"3.500", 
        descripcion:"Ideal sabor a Frutas Tropicales para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/hittropical.jpg?alt=media&token=4d5c4224-c7c5-4ab9-aa97-139794161c7d"},

        {nombre: "Hit Tropical 1000ml", 
        precio:"4.500", 
        descripcion:"Ideal sabor a Frutas Tropicales para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/hittropical1lt.jpg?alt=media&token=5a5f734b-75c4-4ae4-8b6c-a5417af64670"},

        {nombre: "Hit Mango 1000ml", 
        precio:"4.500", 
        descripcion:"Ideal sabor a Mango para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/hitmng1lt.jpg?alt=media&token=faa44676-1c54-4ddb-a88b-bfebf2a1e278"},

        {nombre: "Hit Mora 1000ml", 
        precio:"4.500", 
        descripcion:"Ideal sabor a Mora para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/hitmora1lt.jpg?alt=media&token=d19ea251-db28-447e-9441-f60f1db42468"},

        {nombre: "Brisa Mzn 250ml", 
        precio:"2.000", 
        descripcion:"Ideal sabor a Manzana para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/brisamanzmini.jpg?alt=media&token=e17c991a-31f5-422f-8446-7c1d7ca10d4f"},

        {nombre: "Brisa Mzn 600ml", 
        precio:"3.000", 
        descripcion:"Ideal sabor a Manzana para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/brisamanz600.jpg?alt=media&token=b022eebc-9ba1-4790-adde-7e404a16e211"},

        {nombre: "Colombiana 250ml", 
        precio:"2.000", 
        descripcion:"Ideal sabor a nuestra tierra para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/colombianamini.jpg?alt=media&token=7b25d5a0-c1fd-40de-94a8-28ae5eb5e3ea"},

        {nombre: "Colombiana 400ml", 
        precio:"3.000", 
        descripcion:"Ideal sabor a nuestra tierra para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/colombianaflexy.jpg?alt=media&token=50685a96-9c2a-49f1-83a6-74a57cc04b81"},

        {nombre: "Manzana 250ml", 
        precio:"2.000", 
        descripcion:"Ideal sabor a Manzana para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/mnznamini.jpg?alt=media&token=39f35f43-e645-452d-b20d-5ca1e96bdb46"},
        
        {nombre: "Manzana 400ml", 
        precio:"3.000", 
        descripcion:"Ideal sabor a Manzana para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/manzanaflexy.jpg?alt=media&token=185becb3-bfc1-41c4-989f-78096e94a163"},

        {nombre: "Uva 250ml", 
        precio:"3.000", 
        descripcion:"Ideal sabor a Manzana para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/uvamini.jpg?alt=media&token=ade85104-3086-4ba9-bbe2-bcc7478428fb"},

        {nombre: "Del Valle 400ml", 
        precio:"2.500", 
        descripcion:"Ideal sabor Citrus para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/delvallecirtrusflx.jpg?alt=media&token=35749239-a255-4b3a-8c95-bd9b3aef7f5f"},

        {nombre: "DlVlleMora 1000ml", 
        precio:"4.000", 
        descripcion:"Ideal sabor a Mora para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/delvallemra1lt.jpg?alt=media&token=6db8b361-5efc-4464-a0af-c483f974e7e9"},

        {nombre: "DlVlleMango 1000ml", 
        precio:"4.000", 
        descripcion:"Ideal sabor a Mango para acompañar nuestros productos.", 
        foto:"https://firebasestorage.googleapis.com/v0/b/restaurantesrtolima.appspot.com/o/delvallemng1lt.jpg?alt=media&token=b407c177-6125-40f2-9779-2fb4ad861967"},

    ]*/

    
}