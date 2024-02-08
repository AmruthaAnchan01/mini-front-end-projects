import React from 'react'
import NavBar from './component/NavBar'
import Slide from './component/Slide'
import Video from './component/Video'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Watch from './component/Watch'
import { Provider } from 'react-redux'
import store from './utils/store'
// import Slidemin from './component/Slidemin'

function App() {
  return (
    <Provider store={store}>

    <div>
      <NavBar/>
      <div className='flex gap-20'>
        <Slide/>
        {/* <Slidemin/> */}
        <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Video/>}/>
          <Route path='/watch'element={<Watch/>}/>
        </Routes>
        </BrowserRouter>
     
      </div>
    </div>
    </Provider>
  )
}

export default App