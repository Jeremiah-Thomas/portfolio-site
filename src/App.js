import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import WorkOrder from "./components/WorkOrder/WorkOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/work-order" element={<WorkOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
