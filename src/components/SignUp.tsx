
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInSignUp from './SignInSignUp';
// import { useAppDispatch } from '../store/hooks';

 

const SignUp = () => {

  const [error, setError] = useState('');
  const navigate = useNavigate()
  // const dispatch = useAppDispatch()

    const handleSignUp = (e: { preventDefault: () => void; }, email: string ,password: string) => {
      e.preventDefault()
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = users.find(
      (user: { email: string }) => user.email === email
    );

    if (existingUser) {
      setError('User already exists');
      return;
    }

    const updatedUsers = [...users, { email, password }];

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setError('');
    navigate('/signIn');
  };

  return (

    <SignInSignUp 
      handleSubmit={handleSignUp}
      saveButtonText='Register'
      redirectButtonText="Sign in here" 
      text="Already have an account?"
      title='Create your account'
      error={error} 
    />
  )
}

export default SignUp