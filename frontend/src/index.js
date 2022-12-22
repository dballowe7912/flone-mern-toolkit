import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import 'animate.css'
import 'swiper/swiper-bundle.min.css'
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import "./assets/scss/style.scss"


import { fetchProducts } from "./features/product/product-slice"

store.dispatch(fetchProducts())

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Provider store={store}>
      <App />
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
