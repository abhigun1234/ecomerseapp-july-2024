import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from './Home';
import ContectUs from './ContectUs';
import NoPage from './NoPage';
import Header from './Header';

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
      <BrowserRouter>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element={<ContectUs></ContectUs>}></Route>
        <Route path='*' element={<NoPage></NoPage>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
