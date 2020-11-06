/* eslint-disable  no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.headers.get['x-apy-key'] = '4aba53a3-51c3-4af7-9941-8321ab92ac07';

export const getDogs = createAsyncThunk('dogs/getDogs', async () => {
  const uri = 'https://api.thedogapi.com/v1/images/search?limit=100';
  const response = await axios.get(uri);
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
    loaders: {},
    errors: {},
    success: {},
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
      state.loaders.loadingDogs = true;
      state.errors.loadingDogs = false;
    },
    [getDogs.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.success.loadingDogs = true;
      state.loaders.loadingDogs = false;
      state.errors.loadingDogs = false;
    },
    [getDogs.rejected]: (state, action) => {
      state.errors.loadingDogs = action.error.message;
      state.loaders.loadingDogs = false;
      state.success.loadingDogs = false;
    },
  },
});

export const { changeLifeSpanFilter, changeBreedGroupFilter } = counterSlice.actions;

export default counterSlice.reducer;
