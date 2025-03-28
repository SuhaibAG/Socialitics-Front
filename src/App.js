import Home from "./pages/HomePages/Home";
import Dashboard from "./pages/DashboardPages/Dashboard";
import NoPage from "./pages/NoPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/HomePages/Login'
import { UserProvider } from "./userhandlers/UserProvider";
import Register from "./pages/HomePages/Register";
import CallbackX from "./SocialMediaConnections/XCallBack";
import FacebookCallBack from "./SocialMediaConnections/FacebookCallBack";
import InstagramCallBack from "./SocialMediaConnections/InstagramCallBack";
import TOS from "./pages/HomePages/TOS";
import Privacy from "./pages/HomePages/Privacy";


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
          <Route path="/tos" element={<TOS />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/auth/callback" element={<CallbackX/>} />  
          <Route path="/auth/callback/facebook" element={<FacebookCallBack/>} />
          <Route path="/auth/callback/instagram" element={<InstagramCallBack/>} />
          <Route path="/auth/callback/tiktok" element={<InstagramCallBack/>} />
          <Route path="*" element={<NoPage/>} />


        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div> 
  );
}

export default App;
