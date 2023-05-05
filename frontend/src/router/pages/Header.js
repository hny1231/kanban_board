import React from 'react';
import '../../style/Header.css';

function Header() {
    return (
        <div className='Header'>
            <header className='hheader'>
                <a href="/" >
                    <span>Kanban header</span>
                </a>
                {/* <form role="search">
                    <input type="search" placeholder="Search..." />
                </form> */}
            </header>
        </div>
    );
}

export default Header;