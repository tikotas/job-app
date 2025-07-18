
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
import './App.css'
import Header from './components/Header'


function App() {

  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App
