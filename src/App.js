import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import AddProduct from './component/AddProduct/AddProduct';
import AllItem from './component/AllItem/AllItem';
import Blogs from './component/Blogs/Blogs';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import MyProducts from './component/MyProducts/MyProducts';
import Navbar from './component/Navbar/Navbar';
import NotFound from './component/NotFound/NotFound';
import RequireAuth from './component/RequireAuth/RequireAuth';
import SignUp from './component/SignUp/SignUp';
import UpdateMyProduct from './component/UpdateMyProduct/UpdateMyProduct';
import UpdateProduct from './component/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/my-products' element={
        <RequireAuth>
          <MyProducts></MyProducts>
        </RequireAuth>
        }></Route>
        <Route path='/allitem' element={
          <RequireAuth>
            <AllItem></AllItem>
          </RequireAuth>}>
        </Route>

        <Route path='/update-product/:id' element={
          <RequireAuth>
            <UpdateProduct></UpdateProduct>
          </RequireAuth>
        }></Route>

        <Route path='/update-my-product/:id' element={
          <RequireAuth>
            <UpdateMyProduct></UpdateMyProduct>
          </RequireAuth>
        }></Route>

        <Route path='/add-product' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
