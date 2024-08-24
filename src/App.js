import './App.css';
import Navbar from './components/Navbar';
import Home from './bagian/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './bagian/Contact';
import Service from './bagian/Service';
import About from './bagian/About';
import Photoshoot from './Photoshoot/photoshoot';
import CollegePhotoshoot from './PhotoshootData/collegePhoto';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About/>}/>
        <Route path='/photoshoot' element={<Photoshoot/>}/>
        <Route path='/college-photoshoot-data' element={<CollegePhotoshoot/>} />
      </Routes>
    </div>
  );
}

export default App;