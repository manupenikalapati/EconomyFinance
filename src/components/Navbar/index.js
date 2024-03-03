import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => {
    return (
        
       
            <nav className='my-nav'>
              <div>
              <h1 className='main-logo'>Economy Finance</h1>
              </div>

              <ul className='my-card'>
              <li><Link to="/" className='my-text'>HOME</Link></li>
              <li><Link to="/about" class="my-text">ABOUT</Link></li>
              <li><Link to="/services" class="my-text">MORTGAGE SERVICES</Link></li>
              <li><Link to="/savings" class="my-text">SAVINGS AND INVESTMENTS</Link></li>
              <li><Link to="/contact" class="my-text">CONTACT</Link></li>
              <li><Link to="/login" class="my-text">LOGIN</Link></li>
              </ul>
        </nav>
        
       
 
   
        
        
    )
}

export default Navbar