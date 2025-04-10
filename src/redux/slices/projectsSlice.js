import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGitHubProjects } from '../../api/githubApi'; // Import the GitHub API function
import { fetchVercelProjects } from '../../api/vercelApi'; // Import the Vercel API function

const initialState = {
  githubProjects: [],
  vercelProjects: [],
  loading: false,
  error: null,
};

// Create the async thunk for fetching projects
export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      // Fetch GitHub projects using the API function
      const githubProjects = await fetchGitHubProjects();

      // Fetch Vercel projects using the API function
      const vercelProjects = await fetchVercelProjects();

      return { githubProjects, vercelProjects };
    } catch (error) {
      return rejectWithValue(error.message); // Pass error message in case of failure
    }
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.githubProjects = action.payload.githubProjects; // Set GitHub projects
        state.vercelProjects = action.payload.vercelProjects; // Set Vercel projects
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message
      });
  },
});

export default projectsSlice.reducer;
