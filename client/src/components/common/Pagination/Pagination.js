import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './Pagination.scss';

class Paginations extends React.Component {

    changePage = (newPage) => {
        const { onPageChange } = this.props;

        onPageChange(newPage);
    };

    render() {
        const { pages, presentPage } = this.props;
        const { changePage } = this;

        return (
            <Pagination aria-label="Page navigation example">

                    {presentPage > 1 &&
                    <PaginationItem>
                        <PaginationLink
                            previous href="#"
                            onClick={() => { changePage(presentPage -1)}}
                            />
                    </PaginationItem>
                    }

                    {[...Array(pages)].map((el, page) =>
                        <PaginationItem
                            key={++page}
                            active={page === presentPage}
                        >
                            <PaginationLink
                                onClick={() => { changePage(page) }}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    )}

                    {presentPage < pages &&
                    <PaginationItem>
                        <PaginationLink
                            next href="#"
                            onClick={() => { changePage(presentPage +1)}}
                        />
                    </PaginationItem>
                    }

            </Pagination>
        );
    }

}

Paginations.propTypes = {
    pages: PropTypes.number.isRequired,
    presentPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
};

export default Paginations;
