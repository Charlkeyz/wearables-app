import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/home";
import Navbar from "./components/navbar/navbar";
import SignInAndSignUpPage from "./pages/Sign-Form page/sign-in-and-sign-up";




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
        <Route path="/sign-in" element={<SignInAndSignUpPage/>}/>

        

      </Routes>
    </div>
  )
}
export default App;

