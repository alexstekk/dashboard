// types
export {
    LocalUser,
    LocalUserSchema,
} from './model/types/LocalUser';

// actions,reducer
export { localUserActions, localUserReducer } from './model/slice/localUserSlice';

// selectors
export { selectLocalUserAuthData } from './model/selectors/selectLocalUserAuthData/selectLocalUserAuthData';
export { selectLocalUserName } from './model/selectors/selectLocalUserName/selectLocalUserName';
