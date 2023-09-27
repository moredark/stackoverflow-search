import searchLogo from "../assets/searchLogo.svg";

function SearchInput({ search, setSearch }) {
  return (
    <div className="relative w-[350px] flex items-center bg-white rounded-lg shadow p-1 sm:w-[660px]">
      <img src={searchLogo} alt="search" className="ml-3" />
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        className="bg-transparent rounded py-2 px-5 w-full outline-none"
        placeholder="Поиск ответов..."
      />
      <div
        type="button"
        className="absolute top-0 bottom-0 right-0 px-3 py-4 cursor-pointer"
        onClick={() => {
          setSearch("");
        }}
      >
        {search && (
          <svg className="h-4 w-4 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 011.414-1.414L10 8.586z" />
          </svg>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
