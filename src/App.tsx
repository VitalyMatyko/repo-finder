import "./index.css";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";
import { fetchRepos, resetRepos } from "./redux/githubSlice";
import { useState } from "react";
import { RootState } from "./redux/store";

function App() {
  const [username, setUsername] = useState<string>("");
  const [repoLoad, setRepoLoad] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { repos, loading, error, page } = useSelector(
    (state: RootState) => state.github
  );

  const handleSearch = () => {
    if (!username.trim()) return;
    dispatch(resetRepos());
    dispatch(fetchRepos({ username, page: 1 }));
  };

  const handleLoadMore = () => {
    if (repos.length > 0) {
      dispatch(fetchRepos({ username: repos[0]?.owner?.login, page }));
    } else {
      return `Users repo isn't find`;
    }
  };

  const repoLoadData = () => {
    if (username.length > 0 && repos.length === 0 && !loading) {
      setRepoLoad(true);
    }
  };
  const handleButtonClick = () => {
    handleSearch();
    repoLoadData();
  };

  return (
    <div className="min-h-screen bg-gray-100  rounded-lg ">
      <SearchBar
        username={username}
        setUsername={setUsername}
        handleSearch={handleSearch}
        handleButtonClick={handleButtonClick}
      />
      <Home
        handleLoadMore={handleLoadMore}
        repos={repos}
        loading={loading}
        error={error}
        repoLoad={repoLoad}
      />
    </div>
  );
}

export default App;
