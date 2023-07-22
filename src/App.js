import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/home";
import Navbar from "./components/navbar/navbar";
import SignIn from "./pages/sign-in page/sign-in";


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
        <Route path="/sign-in" element={<SignIn/>}/>

        

      </Routes>
    </div>
  )
}
export default App;

