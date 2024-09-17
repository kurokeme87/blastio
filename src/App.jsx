
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Devs from "./pages/Devs";
import Bridge from "./pages/Bridge";
import Airdrop from "./pages/Airdrop";
// import Navbar from "./components/Navbar";

function App() {


  return (
    <div className='App flex text-[#9ba885]  flex-col h-screen w-screen font-geom items-center '>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vision' element={<Vision />} />
        <Route path='/airdrop' element={<Airdrop />} />
        <Route path='/devs' element={<Devs />} />
        <Route path='/bridge' element={<Bridge />} />
      </Routes>
    </div>
  )
}

export default App
