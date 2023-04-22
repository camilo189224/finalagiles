// eslint-disable-next-line no-unused-vars
import { Route, Routes, } from "react-router-dom";
import { Home } from "../Home/Home";
import { Administrador } from "../Administrador/Administrador"
import { Menu } from "../Menu/Menu";
import { Tienda } from "../Tienda/Tienda";
import { AmpliarInfo } from "../AmpliarInfo/AmpliarInfo";

export function Router(){
    return (
        <>
            <header>
                <Menu></Menu>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/administrar" element={<Administrador />}></Route>
                <Route path="/productos" element={<Tienda />}></Route>
                <Route path="/compras" element={<AmpliarInfo/>}></Route> 
            </Routes>
        </>
    )
}