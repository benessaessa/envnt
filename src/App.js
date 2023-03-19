import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from './pages/Users';
import AOS from "aos";
import "aos/dist/aos.css";
import Success from './components/Success';
function App() {
  AOS.init();
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
