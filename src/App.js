
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './components/ProtectedRoutes';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
   
    <Routes>
      <Route path='/signup' element={<Signin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<ProtectedRoutes/>}>
         <Route path='/home' element={<Homepage/>}/>
      </Route>
      
    </Routes>
    
    </div>
  );
}

export default App;
