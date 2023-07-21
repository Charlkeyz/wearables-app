import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/home";
import Navbar from "./components/navbar/navbar";


const Shop = () => {
  return(
    <div>This is my shop page</div>
  )
};

const App = () => {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        

      </Routes>
    </div>
  )
}
export default App;

