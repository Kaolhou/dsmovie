import Listing from './pages/Listing'
import Form from './pages/Form'
import {Route, Routes} from 'react-router-dom'

function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Listing />} />
            <Route path='/form'>
                <Route path=':movieId' element={<Form />} />
            </Route>
            <Route path='*' element={<h1>ERR 404</h1>} />
        </Routes>
    )
}
export default MainRoutes