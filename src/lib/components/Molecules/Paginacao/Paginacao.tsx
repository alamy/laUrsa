import { clsx } from 'clsx';
import './Paginacao.scss'
import { Left } from '../../Icon/System/Left';
import { Right } from '../../Icon/System/Right';
import { useState } from 'react';

export interface PaginacaoProps {
    currentPage: number;
    totalPages: number;
  
    onPageChange: (page: number) => void;
}

export function Paginacao({currentPage, totalPages, onPageChange,} :PaginacaoProps) {

  const [currentPageNow, setCurrentPageNow] = useState(currentPage)
    
console.log(currentPageNow)
    const handlePageChange = (page: number) => {
        if (page >= 0 && page <= totalPages) {
          onPageChange(page);
        }
      };
    
      const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 0; i <= totalPages; i++) {
           if(i <= 5){
            pageNumbers.push(
              <li
                key={i}
                className={i === currentPageNow ? 'active' : ''}
                onClick={() => handlePageChange(i)}
              >
                {i}
              </li>
            );
           }
         
        }
        return pageNumbers;
      };

    return (
        <ul className="pagination">
          <li onClick={() => {setCurrentPageNow(currentPage--)}}>
            <Left />
          </li>

          
            {renderPageNumbers()} 
            {totalPages > 5 ?
            <>
              <li>
              . . .
              </li>
              <li 
                className={totalPages === currentPageNow ? 'active' : ''}
                onClick={() => handlePageChange(totalPages)}>
              {totalPages}  
              </li>
            </>
            : '  '} 

{/* {currentPage > 10 ? 'dfsdf ' : ' teste'

} */}
            <li onClick={() => {setCurrentPageNow(currentPage++)}}>
              <Right />
            </li>
            
        </ul>
    )
} 