import './Button.css'

export function Button({ text, onClick }) {
    return (

        <button onClick={onClick} className='app__button' type="submit">{text}  </button>
    )
}