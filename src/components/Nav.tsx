import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    const [active, setActive] = useState(false)
    return (
        <div className="flex p-2 justify-between max-w-1/2">
            <NavLink to='/all'>All Todos</NavLink>
            <NavLink to='/all/home'>Home</NavLink>
            <NavLink to='/office'>The Gym</NavLink>
        </div >)
}

export default Nav