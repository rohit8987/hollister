import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import WomenCategories from "./components/women/WomenCategories";
import SignIn from "./components/account/SignIn";
import SignUp from "./components/account/SignUp";
import Account from "./components/account/Account";



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/womencategories" element = {<WomenCategories/>}/>
        <Route path="/account" element = {<Account/>}/>
        <Route path="/signin" element = {<SignIn/>}/>
        <Route path="/signup" element = {<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
