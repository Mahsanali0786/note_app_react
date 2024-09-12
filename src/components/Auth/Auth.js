// Auth.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authRepo from '../../api/authRepo';
import { handleAuthObject } from '../../store/auth';
import Input from '../Input/Input';
import './Auth.css';

function Auth() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const getData = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || pass === '') {
      setError('Fields cannot be empty.');
      return;
    }

    if (!emailPattern.test(name.trim())) {
      setError('Invalid email format.');
      return;
    }

    try {
      const data = await authRepo(name, pass);
      console.log(data);
      setError('');
      dispatch(handleAuthObject(data));
      navigate('/notes-table');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <>
      <div className='formDiv'>
        <form onSubmit={(e) => e.preventDefault()} className='form'>
          <Input
            label="Username"
            type="text"
            placeholder="Enter email"
            value={name}
            onInput={(e) => setName(e.target.value)}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            label="Password"
            onInput={(e) => setPass(e.target.value)}
            required
          />
          <button onClick={getData}>Submit</button>


          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </>
  );
}

export default Auth;
