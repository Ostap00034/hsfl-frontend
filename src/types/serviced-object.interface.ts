import { IObject } from './object.interface'
import { IUser } from './user.interface'

export interface IServicedObject {
	id: number
	createdAt: Date
	description: string
	object: IObject
	user: IUser
}
