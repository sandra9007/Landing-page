import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MotoMall from "./pages/MotoMall";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MotoMall />} />
      </Routes>
    </Router>
  );
}

export default App;
