import React, { useEffect, useState } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'


const pagination = (currentPage, nrOfPages) => {
    let delta = 3,
        range = [],
        rangeWithDots = [],
        l;

    range.push(1);

    if (nrOfPages <= 1) {
        return range;
    }

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
        if (i < nrOfPages && i > 1) {
            range.push(i);
        }
    }
    range.push(nrOfPages);

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}

const MoviesPagination = ({ currentPage = 1, total, limit = 30, handler }) => {
    console.log(currentPage);
    const [page, setPage] = useState(currentPage ? +currentPage : 1);
    const [dirty, setDirty] = useState(false);
    const pager = pagination(page, Math.ceil(total / limit));

    const onSelectPage = selectedPage => setPage(selectedPage);

    // useEffect(() => {
    //     handler({ page })
    // }, [page])

    const onPageChange = pageNumber => {
        console.log(pageNumber);
        handler({ page: pageNumber })
        setPage(pageNumber);
    }

    return (
        <Pagination aria-label="Page navigation example">
            {page !== 1 &&
                <>
                    <PaginationItem>
                        <PaginationLink first onClick={() => onPageChange(1)}>
                            <FaAngleDoubleLeft size={10} /> First
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={() => onPageChange(page - 1)}>
                            <FaAngleDoubleLeft size={10} /> Previous
                        </PaginationLink>
                    </PaginationItem>
                </>

            }
            <div className='d-none d-md-flex'>
                {pager && pager.map(a => (
                    <PaginationItem disabled={a === '...'} onClick={() => {
                        if (a !== '...') onPageChange(a);
                    }} active={a === page}>
                        <PaginationLink>{a}</PaginationLink>
                    </PaginationItem>
                ))}
            </div>
            <div className='d-md-none d-flex'>
                <PaginationItem active={true}>
                    <PaginationLink>{page}</PaginationLink>
                </PaginationItem>
            </div>

            {
                page !== pager[pager.length - 1] &&
                <>
                    <PaginationItem>
                        <PaginationLink onClick={() => onPageChange(page + 1)}>
                            <FaAngleDoubleRight size={10} /> Next
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => onPageChange(pager[pager.length - 1])} >
                            <FaAngleDoubleRight size={10} /> Last
                        </PaginationLink>
                    </PaginationItem>
                </>
            }

        </Pagination>
    )
}

export default MoviesPagination
