import { FC } from "react";
import { SearchBarProps } from "../type/index";

const SearchBar: FC<SearchBarProps> = ({
  username,
  setUsername,
  handleSearch,
  handleButtonClick,
}) => {
  return (
    <div className="flex justify-center p-4">
      <input
        type="text"
        className="border p-2 w-64 rounded-l-md focus:outline-none"
        placeholder="Введите GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        className="bg-blue-500 text-white px-4 rounded-r-md"
        onClick={handleButtonClick}
      >
        Поиск
      </button>
    </div>
  );
};

export default SearchBar;
