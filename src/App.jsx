import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Purchase from "./Purchase";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </Router>
  );
}

export default App;
