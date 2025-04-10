import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'shreyapandoh';

export const fetchGitHubProjects = async () => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${GITHUB_USERNAME}/repos`);
    return response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description provided',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      url: repo.html_url,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      homepage: repo.homepage,
      topics: repo.topics || [],
      source: 'github'
    }));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    throw error;
  }
};