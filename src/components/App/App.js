import './App.css';
import {Route, Routes} from "react-router";
import Layout from "../../router/Layout";
import ShopsPage from "../../pages/ShopsPage";
import NotfoundPage from "../../pages/NotfoundPage";
import CartPage from "../../pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route index element={<ShopsPage/>}/>
        <Route path={"cart"} element={<CartPage/>}/>
        <Route path={"*"} element={<NotfoundPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
