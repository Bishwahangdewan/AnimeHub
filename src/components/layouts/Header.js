import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    let location = useLocation();
    const navlink = 'nav-links';
    const yellow = ['nav-links', 'yellow'].join(' ');
    return (
        <div>
            <div className="header-container">
                <div className="container flex space-between">
                    <Link to="/" className="logo">Anime <span className="yellow logo">Hub</span></Link>

                    <nav>
                        <ul className="flex">
                            <li><Link className={location.pathname === '/' ? yellow : navlink} to="/">Home</Link></li>
                            <li><Link className={location.pathname === '/topAnime' ? yellow : navlink} to="/topAnime">Top Anime</Link></li>
                            <li><Link className={location.pathname === '/seasonArchive' ? yellow : navlink} to="/seasonArchive">Season Archive</Link></li>
                            <li><Link className={location.pathname === '/schedule' ? yellow : navlink} to="/schedule">Schedule</Link></li>
                            <li><Link className={location.pathname === '/animeGenre' ? yellow : navlink} to="/animeGenre">Anime Genre</Link></li>
                        </ul>

                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Header;