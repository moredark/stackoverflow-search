function Arrow({ setSortParams, variant }) {
  return (
    <p
      onClick={() => {
        setSortParams((prevSortParams) => ({
          ...prevSortParams,
          order: variant === "up" ? "asc" : "desc",
        }));
      }}
      className={
        "flex justify-center items-center shadow shadow-white text-white rounded w-[45px] h-full cursor-pointer hover:text-gray-400 transition-colors"
      }
    >
      {variant === "up" ? "▲" : "▼"}
    </p>
  );
}

export default Arrow;
