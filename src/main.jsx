import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App' 
import FirstApp from './App'
import Compo from './Compo'
import Ejer from './Ejer'
import {ComponentApp} from './ComponentApp'
import {Chagellen} from './Chagellen'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <FirstApp/>
    <Compo/>
    <Ejer value ={10}/>
    <ComponentApp/>
    <Chagellen/>
  </React.StrictMode>,
)
