import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Home = lazy(() => import("./pages/Home"))
const ShopGrid = lazy(() => import("./pages/ShopGrid"))
const Product = lazy(() => import("./pages/Product"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const MyAccount = lazy(() => import("./pages/MyAccount"))
const LoginRegister = lazy(() => import("./pages/LoginRegister"))
const Cart = lazy(() => import("./pages/Cart"))
const Wishlist = lazy(() => import("./pages/Wishlist"))
const Compare = lazy(() => import("./pages/Compare"))
const Checkout = lazy(() => import("./pages/Checkout"))
const CreateProduct = lazy(() => import("./pages/CreateProduct"))
const ProductListPage = lazy(() => import("./pages/ProductListPage"))
const NotFound = lazy(() => import("./pages/NotFound"))

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
                <Route
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
                <Route
                    path={process.env.PUBLIC_URL + "/admin/create-product"}
                    element={<CreateProduct/>}
                /> 
                <Route
                    path={process.env.PUBLIC_URL + '/admin/productlist'}
                    element={<ProductListPage />}
                    exact
                />
                
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Suspense>
        <ToastContainer />
    </Router>
  )
}

export default App