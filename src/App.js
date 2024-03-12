import AllProducts from "./components/AllProducts";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <AllProducts />
      <Outlet />
    </>
  );
}

export default App;
