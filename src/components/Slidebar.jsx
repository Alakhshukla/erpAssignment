import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
const Slidebar = () => {
  return (
    <div className='sidebar d-flex flex-column bg-dark text-white p-4 justify-content-space-between'>
        <div>
        <a href="d-flex align-items-center">
            <i className='bi bi bootstrap fs-5 me-2'></i>
            <span className='fs-4'>Sidebar</span>
        </a>
        <hr className='text-secondary mt-2' />
        <ul className='nav nav-pills flex-column p-0 me-2'>
            <li className='nav-item'>
                <Link to= "/" className='nav-link text-white'>
                    <i className='bi bi speedometer me-2 fs-5 '></i>
                    <span className='fs-5'>Dashboard</span>
                </Link>
            </li>

            <li className='nav-item'>
                <Link to= "Order" className='nav-link text-white'>
                    <i className='bi bi speedometer me-2 fs-5'></i>
                    <span className='fs-5'>Products and orders</span>
                </Link>
            </li>

            <li className='nav-item'>
                <Link to= "Customer"className='nav-link text-white'>
                    <i className='bi bi speedometer me-2 fs-5'></i>
                    <span className='fs-5'>Add Items</span>
                </Link>
            </li>

            <li className='nav-item'>
                <Link to= "Calender" className='nav-link text-white'>
                    <i className='bi bi speedometer me-2 fs-5'></i>
                    <span className='fs-5'> Shipping Calender</span>
                </Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Slidebar