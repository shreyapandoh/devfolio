import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      // Update body class for global styling
      document.body.className = state.darkMode ? 'dark-theme' : 'light-theme';
      // Save preference to localStorage
      localStorage.setItem('darkMode', state.darkMode);
    },
    initializeTheme: (state) => {
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      state.darkMode = savedDarkMode;
      document.body.className = savedDarkMode ? 'dark-theme' : 'light-theme';
    },
  },
});

export const { toggleTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;