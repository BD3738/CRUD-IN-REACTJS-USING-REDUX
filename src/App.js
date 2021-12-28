import "./App.css";
import Navbar from "./Component/Navbar";
import AddData from "./Component/AddData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import EditData from "./Component/EditData";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/adduser" element={<AddData />} />
          <Route path="/edituser/:id" element={<EditData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
