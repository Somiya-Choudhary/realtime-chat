import {Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Rooms from "./components/Rooms";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/rooms" element={<Rooms />}></Route>
    </Routes>
  )
}

export default App
