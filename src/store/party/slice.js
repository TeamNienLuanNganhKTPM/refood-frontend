/** @format */

import { createSlice } from "@reduxjs/toolkit";

const partySlice = createSlice({
  name: "party",
  initialState: {
    partys: [],
  },
  reducers: {
    findPartyAll: (state) => ({
      ...state,
    }),
    findSearchParty: (state, { payload }) => ({
      ...state,
    }),
    updateSearchParty: (state, { payload }) => ({
      ...state,
      partys: payload,
    }),
    createParty: (state, { payload }) => ({
      ...state,
      successParty: false,
    }),
    checkPartySuccess: (state, { payload }) => ({
      ...state,
      successParty: payload,
    }),
  },
});

export const {
  findSearchParty,
  updateSearchParty,
  findPartyAll,
  createParty,
  checkPartySuccess,
} = partySlice.actions;

export default partySlice.reducer;
