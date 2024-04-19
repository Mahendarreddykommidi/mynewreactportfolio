import './Navbar.css'
import menuopen from '../../assets/menu_open.svg';
import menuclose from '../../assets/menu_close.svg'
import { useRef, } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

    const menuref=useRef()
function openmenu() {
    menuref.current.style.right="0"
    
}
function closemenu() {
    menuref.current.style.right="-360px"
    
}



  return (
    <div>
        <div className="navigation">
            <div className="logo">
                <h3>my portfolio</h3>
                <img src={menuopen} onClick={openmenu}  className='nav-mob-open' alt="" />

            </div>
            <nav>
                <ul className='menulinks' ref={menuref}>
                <img src={menuclose} onClick={closemenu} className='nav-mob-close' alt="" />
                    <li> <Link to='hero-section'  duration={500}   offset={0} smooth="true"></Link>Home</li>
                    <li> <Link to='about'  duration={500}   offset={-260} smooth="true"></Link>About</li>
               
                    <li> <Link to='portfolio'  duration={-250}   offset={-150} smooth='true'    ></Link>Portfolio</li>
                    <li> <Link to='contact'  duration={-300}   offset={-260} smooth='true'  ></Link>Contact</li>
                
                        
                </ul>

            </nav>
            <div className="buttons">
             <button className='btn'> contact me</button>  

            </div>
        </div>





    </div>
  )
}

export default Navbar