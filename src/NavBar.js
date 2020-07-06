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
            {/* <li>
                <link to="/article">Articles</link>

            </li>
            <li>
                <link to="/article-list"> Article List</link>
            </li> */}
        </ul>
    </nav>
);

export default NavBar ;