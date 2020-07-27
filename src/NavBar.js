/*
    Navbar for our blog app
    {Link } has been imported Link takes a prop 'to' <a> tag donot work
*/

import React from 'react';
import  {Link} from 'react-router-dom' ;

const NavBar = () =>(
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>

            </li>
            <li>
                <Link to="/articles">Articles</Link>

            </li>
            <li>
                <Link to="/articles-list"> Article List</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar ;