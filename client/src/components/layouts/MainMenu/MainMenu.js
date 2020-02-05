import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './MainMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MainMenu = ({ links, location }) => (
    <ul className="main-menu">
        { links.map((link, index) =>
            <li key={index}>
                <Link className={(location.pathname === link.path && 'active') || ''} to={link.path}>
                    {link.title}
                    {link.icon &&
                    <i>
                        <FontAwesomeIcon icon={link.icon}/>
                    </i>
                    }
                </Link>
            </li>
        )}
    </ul>
);

MainMenu.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string,
        icon: PropTypes.object,
    })),
};

export default withRouter(props => <MainMenu {...props}/>);
