import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './assets/css/bootstrap.min.css';
import './assets/font-awesome/css/font-awesome.css'
import './assets/css/animate.css'
import './assets/css/style.css'
//Scripts
import './assets/js/jquery-3.1.1.min.js'
import './assets/js/bootstrap.min.js'
import './assets/js/plugins/metisMenu/jquery.metisMenu.js'
import './assets/js/plugins/slimscroll/jquery.slimscroll.min.js'

//plugin
import './assets/js/inspinia.js'
import './assets/js/plugins/pace/pace.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)