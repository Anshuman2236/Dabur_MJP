import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HomeTest from "./pages/HomeTest";
import ListMjpDsr from "./pages/ListMjpDsr";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeTest />} />
        <Route path="/listmjpdsr" element={<ListMjpDsr />} />
        <Route path="/listattendance" element={<ListMjpDsr/>}/>
      </Routes>
      <footer className="container-fluid text-center mt-4">
        <p>&copy; 2018 Dabur India Ltd. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
