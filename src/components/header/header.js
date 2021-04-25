import './header.css';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";

const Header = () => {

    return(
        <div>
            <div className='header-desktop'>
                <Link style={{color:'unset', textDecoration: 'unset'}} to='/'>
                    <h1 className ='header-title'>theSensation</h1>
                </Link>
                <ul className ='header-elements'>
                    <li className ='header-element'>
                    <Link style={{color:'unset', textDecoration: 'unset'}} to='/room'>
                        Habitaciones
                    </Link>
                    </li>
                    <li className ='header-element'>
                        <Link style={{color:'unset', textDecoration: 'unset'}} to='/services'>Servicios</Link>
                    </li>
                    <li className ='header-element'>
                    <Link style={{color:'unset', textDecoration: 'unset'}} to='/location'>Ubicación</Link>
                    </li>
                    <li className ='header-element'>Contacto</li>
                </ul>
            </div>
            <div className='header-mobile'>
                <Link style={{color:'unset', textDecoration: 'unset'}} to='/'>
                    <h1 className ='header-title'>theSensation</h1>
                </Link>
                <Menu width={'100%'} right>
                    <div className="header-element" ><Link style={{color:'unset', textDecoration: 'unset'}} to='/room'>Habitaciones</Link></div>
                    <div className="header-element" ><Link style={{color:'unset', textDecoration: 'unset'}} to='/services'>Servicios</Link></div>
                    <div className="header-element" ><Link style={{color:'unset', textDecoration: 'unset'}} to='/location'>Ubicación</Link></div>
                    <div className="header-element" >Contacto</div>
                </Menu>
            </div>
        </div>
        
    )
}

export default Header