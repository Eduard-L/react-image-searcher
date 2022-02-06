import './Input.css'

export function Input({ value, onChange }) {

    function handleChange(e) {
        onChange(e.target.value)
    }
    return (
        <input onChange={handleChange} value={value || ''} type='text' className='app__input' placeholder='Search free high-resolution photos' ></input >

    )
}