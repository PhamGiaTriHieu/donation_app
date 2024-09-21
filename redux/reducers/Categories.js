import {createSlice} from '@reduxjs/toolkit';
import {categories} from '../../assets/mockData/category';

const initialState = {
  categories: categories,
  selectedCategoryId: 1,
};

const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    resetCategories: () => {
      return initialState;
    },
  },
});

export const {updateSelectedCategoryId, resetCategories} =
  Categories.actions;

export default Categories.reducer;
