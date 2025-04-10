import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// ExampleComponent.jsx or ExperiencePreview.jsx
import plivoAward from '../../assets/plivo-award.png';
import impactWinnerCertificate from '../../assets/impact-winner-certificate.png';
import impactWinnerAward from '../../assets/impact-winner-award.png';
import emergingCoach from '../../assets/emerging-coach.png';
import emergingCoachAward from '../../assets/emerging-coach-award.png';
import recognition from '../../assets/recognition.png';


export const fetchAwards = createAsyncThunk(
  'awards/fetchAwards',
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
                achievements: [
                    {
                        "text": "Plivo Award for Ownership",
                        "link": "https://drive.google.com/file/d/1iFFECf3j9xi18SdEYdciwoeJRuSZVQ6P/view",
                        "date": "Aug 2023"
                    },
                ],
                certificateImage: plivoAward,
                awardImage: ''
              },
              {
                id: 2,
                achievements: [
                    {
                        "text": "Annual Impact Winner",
                        "link": "https://drive.google.com/file/d/18gdyBjmbgi6F1yxIDDSnhQTDJg9GaSrn/view",
                        "date": "Aug 2022"
                    },
                ],
                certificateImage: impactWinnerCertificate,
                awardImage: impactWinnerAward
              },
              {
                id: 3,
                achievements: [
                    {
                        "text": "Emerging Coach Award",
                        "link": "https://drive.google.com/file/d/1j9XyxmePaQP5-sldWZlkJ0ei89icb_az/view",
                        "date": "Aug 2021"
                    },
                ],
                certificateImage: emergingCoach,
                awardImage: emergingCoachAward
              },
              {
                id: 4,
                achievements: [
                    {
                        "text": "XenonStack Recognition Award",
                        "link": "https://drive.google.com/file/d/1cw57MnKJk3wwwD5qLuE-IyXaZO1aJsYm/view",
                        "date": "July 2021"
                    },
                ],
                certificateImage: recognition,
                awardImage: ''
              },
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

const awardsSlice = createSlice({
  name: 'awards',
  initialState: {
    awards: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAwards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAwards.fulfilled, (state, action) => {
        state.loading = false;
        state.awards = action.payload;
      })
      .addCase(fetchAwards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default awardsSlice.reducer;