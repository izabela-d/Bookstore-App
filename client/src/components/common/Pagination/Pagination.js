import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import './Pagination.scss';

class Pagination extends React.Component {

    changePage = (newPage) => {
        const { onPageChange } = this.props;

        onPageChange(newPage);
    };

    render() {
        const { pages, presentPage } = this.props;
        const { changePage } = this;

        return (
            <div className="pagination">
                <ul className="pagination__list">

                    {presentPage > 1 &&
                    <li
                        onClick={() => { changePage(presentPage -1)}}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </li>
                    }

                    {[...Array(pages)].map((el, page) =>
                        <li
                            key={++page}
                            onClick={() => { changePage(page) }}
                            className={`pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
                            {page}
                        </li>
                    )}

                    {presentPage < pages &&
                    <li
                        onClick={() => { changePage(presentPage +1)}}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                    }

                </ul>
            </div>
        );
    }

}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    presentPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
