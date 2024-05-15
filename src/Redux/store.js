import themeReducer from "./changeTheme/themeReducer";
import { createStore } from "redux";
const store = createStore(themeReducer);
export default store;
