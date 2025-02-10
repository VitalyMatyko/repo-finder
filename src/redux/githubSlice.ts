

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Repo } from "../type/index";
import { GithubState } from "../type/index";





const initialState: GithubState = {
	repos: [],
	loading: false,
	error: null,
	page: 1,
	username: null,
	fileLoading: false,

};

const VITE_GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// Асинхронный action для загрузки репозиториев
export const fetchRepos = createAsyncThunk<Repo[], { username: string; page: number }, { rejectValue: string }>(
	"github/fetchRepos",
	async ({ username, page }, { rejectWithValue }) => {
		try {
			const headers = VITE_GITHUB_TOKEN
				? { Authorization: `token ${VITE_GITHUB_TOKEN}` }
				: {};
			const response = await axios.get(
				`https://api.github.com/users/${username}/repos`,
				{
					params: { per_page: 20, page },
					headers: {
						Accept: "application/vnd.github.v3+json",
						...headers,
					},
				}
			);

			return response.data;
		} catch (error: unknown) {
			if (axios.isAxiosError(error)) {
				return rejectWithValue(error.response?.data?.message || "Ошибка загрузки");
			}
			return rejectWithValue("Неизвестная ошибка");
		}
	}
);


const githubSlice = createSlice({
	name: "github",
	initialState,
	reducers: {
		resetRepos: (state) => {
			state.repos = [];
			state.page = 1;
			state.error = null;
			state.username = null;
			state.fileLoading = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRepos.pending, (state, action) => {
				if (state.username !== action.meta.arg.username) {
					state.repos = [];
					state.page = 1;
					state.username = action.meta.arg.username;
				}
				state.loading = true;
				state.error = null;
				state.fileLoading = true;
			})
			.addCase(fetchRepos.fulfilled, (state, action) => {
				state.loading = false;
				state.repos = [...state.repos, ...action.payload];
				state.page += 1;
				state.fileLoading = false;
			})
			.addCase(fetchRepos.rejected, (state, action) => {
				state.loading = false;
				state.error = typeof action.payload === 'string' ? action.payload : 'Ошибка загрузки';
				state.fileLoading = false;
			});
	},
});

export const { resetRepos } = githubSlice.actions;
export default githubSlice.reducer;
