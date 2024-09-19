import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Devs from "./pages/Devs";
import Bridge from "./pages/Bridge";
import Airdrop from "./pages/Airdrop";
import Bigbang from "./pages/Bigbang";
import Leaderboard from "./pages/Leaderboard";
// import Navbar from "./components/Navbar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App flex text-[#9ba885]  flex-col h-screen w-screen font-geom items-center ">
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/devs" element={<Devs />} />
            <Route path="/bridge" element={<Bridge />} />
            <Route path="/bigbang" element={<Bigbang />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
