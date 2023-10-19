import * as C from "./Header.js";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <>
        <link to="/"></link>
        <C.header>
        <C.dbtitulo>DB</C.dbtitulo>
        <C.cinemat>Cinema</C.cinemat>
        <C.ul>
            <C.li><C.a href="/filmes">Filmes</C.a></C.li>
            <C.li><C.a href="/diretor">Diretor</C.a></C.li>

        </C.ul>
        </C.header>
        
        </>
    )
}
export default Header;
