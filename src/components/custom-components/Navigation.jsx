import React from 'react'
import { navLinks } from '../statics/Static';
import {NavLink, Link} from "react-router-dom"
import {Search} from "lucide-react"
const Navigation = () => {
  return (
    <div className='h-14 mb-2 p-2 flex items-center justify-between'>
        <div className="">
            <h1 className='text-3xl font-bold'>Cresent</h1>
        </div>
        <div className=" flex gap-4">
            {navLinks.map((link) =>(
                <ul key={link.id}>
                    <li><NavLink to={link.to} >{link.title}</NavLink></li>
                </ul>
            ))}
        </div>

        <div className="flex items-center p-2">
            
            <Search className='' width={20} />

            
            <Link to="/signup" className='pl-2'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Navigation