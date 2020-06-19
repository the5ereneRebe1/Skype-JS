import user from "./user";
import contacts from "./contacts";
import {combineReducers} from "redux";
import activeUserId from "./activeUserId";
import messages from "./messages"
export default combineReducers({
    user,
    contacts,
    activeUserId,
    messages
});