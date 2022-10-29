import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Error404 from './Error404';
import Cart from './components/Cart';
import Itemcount from './components/ItemCount';
import ItemListDetail from './components/ItemListDetail';
import { CartContextProvider } from './context/cartContext';

function App() {
  return (
    <div className="App ">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/count' element={<Itemcount/>}/>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemListDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
