import { IUser } from '../../types/user.interface'

export interface IUserState {
	email: string
	role: string
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
