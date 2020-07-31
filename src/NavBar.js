/*
    Navbar for our blog app
    {Link } has been imported Link takes a prop 'to' <a> tag donot work
*/

import React from 'react';
import  {Link} from 'react-router-dom' ;

const NavBar = () =>(
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" >
        <ul className="navbar-nav" >
            <li className="nav-link" >
                <Link className='dark-link' to="/">Home</Link>
            </li>
            <li className="nav-link">
                <Link to="/about">About</Link>

            </li>
            <li className="nav-link">
                <Link to="/articles-list"> Articles</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar ;