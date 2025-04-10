import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSkills = createAsyncThunk(
  'skills/fetchSkills',
  async (_, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // For now, we'll simulate fetching data
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: [
              { id: 1, name: 'JavaScript', category: 'Frontend', proficiency: 75 },
              { id: 2, name: 'React', category: 'Frontend', proficiency: 85 },
              { id: 3, name: 'TypeScript', category: 'Frontend', proficiency: 50 },
              { id: 4, name: 'HTML', category: 'Frontend', proficiency: 90 },
              { id: 5, name: 'Redux', category: 'Frontend', proficiency: 80 },
              { id: 6, name: 'Redux Toolkit', category: 'Frontend', proficiency: 75 },
              { id: 7, name: 'CSS/SASS', category: 'Frontend', proficiency: 90 },
              { id: 8, name: 'Tailwind CSS', category: 'Frontend', proficiency: 85 },
              { id: 9, name: 'SEO', category: 'Frontend', proficiency: 77 },
              { id: 10, name: 'Performance', category: 'Frontend', proficiency: 80 },
              { id: 11, name: 'Accessibility', category: 'Frontend', proficiency: 70 },
              { id: 12, name: 'REST API', category: 'Frontend', proficiency: 70 },
              { id: 13, name: 'Git', category: 'Tools', proficiency: 90 },
              { id: 14, name: 'Jest', category: 'Testing', proficiency: 80 },
              { id: 15, name: 'Material UI', category: 'Frontend', proficiency: 75 },
              { id: 16, name: 'Jenkins', category: 'Tools', proficiency: 67 },
              { id: 17, name: 'Unit Testing', category: 'Frontend', proficiency: 65 },
              { id: 18, name: 'Cursor', category: 'Tools', proficiency: 75 },
              { id: 19, name: 'DSA', category: 'Backend', proficiency: 50 },
            ]
          });
        }, 500);
      });
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    skills: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.skills = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default skillsSlice.reducer;
