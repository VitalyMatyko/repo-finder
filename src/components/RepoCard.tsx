import { FC } from "react";

interface RepoProps {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
}

const RepoCard: FC<RepoProps> = ({
  name,
  description,
  html_url,
  stargazers_count,
  updated_at,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {name}
        </a>
      </h2>
      <p className="text-gray-700">{description || "Нет описания"}</p>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>⭐ {stargazers_count}</span>
        <span>🕒 {new Date(updated_at).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default RepoCard;
