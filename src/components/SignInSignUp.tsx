import { useState, type FC } from "react";
import { useNavigate } from 'react-router-dom';

export type IHandleFunk = (
     e: React.FormEvent<HTMLFormElement>,
     email: string,
     password: string
)=>void

export interface ISignInSignUp{
    handleSubmit:IHandleFunk
    error:string
    text:string
    saveButtonText:string
    redirectButtonText:string
    title:string
}


const SignInSignUp:FC<ISignInSignUp> = ({ handleSubmit,error,text,saveButtonText,redirectButtonText,title }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

  return (
    <div className="sign-in">
      <form onSubmit={(e)=>handleSubmit(e,email,password)} className='sign-in-container'>
        <h2>{title}</h2>
       <label htmlFor="email">
         Email
         <input
          id='email' 
          type="email" 
          placeholder='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
       </label>
       <div style={{ position: 'relative' }}>
        <label htmlFor="password">
          Password
          <input
            id='password'
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
         
          <button
            className='show-button'
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>        
         {error && <p style={{ color: 'red' }}>{error}</p>}

        <div>
            <button className='sign-in-button'>{saveButtonText}</button>            
        </div>
        <div>
          <span>{text} </span>
            <button className='sign-in-button up' onClick={() => navigate('/signUp')}>{redirectButtonText}</button>
        </div>

      </form>
    </div>
  )
}

export default SignInSignUp