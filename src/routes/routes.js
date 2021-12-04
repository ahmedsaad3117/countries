import { Route, Routes } from "react-router-dom";
import Countries from "../pages/countries/countries";
import Home from "../pages/home/home";
import TableCountry from "../pages/tablescantry/tableCountry";
import TableRanking from "../pages/tableranking/tableRanking";

export function Routess() {
  return (
    <>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/countries" element={<Countries />} />
        <Route exact path="/country/:id" element={<TableCountry />} />
        <Route exact path="/ranking/:id" element={<TableRanking />} />
      </Routes>
    </>
  );
}
