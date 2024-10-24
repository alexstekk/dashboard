export interface LocalUser {
    id?: number
    username?: string
    email?: string
    firstName?: string
    lastName?: string
    gender?: string
    image?: string
    accessToken?: string
    refreshToken?: string
}

export interface LocalUserSchema {
    authData?: LocalUser;
}