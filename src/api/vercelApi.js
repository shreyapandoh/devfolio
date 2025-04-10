import axios from 'axios';

const VERCEL_API_URL = 'https://api.vercel.com/v9/projects';
const VERCEL_API_TOKEN = 'STv182ziGGYt6yLKkAG3Q0So'; // 🔒 Replace this with your actual token

export const fetchVercelProjects = async () => {
  try {
    const response = await axios.get(VERCEL_API_URL, {
      headers: {
        Authorization: `Bearer ${VERCEL_API_TOKEN}`,
      },
    });

    const projects = response.data.projects;

    return projects.map(project => ({
      id: project.id,
      name: project.name,
      description: project.description || 'No description provided',
      url: `https://${project.name}.vercel.app`, // constructed URL
      created_at: project.createdAt,
      updated_at: project.updatedAt,
      framework: project.framework || 'N/A',
      source: 'vercel',
    }));
  } catch (error) {
    console.error('Error fetching Vercel projects:', error.message);
    throw error;
  }
};
