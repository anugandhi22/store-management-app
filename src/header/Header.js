import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className=' d-flex justify-content-around'>
      <div className="w-20">
        <h1 className='text-white'>Store Management App     <i class="bi bi-shop"></i>
        </h1> 
        </div>
        <div className=' mt-2'>
        <Link className='btn btn-light me-5' to={'/add'}>Add Product</Link>
            <Link className='btn btn-light' to={'/view'}>View Product</Link>
              
        </div>
    </nav>
  )
}

export default Header