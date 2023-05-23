import React from 'react'
import ReactDOM from 'react-dom/client'
// import Logo from './component/Logo/Logo'
import './index.css'
import Header from './container/Header/header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Logo /> */}
   <Header />
  </React.StrictMode>,
)
