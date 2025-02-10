import InfiniteScroll from "react-infinite-scroll-component";
import RepoCard from "../components/RepoCard";
import Loader from "../components/Loader";
import { FC } from "react";
import { HomeProps } from "../type/index";

const Home: FC<HomeProps> = ({
  handleLoadMore,
  repos,
  error,
  loading,
  repoLoad,
}) => {
  // console.log("loading:", loading);
  // console.log("getLoadingRepo:", getLoadingRepo);
  // console.log("repos.length:", repos.length);

  if (loading) {
    return <Loader loading={loading} />;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {repos.length > 0 && (
        <InfiniteScroll
          dataLength={repos.length}
          next={handleLoadMore}
          hasMore={repos.length < 100}
          loader={<Loader loading={loading} />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo) => (
              <RepoCard key={repo.id} {...repo} />
            ))}
          </div>
        </InfiniteScroll>
      )}
      {repoLoad && (
        <div className="grid grid-cols-1">
          <div className="border p-4 rounded-lg shadow-md bg-white text-center">
            <h2 className="text-lg font-bold text-gray-700">
              У Пользователя открытых репозиториев не найдено
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
