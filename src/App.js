import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartScreen } from './components/CartScreen/CartScreen';
import { Checkout } from './components/Checkout/Checkout';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <CartProvider>
      <div className='App'>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartScreen/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
