import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './Header'
import './index.css'
import Main from './Main'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
)
