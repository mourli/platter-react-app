

export interface AuthUser {
    isLoggedIn: boolean,
    username?: string,
    email?: string,
    phoneNumber?: string,
    profilePhoto?:string,
    roles?:string[]
}