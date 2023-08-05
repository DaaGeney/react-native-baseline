// @packages
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// @types
import { userState } from '../../utils/interfaces';

// @constants
const initialState: userState = {
  name: '',
  lastName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<userState>) {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;