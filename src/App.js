import './App.css'

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageS = 20

  const [progress, setProgress] = useState(0)
  return (
    <>
      <div>
        {/*  <Navbar/> */}
        {/* <News  setProgress={setProgress}  setProgress{setProgress}pageSize={pageS} country="us" category="business"/> */}
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News  setProgress={setProgress} key="general" pageSize={pageS} country="us" category="general" />} />
            <Route exact path="/business" element={<News  setProgress={setProgress} key="business" pageSize={pageS} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News  setProgress={setProgress} key="entertainment" pageSize={pageS} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News  setProgress={setProgress} key="general" pageSize={pageS} country="us" category="general" />} />
            <Route exact path="/health" element={<News  setProgress={setProgress} key="health" pageSize={pageS} country="us" category="health" />} />
            <Route exact path="/science" element={<News  setProgress={setProgress} key="science" pageSize={pageS} country="us" category="science" />} />
            <Route exact path="/sports" element={<News  setProgress={setProgress} key="sports" pageSize={pageS} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News  setProgress={setProgress} key="technology" pageSize={pageS} country="us" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )

}
export default App;