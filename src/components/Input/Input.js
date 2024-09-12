import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Input.css';

function Input(props) {
  const { label, placeholder, type, value, onInput } = props

  return (
    <>
      <label>{label}</label>
      <span className='textField'>
        <FontAwesomeIcon icon="fa-regular fa-envelope" />
        <input placeholder={placeholder} type={type} value={value} onInput={onInput} />
      </span>

    </>
  );
}

export default Input;
