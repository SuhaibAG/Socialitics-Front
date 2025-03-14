import Home from "./pages/HomePages/Home";
import Dashboard from "./pages/DashboardPages/Dashboard";
import NoPage from "./pages/NoPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/HomePages/Login'
import { UserProvider } from "./userhandlers/UserProvider";
import Register from "./pages/HomePages/Register";

function App() {
  return (
    <div className="App">
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div> 
  );
}

export default App;
