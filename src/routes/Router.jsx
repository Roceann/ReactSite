import { Routes, Route } from "react-router";
import Home from "../Pages/Home/Home";
import FetchAnimals from "../components/FetchAnimals/FetchAnimals";
import Contact from "../Pages/Contact/Contact";
import Page404 from "../Pages/404Page/404Page";
import PrivateRoute from "./PrivateRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chien" element={<PrivateRoute><FetchAnimals /></PrivateRoute>} />
      <Route path="/contact" element={<Contact />}/>
      <Route path="*" element={<Page404 />}  />
    </Routes>
  );
}
