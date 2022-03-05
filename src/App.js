import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import VmUi from './component/VM_UI/VmUi'
import LandingPage from './component/LandingPage/LandingPage'
import HNI_UI from './component/HNI_UI/HNI_UI'
import Header from './component/Header/Header'


const App = () => {
  
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' exact element={<LandingPage/>}></Route>
          <Route path='/VmDashboard' exact element={<VmUi/>}></Route>
          <Route path='/HniDashboard' exact element={<HNI_UI/>}></Route>
        </Routes>
    </BrowserRouter>  
  )
}

export default App
