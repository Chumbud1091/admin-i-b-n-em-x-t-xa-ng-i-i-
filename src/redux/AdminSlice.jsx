import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logInStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    logInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    logInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    setAdminFromToken: (state, action) => {
      state.currentUser = action.payload || null;
      state.error = null;
      state.loading = false;
    },

    clearAdminAuth: (state) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  logInStart,
  logInSuccess,
  logInFailure,
  setAdminFromToken,
  clearAdminAuth,
} = adminSlice.actions;

export default adminSlice.reducer;
