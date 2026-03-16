import {Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/rooms" element={<Rooms />}></Route>
      <Route path="/rooms/chat" element={<Chat />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  )
}

export default App
