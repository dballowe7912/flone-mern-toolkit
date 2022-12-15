import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Home = lazy(() => import("./pages/Home"));
const ShopGrid = lazy(() => import("./pages/ShopGrid"));
// const Product = lazy(() => import("./pages/shop-product/Product"));
// const About = lazy(() => import("./pages/other/About"));
// const Contact = lazy(() => import("./pages/other/Contact"));
// const MyAccount = lazy(() => import("./pages/other/MyAccount"));
// const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
// const Cart = lazy(() => import("./pages/other/Cart"));
// const Wishlist = lazy(() => import("./pages/other/Wishlist"));
// const Compare = lazy(() => import("./pages/other/Compare"));
// const Checkout = lazy(() => import("./pages/other/Checkout"));
// const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = () => {
  return (
    <Router>
        <Suspense
            fallback={
              <div className="flone-preloader-wrapper">
                <div className="flone-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
        >
            <Routes>
                <Route
                    path={process.env.PUBLIC_URL + "/"}
                    element={<Home/>}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/shop-grid"}
                    element={<ShopGrid/>}
                />
                {/*<Route
                    path={process.env.PUBLIC_URL + "/product/:id"}
                    element={<Product />}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/about"}
                    element={<About/>}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/contact"}
                    element={<Contact/>}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/my-account"}
                    element={<MyAccount/>}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/login-register"}
                    element={<LoginRegister/>}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/cart"}
                    element={<Cart/>}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/wishlist"}
                    element={<Wishlist/>}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/compare"}
                    element={<Compare/>}
                />
                <Route
                    path={process.env.PUBLIC_URL + "/checkout"}
                    element={<Checkout/>}
                /> 
                <Route path="*" element={<NotFound/>} /> */}
            </Routes>
        </Suspense>
    </Router>
  )
}

export default App