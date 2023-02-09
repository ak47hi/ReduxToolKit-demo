const store = require("./app/store");
const { iceCreamActions } = require("./features/icecream/iceCreamSlice");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

// console.log("initial State", store.getState());
const unSubscribe = store.subscribe(() => {
  // console.log("updated State", store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(3));
// unSubscribe();
