import './Button.css'

export function Button({ text, ...props }) {
    return (

        <button {...props} className='app__button' >{text} </button>
    )
}