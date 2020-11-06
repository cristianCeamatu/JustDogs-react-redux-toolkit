/* eslint-disable  no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.headers.common['x-apy-key'] = '4aba53a3-51c3-4af7-9941-8321ab92ac07';
export const getDogs = createAsyncThunk('dogs/getDogs', async () => {
  const response = await axios.get(
    'https://api.thedogapi.com/v1/images/search?limit=100&order=DESC&page=1&size=med',
  );
  const dogs = response.data.filter(dog => dog.breeds.length !== 0 && dog.breeds[0].breed_group);

  return dogs;
});

// export const getDog = createAsyncThunk('dogs/getDog', async id => {
//   const response = await axios.get(`https://api.thedogapi.com/v1/images/${id}`);
//   return response.data;
// });

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    data: [],
    lifeSpanFilter: '',
    breedGroupFilter: '',
    currentFilteredDogsCount: 0,
    status: 'idle',
    error: '',
  },
  reducers: {
    changeLifeSpanFilter: (state, action) => {
      state.lifeSpanFilter = action.payload;
    },
    changeBreedGroupFilter: (state, action) => {
      state.breedGroupFilter = action.payload;
    },
    // setDogsFromStorage: (state, action) => {
    //   state.dogs = action.payload;
    // },
  },
  extraReducers: {
    [getDogs.pending]: state => {
      state.status = 'loadingDogs';
    },
    [getDogs.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = 'idle';
    },
    [getDogs.rejected]: (state, action) => {
      state.error = action.error.message;
      state.status = 'failedLoadingDogs';
    },
  },
});

export const { changeLifeSpanFilter, changeBreedGroupFilter } = counterSlice.actions;

export default counterSlice.reducer;
