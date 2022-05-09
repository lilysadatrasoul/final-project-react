import './App.css';
import Navbar from './component/Navbar';
import Home from './Pages/Home';
import AdSearch from './Pages/AdSearch.jsx';
import About from './Pages/About.jsx';
import Login from './Pages/Login.jsx';
import SingUp from './Pages/SingUp.jsx';
import { BrowserRouter, Routes,Route} from 'react-router-dom';


function App() {
  
  return (

<BrowserRouter>
<Navbar/>
    <Routes>
          <Route path="/user/home" element={<Home/>}/>
          <Route path="/user/AdSearch" element={<AdSearch/>}/>
          <Route path="/user/About" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Singup" element={<SingUp/>}/>
    </Routes>  
</BrowserRouter>  
  );
}

export default App;




