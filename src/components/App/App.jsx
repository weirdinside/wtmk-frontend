import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<></>}></Route>
      <Route path="/api" element={<></>}></Route>
    </Routes>
  );
}

export default App;