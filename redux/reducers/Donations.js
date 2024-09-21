import {createSlice} from '@reduxjs/toolkit';
import {items} from '../../assets/mockData/category';

const initialState = {
  items: items,
  selectedDonationId: null,
  selectedDonationInformation: {},
};

export const Donations = createSlice({
  name: 'donations',
  initialState: initialState,
  reducers: {
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
      state.selectedDonationInformation = state.items.find(
        item => item.donationItemId === action.payload,
      );
    },
    resetDonations: () => {
      return initialState;
    },
  },
});
export const {resetDonations, updateSelectedDonationId} = Donations.actions;
export default Donations.reducer;
