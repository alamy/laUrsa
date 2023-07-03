import { clsx } from 'clsx';
import './Paginacao.scss'

export interface PaginacaoProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Paginacao({currentPage, totalPages, onPageChange} :PaginacaoProps) {
    

    const handlePageChange = (page: number) => {
        if (page >= 0 && page <= totalPages) {
          onPageChange(page);
        }
      };
    
      const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 0; i <= totalPages; i++) {
          pageNumbers.push(
            <li
              key={i}
              className={i === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </li>
          );
        }
        return pageNumbers;
      };

    return (
        <ul className="pagination">
            {renderPageNumbers()}
        </ul>
    )
} 