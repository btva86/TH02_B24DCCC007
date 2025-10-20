import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import B1 from "./components/b1";
import B2 from "./components/b2";
import B3 from "./components/b3";
import StudentDetail from "./components/StudentDetail";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Trang chủ</Link>
        <Link to="/b1">Bài 1</Link>
        <Link to="/b2">Bài 2</Link>
        <Link to="/b3">Bài 3</Link>
      </nav>

      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="card">
                <h2>Bài thực hành 02:</h2>
                <ul>
                  <li>Bài 1</li>
                  <li>Bài 2</li>
                  <li>Bài 3</li>
                </ul>
              </div>
            }
          />
          <Route path="/b1" element={<B1 />} />
          <Route path="/b2" element={<B2 />} />
          <Route path="/b3" element={<B3 />} />
          <Route path="/students/:id" element={<StudentDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
