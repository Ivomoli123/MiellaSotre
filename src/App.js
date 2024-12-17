import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Pages/Products';
import Home from './Pages/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"/>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


