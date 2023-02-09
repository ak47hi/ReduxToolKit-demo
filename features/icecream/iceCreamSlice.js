const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").cakeActions;
const initialState = {
  icecreams: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.icecreams--;
    },
    restocked: (state, action) => {
      state.icecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.icecreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
