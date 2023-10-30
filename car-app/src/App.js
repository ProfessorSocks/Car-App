import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavbarMain from './components/NavbarMain';
import Forums from './components/Forums';
import Profile from './components/Profile';

function App() {

  

  return (
    <div>
      <NavbarMain/>
      <Routes>
        <Route path='/' element={<Home  />}/>
        <Route path='/forum' element={<Forums/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
