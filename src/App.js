import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
    <Route path='/home' element={<Home></Home>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
