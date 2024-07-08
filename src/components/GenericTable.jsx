import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GenericTable = ({
  columns,
  data,
  onRowClick,
  onSort,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    onSort(key, direction);
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === 'ascending' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const renderArrow = (columnKey) => {
    if (!sortConfig || sortConfig.key !== columnKey) return null;
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };

  return (
    <>
      <div>
        <div className='grid grid-cols-8 gap-4 bg-fg-primary-02 text-white text-center items-end pb-2 h-[48px] rounded-tl-[40px] rounded-tr-[40px] mb-2'>
          {columns.map((col) => (
            <div
              key={col.key}
              onClick={() => handleSort(col.key)}
              className='cursor-pointer'
            >
              {col.label} {renderArrow(col.key)}
            </div>
          ))}
        </div>
        {sortedData.map((item, index) => (
          <div
            key={index}
            className='grid grid-cols-8 gap-4 text-center items-end pb-2 hover:bg-fg-primary-02/20 font-light text-sm transition duration-500 hover:scale-[105%] cursor-pointer'
            onClick={() => onRowClick(item)}
          >
            {columns.map((col) => (
              <div
                key={col.key}
                className='h-[60px] flex items-center justify-center'
              >
                {col.key === 'isActive' ? (
                  <span
                    className={`px-2 py-1 rounded-lg text-[12px] ${item[col.key] ? 'bg-green-200' : 'bg-red-200'}`}
                  >
                    {item[col.key] ? 'Active' : 'Inactive'}
                  </span>
                ) : col.key === 'role' ? (
                  <span
                    className={`px-2 py-1 rounded-lg text-[12px] w-[80px] ${item[col.key] === 'ADMIN' ? 'bg-blue-200' : 'bg-fg-primary-03'}`}
                  >
                    {item[col.key] || 'N/A'}
                  </span>
                ) : (
                  item[col.key] || 'N/A'
                )}
              </div>
            ))}
          </div>
        ))}

        <div className='grid grid-cols-8 gap-4 bg-fg-primary-02 text-white text-center items-end pb-2 h-[48px] rounded-bl-[40px] rounded-br-[40px] mb-10'>
          <div className='flex justify-center items-center mt-4 col-span-8'>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
            >
              Previous
            </button>
            <div className='flex mx-2'>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => onPageChange(index + 1)}
                  className={`px-2 py-1 ${currentPage === index + 1 ? 'text-bold' : 'cursor-pointer'}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

GenericTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowClick: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default GenericTable;
