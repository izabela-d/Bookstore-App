import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/policy'>Policy</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/cart'>Cart</Link>
            </div>
        );
    }

}

export default NavBar;
