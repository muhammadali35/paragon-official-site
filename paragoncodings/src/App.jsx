import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Component/Pages/home'
function App() {
 

  return (
    <Fragment>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>
    </Router>


    </Fragment>
  )
}

export default App






