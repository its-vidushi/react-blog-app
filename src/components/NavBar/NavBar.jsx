import { Link } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {
    return (
        <div className='nav'>
            <div className='top-left'>
                <p>@itsvidushi</p>
            </div> 
            <div className='top-centre'>
                <ul className='nav-list'>
                    <li className='nav-list-item'>
                        <Link to="/" className='link'>HOME</Link>
                    </li>
                    <li className='nav-list-item'>
                        <Link to="/" className='link'>ABOUT</Link>
                    </li>
                    <li className='nav-list-item'>
                        <Link to="/" className='link'>CONTACT</Link> 
                    </li>
                    <li className='nav-list-item'>
                        <Link to="/write" className='link'>WRITE</Link>
                    </li>
                </ul>
            </div> 
            
            <div className='top-right'>
                <i class="top-icon fa-brands fa-github"></i>
                <i class="top-icon fa-brands fa-linkedin-in"></i>
                <i class="top-icon fa-brands fa-instagram"></i>
                <i class="top-icon fa-regular fa-envelope"></i>
            </div> 
        </div>
    )
}