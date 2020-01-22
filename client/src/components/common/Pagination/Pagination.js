import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

class Pagination extends React.Component {

    changePage = (newPage) => {
        const { onPageChange } = this.props;

        onPageChange(newPage);
    };

    render() {
        const { pages, presentPage } = this.props;
        const { changePage } = this;

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {presentPage > 1 &&
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </a>
                        </li>
                    }

                    {[...Array(pages)].map((el, page) =>
                        <li
                            key={++page}
                            className={`page-item pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
                            <a onClick={() => { changePage(page) }} className="page-link" href="#">{page}</a>
                        </li>
                    )}

                    {presentPage < pages &&
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a>
                        </li>
                    }
                </ul>
            </nav>
        );
    }

}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    presentPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
