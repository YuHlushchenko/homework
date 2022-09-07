import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <section>
        <Navigation />
      </section>

      {/* <span>askdjflasdjflasjdf</span> */}

      <Routes>
        {/* <Route path="/aboutUs" element={<Lol />} /> */}
      </Routes>
    </div>
  );
}

export default App;
