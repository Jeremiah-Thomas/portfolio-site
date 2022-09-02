import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import WorkOrder from "./components/WorkOrder/WorkOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/work-order" element={<WorkOrder />} />
          <Route path="/login" element={<AdminLogin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
