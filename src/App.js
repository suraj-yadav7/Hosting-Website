import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
<>
<Router>
<Header />
<Routes>
<Route exact path="/" element={<Home/>} />
<Route exact path='/contact' element={<Contact/>} />
</Routes>
<Footer />
</Router>
</>
  );
}

export default App;
