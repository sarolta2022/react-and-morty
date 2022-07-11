import React from "react";
import styles from "./pagination.module.css";

function Pagination({ currentPage, setCurrentPage, info }) {
  return (
    <div className={styles.Pagination}>
      <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>
        {"<<"}
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {"<"}
      </button>
      <button onClick={() => null}>{currentPage}</button>
      <button
        disabled={currentPage === info.pages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {">"}
      </button>
      <button
        disabled={currentPage === info.pages}
        onClick={() => setCurrentPage(info.pages)}
      >
        {">>"}
      </button>
    </div>
  );
}

export default Pagination;
