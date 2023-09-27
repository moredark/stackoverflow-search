import { useCallback } from "react";
import Arrow from "./UI/Arrow";
import PaginationButton from "./UI/PaginationButton";
import Select from "./UI/Select";

function TableParams({ currentPage, setCurrentPage, setSortParams, has_more }) {
  const handlePaginateNext = useCallback(() => {
    if (has_more) {
      setCurrentPage((page) => page + 1);
    }
  }, [currentPage]);

  const handlePaginatePrev = useCallback(() => {
    if (currentPage !== 1) {
      setCurrentPage((page) => page - 1);
    }
  }, [currentPage]);

  return (
    <div className="mb-3 flex justify-between">
      <PaginationButton onClick={handlePaginatePrev} variant="prev" />
      <div className="flex gap-1 text-gray-800">
        <Select setSortParams={setSortParams} />
        <div className="flex gap-1 ml-2">
          <Arrow setSortParams={setSortParams} variant="up" />
          <Arrow setSortParams={setSortParams} variant="down" />
        </div>
      </div>

      <PaginationButton onClick={handlePaginateNext} variant="next" />
    </div>
  );
}

export default TableParams;
