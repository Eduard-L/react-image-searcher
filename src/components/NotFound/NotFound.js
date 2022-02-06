import './NotFound.css'
import { Link } from 'react-router-dom'
export function NotFound() {
    return (
        <>
            <img className='NotFound' src='https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif' alt="404 not found" />
            {/* <Link className='NotFound-link' to=".." >Go Back</Link> */}
        </>
    )
}