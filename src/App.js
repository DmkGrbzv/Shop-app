import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import "./style/App.css";
import { useContext } from "react";
import { Context } from "./index";
import { fetchCreateShop } from "./http/shopApi";
import { useEffect } from "react";
export default function App() {
  const { shop } = useContext(Context);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter />
    </BrowserRouter>
  );
}
