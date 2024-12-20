
import {Routes,Route} from 'react-router-dom'
import ImageSlides from './components/ImageSlides'
import ShowData from './ShowData'
function AppRoutes() {
  return (
    <div>
     <Routes>

        <Route path='/' element={<ImageSlides/>} />
        <Route path="/weather" element={<ShowData/>}/>
     </Routes>
    </div>
  )
}

export default AppRoutes
