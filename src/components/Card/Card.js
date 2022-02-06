import './Card.css'

export function Card({ imgSrc, title, subtitle }) {
    return (
        <div className="card">
            <img className='card__image' src={imgSrc} alt={title} />
            <h2 className='card__title'>{title}</h2>
            <p className='card__subtitle'>{subtitle}</p>
        </div>
    )
}