function PaginationButton({ onClick, variant }) {
  return (
    <div className="flex justify-center items-center shadow shadow-white rounded w-[45px] h-full cursor-pointer hover:text-gray-700 transition-colors">
      <p className="text-3xl pb-2" onClick={onClick}>
        {variant === "next" ? <>&#8594;</> : <>&#8592;</>}
      </p>
    </div>
  );
}

export default PaginationButton;
