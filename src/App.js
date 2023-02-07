import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bg-white sticky top-0 bg-opacity-80 py-4 mb-4 z-50 ">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
