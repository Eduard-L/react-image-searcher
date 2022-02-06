import './Card.css'
import { Link } from 'react-router-dom'

export function Card({ imgSrc, title, subtitle, id }) {
    return (
        <div className='card'>
            <Link className="card__link" to={`photos/${id}`}>
                <img className='card__image' src={imgSrc} alt={title} />
            </Link>
            <h2 className='card__title'>{title}</h2>
            <p className='card__subtitle'>{subtitle}</p>
        </div>
    )
}