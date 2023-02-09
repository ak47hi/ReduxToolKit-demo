const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const { useReducer } = require("react");
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/iceCreamSlice");
const userReducer = require("../features/user/userSlice");
const logger = require("redux-logger").createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
