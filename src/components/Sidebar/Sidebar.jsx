import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-item'>
                <span className='sidebar-title'>ABOUT ME</span>
                <img src='/public/images/woman-elegant-dress-standing-summer-field.jpg' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className='sidebar-item'>
                <span className='sidebar-title'>CATEGORIES</span>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>Life</li>
                    <li className='sidebar-list-item'>Music</li>
                    <li className='sidebar-list-item'>Tech</li>
                    <li className='sidebar-list-item'>Sport</li>
                    <li className='sidebar-list-item'>Experiments</li>
                    <li className='sidebar-list-item'>Reflections</li>
                </ul>
            </div>
            <div className='sidebar-item'>
                <span className='sidebar-title'>FOLLOW ME</span>
                <div className='sidebar-socials'>
                    <i class="sidebar-icon fa-brands fa-github"></i>
                    <i class="sidebar-icon fa-brands fa-linkedin-in"></i>
                    <i class="sidebar-icon fa-brands fa-instagram"></i>
                    <i class="sidebar-icon fa-regular fa-envelope"></i>
                </div>
            </div>
        </div>
    )
}