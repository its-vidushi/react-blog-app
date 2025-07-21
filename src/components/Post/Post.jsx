import './post.css'
import { Link } from 'react-router-dom'

export default function Post({ id }) {
    return (
        <div className='post'>
            
                <img className='post-image'src='/images/aaron-burden-U53tH5NJG7o-unsplash.jpg'  alt='Blog Image'/>
            
            <div className='post-info'>
                <div className='post-title'>Title</div>
                <div className='post-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At debitis alias modi fuga laudantium dolor? Atque eum iure suscipit provident temporibus dicta, qui exercitationem officia quis quibusdam recusandae corrupti eaque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. At debitis alias modi fuga laudantium dolor? Atque eum iure suscipit provident temporibus dicta, qui exercitationem officia quis quibusdam recusandae corrupti eaque.</div>
                <div className='post-categories'>
                    <span className='post-category'>Life</span>
                    <span className='post-category'>Tech</span>
                </div>
                <Link to={`/post/${id}`} className='link'>
                    <button className='post-button'>Read More</button>
                </Link>
            </div>
        </div>
    )
}