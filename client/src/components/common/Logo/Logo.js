import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './Logo.scss';

const Logo = () => (
    <div className={'logo'}>
        <FontAwesomeIcon icon={ faBook } />
        <p className={'title-logo'}>Bookstore</p>
    </div>
);

export default Logo;
