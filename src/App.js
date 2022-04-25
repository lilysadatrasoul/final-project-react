import './App.css';
import React,{useState , useEffect} from 'react'
import Navbar from './component/Navbar';
import Home from './Pages/Home.jsx';
import AdSearch from './Pages/AdSearch.jsx';
import About from './Pages/About';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
         
         fetch("https://api.spoonacular.com/recipes/random?number=8&apiKey=0e06877433d94ceb9817016d645ec508")
             .then((res)=>res.json())
             .then((data)=>setProducts(data))
             .catch((error)=>console.log(error))
  
  }, [])
  return (

<BrowserRouter>

<Navbar/>
    <Routes>

          <Route Path="/user/Home" element={<Home/>}/>
          <Route Path="/user/AdSearch" element={<AdSearch/>} />
          <Route Path="/user/About" element={<About/>}/>



    </Routes>

</BrowserRouter>
    
  );
}

export default App;
