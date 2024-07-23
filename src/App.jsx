import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./Components";

function App() {
  return (
<<<<<<< HEAD
    <>
      <div className="bg-[#EEF7F8]">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
=======
    <div className="bg-[#EEF7F8]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
>>>>>>> d2dbde0fcee90a8edf89c032a3d5c530a6d07575
  );
}

export default App;
