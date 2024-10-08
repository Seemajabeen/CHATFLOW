import {Link} from 'react-router-dom'
import "./Header.css";

function Header(){
    return(
    <div >
      <ul className='nav p-1 justify-content-end bg-secondary fs-7'>
       
        <li className="nav-item">
          <Link to="" className='nav-link text-white'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="register" className='nav-link text-white'>Register</Link>
        </li>
        <li className="nav-item">
          <Link to="login" className='nav-link text-white'>Login</Link>
        </li>
      </ul>
    </div>
    );
}

export default Header;