export interface User {
    id?: number
    firstName?: string
    lastName?: string
    maidenName?: string
    age?: number
    gender?: string
    email?: string
    phone?: string
    username?: string
    password?: string
    birthDate?: string
    image?: string
    bloodGroup?: string
    height?: number
    weight?: number
    eyeColor?: string
    ip?: string
    macAddress?: string
    university?: string
    ein?: string
    ssn?: string
    userAgent?: string
    crypto?: Crypto
    role?: string
}

export interface EditFormSchema {
    firstName?: string;
    lastName?: string;
    phone?: string;
}

export interface UsersSchema {
    data?: User[];
    isLoading?: boolean;
    error?: string;
    formData?: EditFormSchema;
}

export interface UpdateUserSchema {
    id: number | string,
    data: EditFormSchema
}