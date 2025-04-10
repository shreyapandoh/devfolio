import axios from 'axios';

export const fetchVercelProjects = async () => {
  try {
    const mockVercelProjects = [
      {
        id: 'vercel-1',
        name: 'Portfolio Website',
        description: 'My personal portfolio website',
        url: 'https://shreya-pandoh.vercel.app',
        created_at: '2023-01-15T12:00:00Z',
        updated_at: '2023-02-10T15:30:00Z',
        framework: 'React',
        source: 'vercel'
      }
      // Add more mock projects as needed
    ];
    
    return mockVercelProjects;
  } catch (error) {
    console.error('Error fetching Vercel projects:', error);
    throw error;
  }
};
