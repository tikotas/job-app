import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import type { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import './header.css';


const Header = () => {
  const navigate = useNavigate();
  const authUser = useAppSelector((state:RootState)=> state.auth.user)
  const dispatch = useDispatch()
  
  return (
    <div className='header'>
      {
        authUser
          ? (
            <div className='header-buttons'>
              <button className='header-button' onClick={()=>dispatch(logout())}>Log Out</button>
            </div>
          )
          : (
            <div className='header-buttons'>
              <button className='header-button' onClick={() => navigate('/signIn')}>Sign In</button>
              <button className='header-button' onClick={() => navigate('/signUp')}>Sign Up</button>
            </div>
          )
      }
    </div>
  );
};

export default Header;
