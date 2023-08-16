import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Paginate({ setOffset, itemsPerPage, offset }) {
  const [currentPage, setCurrentPage] = React.useState(0);

  const prevPage = () => {
    if (currentPage > 0) {
      setOffset(offset - itemsPerPage);
      setCurrentPage(currentPage - 1);
    } else {
      return;
    }
  };

  const nextPage = () => {
    if (currentPage >= 0) {
      setOffset(offset + itemsPerPage);
      setCurrentPage(currentPage + 1);
    } else {
      return;
    }
  };

  return (
    <div>
      <nav className="isolate flex justify-between -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <button
          type="button"
          className="relative inline-flex w-fit items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          onClick={() => prevPage()}
        >
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          <span className="">Previous</span>
        </button>

        <button
          type="button"
          className="relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 w-fit"
          onClick={() => nextPage()}
        >
          <span className="">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
}

export default Paginate;
