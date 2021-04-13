import './header.css';
import { slide as Menu } from 'react-burger-menu';
const Header = () => {

    return(
        <div>
            <div className='header-desktop'>
                <h1 className ='header-title'>theSensation</h1>
                <ul className ='header-elements'>
                    <li className ='header-element'>Habitaciones</li>
                    <li className ='header-element'>Servicios</li>
                    <li className ='header-element'>Ubicación</li>
                    <li className ='header-element'>Contacto</li>
                </ul>
            </div>
            <div className='header-mobile'>
                <h1 className ='header-title'>theSensation</h1>
                <Menu width={'100%'} right>
                    <div className="header-element" >Habitaciones</div>
                    <div className="header-element" >Servicios</div>
                    <div className="header-element" >Ubicación</div>
                    <div className="header-element" >Contacto</div>
                </Menu>
            </div>
        </div>
        
    )
}

export default Header