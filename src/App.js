
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Jobdetails from './components/Jobdetails';
import Jobs from './components/Jobs';
import ProtectedRoutes from './components/ProtectedRoutes';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Applyform from './components/Applyform';
import Myjobs from './components/Myjobs';
import Applications from './components/Applications';
import Topbar from './components/Topbar';
import Profile from './components/Profile';
import Createjob from './components/Createjob';
import Resetpass from './pages/Resetpass';
import Footer from './components/Footer';

function App() {
  

  

  return (
    <div className="App">
   <UserAuthContextProvider>
     <Topbar/>
    <Routes>
      <Route path='/signup' element={<Signin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<ProtectedRoutes><Homepage/></ProtectedRoutes>}/>
      <Route path='/jobs' element={<Jobs/>}/>
      <Route path='/resetpassword' element={<Resetpass/>}/>
      <Route path='/profile' element={<ProtectedRoutes><Profile/></ProtectedRoutes>}/>
      <Route path='/createjob' element={<ProtectedRoutes><Createjob/></ProtectedRoutes>}/>
      <Route path='/details/:id' element={<ProtectedRoutes><Jobdetails/></ProtectedRoutes>}/>
      <Route path='/apply/:id' element={<ProtectedRoutes><Applyform/></ProtectedRoutes>}/>
      <Route path='/myjobs' element={<ProtectedRoutes><Myjobs/></ProtectedRoutes>}/>
      <Route path='/applications/:id' element={<ProtectedRoutes><Applications/></ProtectedRoutes>}/>
    </Routes>
    <Footer/>
    </UserAuthContextProvider>
    
    
    </div>
  );
}

export default App;
