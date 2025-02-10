
// import { Repo } from "../redux/githubSlice";


export interface Repo {
	id: number;
	name: string;
	description: string | null;
	html_url: string;
	stargazers_count: number;
	updated_at: string;
	owner: {
		login: string;
	}
}

export interface HomeProps {
	repos: Repo[];
	handleLoadMore: () => void;
	loading: boolean;
	error: string | null;
	repoLoad: boolean;


}

export interface GithubState {
	repos: Repo[];
	loading: boolean;
	error: string | null;
	page: number;
	username: string | null;
	fileLoading: boolean;
}

export interface SearchBarProps {
	username: string;
	setUsername: React.Dispatch<React.SetStateAction<string>>;
	handleSearch: () => void;
	handleButtonClick: () => void;
}

export interface LoaderProps {
	loading: boolean;
}