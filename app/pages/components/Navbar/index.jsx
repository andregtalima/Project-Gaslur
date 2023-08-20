'use client'
import { IconX ,IconMenu2 } from '@tabler/icons-react'
import './Navbar.scss'
import { useState } from 'react'

const Navbar = () => {
    const menu = [
        {name: 'Home', link: '/'},
        {name: 'New', link: '/'},
        {name: 'Popular', link: '/'},
        {name: 'Tredding', link: '/'},
        {name: 'Categories', link: '/'}
    ]
    const [open, setOpen] = useState(false)
    return (
        <header className='header'>
            <div className='menu'>
                <img src="/image/logo.svg" alt="logo da Gaslur" />
            <div onClick={() => setOpen(!open)} className='menu-icons'>
                {open ? <IconX size={50}/> : <IconMenu2 size={50}/>}
            </div>
            </div>
            <nav>
                <ul className={`${open ? 'menu-list-active' : 'menu-list'}`} >
                    {menu.map((item) => (
                        <li key={item.name} className='list-itens'>
                            <a className='list-links' href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>  
            </nav>
        </header>
        
    )
}

export default Navbar