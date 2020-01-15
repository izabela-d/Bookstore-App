import React from 'react';
import MainMenu from '../../layouts/MainMenu/MainMenu';

class NavBar extends React.Component {

    state = {
        links: [
            { path: '/', title: 'Home' },
            { path: '/faq', title: 'FAQ' },
            { path: '/policy', title: 'Policy' },
            { path: '/contact', title: 'Contact' },
            { path: '/cart', title: 'Cart' },
        ],
    };

    render() {
        const { links } = this.state;

        return (
            <nav className={'navbar'}>
                <MainMenu links={links} />
            </nav>
        );
    }

}

export default NavBar;
