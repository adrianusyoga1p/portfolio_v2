import { func, number, string } from 'prop-types';
import { usePagination, DOTS } from '../hooks/usePagination';
import { Icon } from '@iconify/react';
import classNames from 'classnames';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  Pagination.propTypes = {
    onPageChange: func,
    totalCount: number,
    siblingCount: number,
    currentPage: number,
    pageSize: number,
    className: string,
  }

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={classNames('flex items-center gap-2 justify-center mt-6', { [className]: className })}
    >
      <li
        className={`${currentPage === 1 ? 'pointer-events-none opacity-40' : 'cursor-pointer'}`}
        onClick={onPrevious}
      >
        <Icon icon='uil:angle-left'></Icon>
      </li>
      {paginationRange.map((pageNumber, id) => {
        if (pageNumber === DOTS) {
          return <li key={id} className="pagination-item dots">&#8230;</li>;
        }
        return (
          <li key={id}
            className={`flex items-center justify-center w-8 h-8 rounded-full text-dark hover:bg-primary hover:text-white cursor-pointer
              ${pageNumber === currentPage ? 'bg-primary text-white' : ''}
            `}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`
        ${currentPage === lastPage ? 'pointer-events-none opacity-40' : 'cursor-pointer'}
        `}
        onClick={onNext}
      >
        <Icon icon='uil:angle-right'></Icon>
      </li>
    </ul>
  );
};

export default Pagination;
//   const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//     className
//   } = props;

//   Pagination.propTypes = {
//     onPageChange: number,
//     totalCount: number,
//     siblingCount: number,
//     currentPage: number,
//     pageSize: number,
//     className: string,
//   }

//   const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize
//   });

//   if (currentPage === 0 || paginationRange.length < 2) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   let lastPage = paginationRange[paginationRange.length - 1];

//   return (
//     <ul className={classNames('flex gap-3 items-center', { [className]: className })}>
//       <li
//         className={classNames('w-10 h-10 rounded-full bg-primary/20 text-primary', {
//           disabled: currentPage === 1
//         })}
//         onClick={onPrevious}
//       >
//         <Icon icon='uil:angle-left'/>
//       </li>
//       {paginationRange.map((pageNumber, id) => {
//         if (pageNumber === DOTS) {
//           return <li className='px-2' key={id}>&#8230;</li>
//         }

//         return (
//           <li
//             key={id}
//             className={classNames('w-10 h-10 rounded-full bg-primary/20 text-primary', {
//               selected: pageNumber === currentPage
//             })}
//             onClick={() => onPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </li>
//         );
//       })}
//       <li
//         className={classNames('w-10 h-10 rounded-full bg-primary/20 text-primary', {
//           disabled: currentPage === lastPage
//         })}
//         onClick={onNext}
//       >
//         <Icon icon='uil:angle-right'/>
//       </li>
//     </ul>
//   )
// }

// export default Pagination