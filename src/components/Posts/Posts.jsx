import './posts.css'
import Post from '../Post/Post'

export default function Posts() {
    return (
        <div className='posts'>
            <Post id={1} />
            <Post id={2} />
            <Post id={3} />
            <Post id={4} />
            <Post id={5} />
            <Post id={6} />
            <Post id={7} />
            <Post id={8} />
        </div>
    )
}