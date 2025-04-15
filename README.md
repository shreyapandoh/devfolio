# Modern Portfolio Website

A responsive portfolio website built with React, featuring smooth animations, glassmorphism effects, and dynamic theme switching.

![Portfolio Screenshot]('/assets/screenshot.png')

## Features

- **Modern UI Design** with gradient effects and glassmorphism components
- **Responsive Layout** that works on all devices
- **Dark/Light Mode** with seamless transitions
- **Animated Components** using Framer Motion
- **Dynamic Project Display** fetched from GitHub API
- **Experience Timeline** showcasing professional history
- **Contact Form** with validation and submission handling

## Tech Stack

- **Frontend Framework**: React
- **State Management**: Redux
- **Routing**: React Router
- **Animations**: Framer Motion
- **Styling**: CSS with custom properties
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website

2. Install dependencies
    npm install
    # or
    yarn install

3. Start the development server
    npm start
    # or
    yarn start

4. Open http://localhost:3000 in your browser

### Project Structure

```
src/
├── assets/              # Images and static files
├── components/          # React components
│   ├── About/           # About page components
│   ├── Contact/         # Contact page components
│   ├── Experience/      # Experience page components
│   ├── Home/            # Home page components
│   ├── Projects/        # Projects page components
│   ├── Layout/          # Layout components (Header, Footer)
│   └── UI/              # Reusable UI components
├── redux/               # Redux store and slices
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── App.js               # Main app component
└── index.js             # Entry point
```

### Customisations

#### Projects

Projects are fetched from GitHub. Update the GitHub username in src/redux/slices/projectsSlice.js:

```
export const fetchGithubProjects = createAsyncThunk(
  'projects/fetchGithubProjects',
  async () => {
    const response = await fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos');
    // ...
  }
);
```

#### Experiences

Edit your work experiences in src/redux/slices/experiencesSlice.js:

```
const initialState = {
  experiences: [
    {
      id: 1,
      title: 'Senior Developer',
      company: 'Company Name',
      duration: 'Jan 2022 - Present',
      description: 'Your role description...',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    // Add more experiences
  ],
};
```

## Acknowledgement

- React Icons - https://react-icons.github.io/react-icons/
- Framer Motion - https://www.framer.com/motion/
- Inspiration for glassmorphism design - https://ui.glass/