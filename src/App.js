import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/signup' element={<SignUp></SignUp>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
