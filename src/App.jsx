import { useState } from "react";
import "./App.css";
import { Home } from "./Pages";
import { Outlet } from "react-router-dom";
import { Footer,Navbar } from "./Components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#EEF7F8]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
