import { LocalUserSchema } from 'entities/LocalUser';
import { LoginSchema } from 'features/AuthByUsername';
import { AxiosInstance } from 'axios';
import { UsersSchema } from 'entities/Users';
import { PostsSchema } from 'entities/Posts/model/types/Post';
import { ProductsSchema } from 'entities/Products/model/types/Product';

export interface StateSchema {
    localUser: LocalUserSchema;
    loginForm?: LoginSchema;
    users?: UsersSchema;
    posts?: PostsSchema;
    products?: ProductsSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}
