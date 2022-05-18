import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './component/AddProduct/AddProduct';
import AllItem from './component/AllItem/AllItem';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
import RequireAuth from './component/RequireAuth/RequireAuth';
import SignUp from './component/SignUp/SignUp';
import UpdateProduct from './component/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/allitem' element={
          <RequireAuth>
            <AllItem></AllItem>
          </RequireAuth>}>
        </Route>
        <Route path='/update-product/:id' element={
         
            <UpdateProduct></UpdateProduct>
          
        }></Route>
        <Route path='/add-product' element={<AddProduct></AddProduct>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
