import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import WomenCategories from "./components/women/WomenCategories";
import SignIn from "./components/account/SignIn";
import SignUp from "./components/account/SignUp";
import Account from "./components/account/Account";
import ProductMen from "./components/productPage/ProductMen";
import ProductWomen from "./components/productPage/ProductWomen";
import Jeans from "./components/productPage/Jeans";
import Activewear from "./components/productPage/Activewear";
import Sale from "./components/productPage/Sale";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all pages to include Header and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="womencategories" element={<WomenCategories />} />
          <Route path="productmen" element={<ProductMen />} />
          <Route path="productwomen" element={<ProductWomen />} />
          <Route path="jeans" element={<Jeans />} />
          <Route path="activewear" element={<Activewear />} />
          <Route path="sale" element={<Sale />} />
          <Route path="account" element={<Account />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
