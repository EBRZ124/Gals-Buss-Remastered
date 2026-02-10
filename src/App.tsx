import { Routes, Route } from "react-router-dom";

import { Fragment } from "react/jsx-runtime";
import SarakstsSalaspilsUzRigu from "./components/SarakstsSalaspilsUzRigu";
import SarastsRigaUzSalaspili from "./components/SarakstsRigaUzSalaspili";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import BusRent from "./pages/BusRent";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Salaspils-Riga" element={<SarakstsSalaspilsUzRigu />} />
        <Route path="/Riga-Salaspils" element={<SarastsRigaUzSalaspili />} />

        <Route path="/rent" element={<BusRent />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
