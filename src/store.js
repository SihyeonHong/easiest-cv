import { configureStore, createSlice } from "@reduxjs/toolkit";

let tabs = createSlice({
  name: "tabs",
  initialState: {
    tabs: ["tab1", "tab2", "tab3"],
  },
  reducers: {
    addTab: (state, action) => {
      state.tabs.push(action.payload);
    },
    removeTab: (state, action) => {
      state.tabs = state.tabs.filter((tab) => tab !== action.payload);
    },
  },
});
export let { addTab, removeTab } = tabs.actions;

export default configureStore({
  reducer: {
    tabs: tabs.reducer,
  },
});
