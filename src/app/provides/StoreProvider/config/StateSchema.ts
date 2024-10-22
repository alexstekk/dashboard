import { LocalUserSchema } from 'entities/LocalUser';
import { LoginSchema } from 'features/AuthByUsername';
import { AxiosInstance } from 'axios';
import { UsersSchema } from 'entities/Users';

export interface StateSchema {
    localUser: LocalUserSchema;
    loginForm?: LoginSchema;
    users?: UsersSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}
