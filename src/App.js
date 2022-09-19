import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <section>
        <Navigation />
      </section>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
