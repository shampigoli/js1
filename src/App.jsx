import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home';
import Signin from './pages/signin';
import './App.css'
import Create from './pages/create';
import Forgot from './pages/forgot';
import Getstarted from './pages/getstarted';
import Member from './pages/member';
import Leave from './pages/leave';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/member" element={<Member />} />
        <Route path="/leave" element={<Leave />} />
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
