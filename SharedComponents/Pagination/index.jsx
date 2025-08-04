import { FaChevronLeft, FaChevronRight, FaLeftLong } from "react-icons/fa6";
import Button from "../Button";
import "./index.css";
import { BiChevronRight } from "react-icons/bi";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        <FaChevronLeft />
      </Button>

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        <FaChevronRight />
      </Button>
    </div>
  );
}
