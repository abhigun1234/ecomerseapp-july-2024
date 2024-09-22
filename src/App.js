import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from './Home';
import ContectUs from './ContectUs';
import NoPage from './NoPage';
import Header from './Header';
import AddPosts from './Addposts';
import AddProduct from './AddProduct';
import Headers from './Headers';
import DashBoard from './DashBoard';
import MyHeader from './MyHeader';
import MyDashBoard from './MyDashBoard';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
 
     {/* <BrowserRouter>
     <Header></Header>
        <Routes>
        <Route path="/" element ={<Home></Home>} />
        <Route path="/about" element ={<AboutUs></AboutUs>} />
        <Route path="*" element={<NoPage />} />
        </Routes>
     
      </BrowserRouter> */}
      {/* <BrowserRouter>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element={<ContectUs></ContectUs>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='*' element={<NoPage></NoPage>}></Route>
      </Routes>
      </BrowserRouter> */}
        {/* <BrowserRouter>
        <Headers></Headers>
        <Routes>
          <Route path='/' element={<DashBoard></DashBoard>}>

          </Route>
          <Route path='/about' element={<AboutUs></AboutUs>}></Route>
          <Route path='/post' element={<AddPosts></AddPosts>}></Route>
        </Routes>
        </BrowserRouter> */}
        <BrowserRouter>
        <MyHeader></MyHeader>
        <Routes>

          <Route path='/' element={<MyDashBoard></MyDashBoard>}></Route>
          <Route path='/product' element={<ProductList></ProductList>}></Route>
          <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
