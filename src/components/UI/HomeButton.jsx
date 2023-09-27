import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <Link to="/">
      <div className="text-gray-300 absolute left-2 top-2 p-1 rounded shadow-sm shadow-white cursor-pointer hover:bg-gray-950 transition-colors ">
        Назад
      </div>
    </Link>
  );
}

export default HomeButton;
