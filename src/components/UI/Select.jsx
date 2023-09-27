function Select({ setSortParams }) {
  return (
    <select
      onChange={(e) => {
        setSortParams((prevSortParams) => ({
          ...prevSortParams,
          sort: e.target.value,
        }));
      }}
      className="w-[100px] rounded px-2 py-2 bg-white  bg-transparent border border-gray-500 pl-3 pr-10 text-gray-500 focus:outline-none focus:ring-2 focus:white focus:border-transparent sm:w-[300px]"
    >
      <option value="relevance" className="bg-gray-800">
        По релевантности
      </option>
      <option value="creation" className="bg-gray-800">
        По дате
      </option>
      <option value="activity" className="bg-gray-800">
        По активности
      </option>
      <option value="votes" className="bg-gray-800">
        По голосам
      </option>
    </select>
  );
}

export default Select;
