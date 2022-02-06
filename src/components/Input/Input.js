import './Input.css'

export function Input({ value, onChange, placeholder }) {

    function handleChange(e) {
        onChange(e.target.value)
    }
    return (
        <input onChange={handleChange} value={value || ''} type='text' className='app__input' placeholder={placeholder} ></input >

    )
}