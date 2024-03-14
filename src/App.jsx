
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Slidebar from './components/Slidebar';
import Dashboard from './components/Dashboard';
import Order from './components/Order';
import Customer from './Customer';
import Calender from './components/Calender';
function App() {
  

  return (
    <BrowserRouter>
    <div className='d-flex'>
      <div className='col-auto'>
      <Slidebar />
    </div>
    <div>
      <Routes>
         <Route path='/' element={<Dashboard />}></Route>
        <Route path='/Order' element={<Order />}></Route> 
        <Route path='/Customer' element={<Customer />}></Route>
        <Route path='/Calender' element={<Calender />}></Route>
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App



