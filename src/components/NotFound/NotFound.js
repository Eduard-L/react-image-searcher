import '../Photo/Photo.css'
import { Link } from 'react-router-dom'
export function NotFound() {
    return (
        <>
            <Link className='Photo-link' to="/" >Go Back</Link>
            <img className='NotFound' src='https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif' alt="404 not found" />

        </>
    )
}