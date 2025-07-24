import './post.css'
import { Link } from 'react-router-dom'

export default function Post({ id, title,body, tags }) {
    return (
        <div className='post'>
            
                <img className='post-image'src='/images/aaron-burden-U53tH5NJG7o-unsplash.jpg'  alt='Blog Image'/>
            
            <div className='post-info'>
                <div className='post-title'>{title}</div>
                <div className='post-desc'>{body}</div>
                <div className='post-categories'>
                    {tags.map(tag => (
                        <span className='post-category' key={tag}>{tag}</span>
                    ))}
                    
                </div>
                <Link to={`/post/${id}`} className='link'>
                    <button className='post-button'>Read More</button>
                </Link>
            </div>
        </div>
    )
}