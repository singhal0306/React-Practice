import { Route, Routes } from 'react-router-dom'

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path='/' exact element={<Home/>} />  
        <Route path='/welcome' element={<Welcome />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:productId' element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;