import { useState } from "react";
import { useSearchAnswersQuery } from "../store/stackoverflow/stackoverflow.api";
import { useDebounce } from "../hooks/useDebounce";
import Table from "../components/Table";
import Loader from "../components/Loader";
import SearchInput from "../components/SearchInput";
import TableParams from "../components/TableParams";

function Home() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortParams, setSortParams] = useState({ sort: "relevance", order: "desc" });
  const debounced = useDebounce(search);
  const { isLoading, isError, isFetching, data } = useSearchAnswersQuery(
    { search: debounced, page: currentPage, sortParams },
    { skip: debounced.length < 3 }
  );

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl mb-6 text-center">
        stack<b>overflow</b> search
      </h2>
      <SearchInput search={search} setSearch={setSearch} />
      <div className="container mt-5 flex flex-col justify-center items-center">
        {isLoading && <Loader />}

        {isError && <h2 className="errorText">Что-то пошло не так...</h2>}

        {data && data.items.length === 0 && search.length !== 0 && <h2 className="text-center text-3xl">Ничего не найдено</h2>}

        {data && data.items.length !== 0 && search.length !== 0 && (
          <div className="px-4 mt-5">
            <TableParams currentPage={currentPage} setCurrentPage={setCurrentPage} setSortParams={setSortParams} has_more={data.has_more} />
            {isFetching ? <Table data={null} /> : <Table data={data.items} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
