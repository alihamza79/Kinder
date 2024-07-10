import React from 'react'

//Libraries
import { Link } from "react-router-dom"
import PropTypes from "prop-types";

const Pagination = ({ paginate, currentPage, totalBlogs, blogsPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination pagination-style-01 font-sans font-medium items-center">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <Link aria-label="link" className="page-link" to="#" onClick={() => paginate(currentPage - 1)}>
          <i className="feather-arrow-left text-lg"></i>
        </Link>
      </li>
      {pageNumbers.map(number => (
        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
          <Link aria-label="link" onClick={() => paginate(number)} to="#" className="page-link">
            {number}
          </Link>
        </li>
      ))}
      <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
        <Link aria-label="link" className="page-link" to="#" onClick={() => paginate(currentPage + 1)}>
          <i className="feather-arrow-right text-lg"></i>
        </Link>
      </li>
    </ul>
  )
}

Pagination.propTypes = {
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalBlogs: PropTypes.number.isRequired,
  blogsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
