import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import Cart from "./components/cart/Cart";
import ProductWomenItems from "./components/productPage/ProductWomenItems"
import ProductDetail from "./components/productPage/ProductDetail"
import MyList from "./components/mylist/MyList";
import CartButton from "./components/cart/CartButton";
import { useState } from "react";

const App = () => {
  const colors = ["#F5F5DC", "#bb7f71", "#050505", "#8391ce"];
  const sizes = ["XS", "S", "M", "L", "XL"];

 

  return (
    <BrowserRouter>
    
      <Routes>
        {/* Layout wraps all pages to include Header and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="womencategories" element={<WomenCategories />} />
          <Route path="productmen" element={<ProductMen />} />
          <Route path="productwomen" element={<ProductWomen />} />
          <Route
            path="/product/:id"
            element={<ProductDetail colors={colors} sizes={sizes} quantities={Array.from({ length: 10 }, (_, index) => index + 1)} />}
          />

          <Route path="jeans" element={<Jeans />} />
          <Route path="activewear" element={<Activewear />} />
          <Route path="sale" element={<Sale />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cartbutton" element={<CartButton />} />
          <Route path="mylist" element={<MyList />} />
          <Route path="account" element={<Account />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
