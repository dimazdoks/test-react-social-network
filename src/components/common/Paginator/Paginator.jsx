import React, {useEffect, useState} from "react";
import style from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, setCurrentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rigthPortionPageNumber = portionNumber * portionSize;

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize));
    }, [currentPage]);

    return (
        <div>

            {/* draw button PREV */}
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}


            {/* draw pages */}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
                .map(p => <span className={style.pagination + ' ' + (currentPage === p && style.selectedPage)}
                                onClick={(e) => setCurrentPage(p)}>{p}</span>
                )}


            {/* draw button NEXT */}
            {portionNumber < portionCount &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}

        </div>
    );
};

export default Paginator;