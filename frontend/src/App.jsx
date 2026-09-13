import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './common/Login'
import Signup from './common/Signup'
import Landing from './common/Landing'
import Rough from './common/Rough'
import Homepage from './user/Homepage'
import BlogCreate from './user/BlogCreate'
import Feed from './user/Feed'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      {/* common routes */}
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>




      <Route path='/rough' element={<Rough/>}/>

      {/* user routes */}
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/create' element={<BlogCreate/>}/>
      <Route path='/feed' element={<Feed/>}/>



    </Routes>
    </BrowserRouter>
  )
}

export default App
