import React, {Link}from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>

        <div className='bg-dark p-5 '>Sidebar
        
        <div>
        <Link to="/admin/dashboard" className='text-light'>Dashboard</Link>
        </div>
        <div>
        <Link to="/admin/login" className='text-light'>Blog</Link>
        </div>

        <div>
        <Link to="/admin/login" className='text-light'>Leads</Link>
        </div>
        <div>
        </div>
        
        
        
        </div>
       
    </div>
  )
}
