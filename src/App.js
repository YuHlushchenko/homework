import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Contacts from './pages/Contacts';


function App() {
  return (
    <div className="App">
      <section>
        <Navigation />
      </section>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </div>
  );
}

export default App;
