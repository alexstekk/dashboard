import { LocalUserSchema } from 'entities/LocalUser';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    localUser: LocalUserSchema;
    loginForm?: LoginSchema;
}
