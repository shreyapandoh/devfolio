import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import projectsReducer from './slices/projectsSlice';
import experiencesReducer from './slices/experiencesSlice';
import awardsReducer from './slices/awardsSlice'
import skillsReducer from './slices/skillsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
    experiences: experiencesReducer,
    skills: skillsReducer,
    awards: awardsReducer
  }
});

export default store;