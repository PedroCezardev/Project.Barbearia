import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Agendar from './Pages/Agendar/Agendar';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Profile from './Pages/Profile/Profile';

const App = () => {
  return (    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/agendamento' element={ <Agendar />}/>  
          <Route path='/Login' element={ <LoginSignup />}/>
          <Route path='/perfil' element={ <Profile />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App