import React from 'react'
import { BrowserRouter,Route} from "react-router-dom";
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>

)

export default App