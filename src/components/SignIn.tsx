
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'
import SignInSignUp, { type IHandleFunk } from './SignInSignUp';
import { useAppDispatch } from '../store/hooks';
import { login } from '../slices/authSlice';

const SignIn = () => {

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch()


  
  const handleSignIn:IHandleFunk = (e, email ,password) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

   const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
   const foundUser = savedUsers.find((user: { email: string, password: string }) => user.email === email);
    
   if (foundUser && foundUser?.password !== password) {    
       setError('Invalid password');
       return;
    }

   if (!foundUser) {
        setError('no user, please sign up')
        return;
    }

   if(foundUser){
       setError('');
       dispatch(login(foundUser))
       navigate('/homePage');
    }
  }

  return (
    <SignInSignUp 
      text="Don't have an account yet?"
      saveButtonText='Sign In'
      redirectButtonText="Signup here"
      title='Login your account or Sign up'
      handleSubmit={handleSignIn} 
      error={error} 
    />
  )
}

export default SignIn