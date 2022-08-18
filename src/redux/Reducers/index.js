import {combineReducers} from 'redux';
import { manipulation } from './reducer';
import { manipulationUsers } from './userReducer';
export const rootReducer = combineReducers({
    Todos:manipulation,
    Users:manipulationUsers
});