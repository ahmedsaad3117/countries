import { Route, Routes } from "react-router-dom";
import Countries from "../pages/countries/countries";
import Home from "../pages/home/home";

export function Routess() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </>
  );
}
