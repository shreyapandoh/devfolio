import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExperiences = createAsyncThunk(
  'experiences/fetchExperiences',
  async (_, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // For now, we'll simulate fetching data
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: [
              {
                id: 1,
                role: 'SDE Frontend',
                company: 'Plivo ',
                location: 'Bangalore, Karnataka, India',
                period: 'Mar 2023 - Present',
                description: 'Led the development of the Contacto product, integrating SMS, Voice, and WhatsApp APIs to enhance communication security and automation. Improved user satisfaction by 20% through AI-driven agent assignment and boosted response speed by 25%. Spearheaded a UI revamp, transitioning to a modern tech stack and improving platform performance. Managed a team to integrate real-time messaging APIs, increasing user engagement by 25%.',
                achievements: [
                    {
                        "text": "Plivo Award for Ownership - Aug 2023",
                        "link": "https://your-link-to-award-page.com"
                    },
                ],
                technologies: ['React', 'JavaScript', 'Redux', 'TypeScript', 'Tailwind CSS', 'Jest', 'Pubnub', 'CSS']
              },
              {
                id: 2,
                role: 'Associate Consultant - Frontend',
                company: 'Infosys',
                location: 'Chandigarh, India',
                period: 'Nov 2022 - Mar 2023',
                description: 'Worked as both a Developer and Consultant for a leading banking client, driving the development of modern, responsive solutions across mobile and desktop platforms to enhance user experience and engagement. Additionally, collaborated with an automobile client to migrate their e-commerce store to a modern frontend architecture, implementing Elastic Search to significantly improve search performance, resulting in a 30% boost in speed and customer satisfaction.',
                achievements: [
                  ''
                ],
                technologies: ['React', 'JavaScript', 'Redux', 'Material UI', 'Jest', 'CSS', 'ElasticSearch']
              },
              {
                id: 3,
                role: 'Software Engineer - Frontend',
                company: 'XenonStack',
                location: 'Mohali, Punjab, India',
                period: 'Aug 2020 - Nov 2022',
                description: 'Developed dynamic and responsive user interfaces while integrating RESTful and MetaData APIs to enhance frontend-backend communication. Led and mentored a team of 9 Junior Developers, improving collaboration and accelerating project delivery by 30%. Championed high code quality through detailed reviews and knowledge sharing, contributing to a 20% reduction in bugs. Actively participated in Agile ceremonies, collaborating with Business Analysts to refine project scope and priorities, resulting in a 25% boost in sprint velocity.',
                achievements: [
                    {
                        "text": "Annual Impact Winner - Aug 2022",
                        "link": "https://drive.google.com/file/d/18gdyBjmbgi6F1yxIDDSnhQTDJg9GaSrn/view"
                    },
                    {
                        "text": "Emerging Coach Award - Aug 2021",
                        "link": "https://drive.google.com/file/d/1j9XyxmePaQP5-sldWZlkJ0ei89icb_az/view"
                    },
                    {
                        "text": "XenonStack Recognition Award - Jul 2021",
                        "link": "https://drive.google.com/file/d/1cw57MnKJk3wwwD5qLuE-IyXaZO1aJsYm/view"
                    },
                ],
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'SASS', 'Bootstrap', 'React', 'Redux', 'UX', 'UI']
              },
              {
                id: 4,
                role: 'Software Engineer Intern',
                company: 'XenonStack',
                location: 'Mohali, Punjab, India',
                period: 'Feb 2020 - July 2020',
                description: 'Created Organization internal Onboarding Portal (Portal for Interns) user stories and user flow for the team, developed Onboarding Portal using Reactjs. Worked as User Researcher + Audited company’s website AkiraAI',
                achievements: [
                    {
                        "text": "Internship Certificate - July 2020",
                        "link": "https://drive.google.com/file/d/1TCFVGeIYmeMN4gAlnJmRCjLAArEQlooJ/view"
                    },
                ],
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'SASS', 'Bootstrap', 'React', 'Redux', 'UX', 'UI', 'Marvel App']
              },
              {
                id: 5,
                role: 'Machine Learning Intern',
                company: 'Avekshaa Technologies',
                location: 'Bengalore, Karnataka India',
                period: 'June 2019 - July 2019',
                description: 'Built a voice-enabled assistant (ChatBot) to provide intelligent recommendations for performance engineering as part of the AppNeura product roadmap. The assistant streamlined internal IT support by helping teammates quickly find solutions to common queries. Additionally, implemented a feedback mechanism to continuously improve the chatbot’s accuracy and effectiveness over time.',
                achievements: [
                    {
                        "text": "Internship Certificate - July 2020",
                        "link": "https://drive.google.com/file/d/1QrlUg1YBToSoDh4Fwn5TaddRw-Z0SKuu/view"
                    },
                ],
                technologies: ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'NLTK', 'Chatterbot', 'MongoDB']
              }
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

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState: {
    experiences: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.loading = false;
        state.experiences = action.payload;
      })
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default experiencesSlice.reducer;