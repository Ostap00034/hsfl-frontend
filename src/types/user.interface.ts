import { IUserState } from '../store/user/user.interface'
import { IMo } from './mo.inteface'
import { IPost } from './post.interface'

export interface IUser {
	id: number
	email: string
	fio: string
	role: string
	password: string
	moId: string | number
	mo: IMo
	Post: IPost[]
	point: number
}

// export interface IFullUser extends IUser {

// }

export interface ITokensWithRole {
	accessToken: string
	refreshToken: string
	user: IUser
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
	password: string
}

export interface IEmailPasswordFull {
	email: string
	password: string
	confirm_password: string
	role: string
	fio: string
	moId: number | string
}

export interface IAuthResponse extends ITokensWithRole {
	user: IUser
	role: 'MASTER' | 'ADMIN'
}
