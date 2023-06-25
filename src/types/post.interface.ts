import { ICategory } from './category.interface'
import { ICriterie } from './criterie.interface'
import { IUser } from './user.interface'

export interface IPost {
	id: number
	title: string
	createdAt: Date
	categoryId: string
	criterie: ICriterie
	category: ICategory
	criterieId: string
	point: number
	user: IUser
}

export interface IUpdatePost {
	id?: number
	title?: string
	createdAt?: Date
	categoryId?: string
	criterie?: ICriterie
	category?: ICategory
	criterieId?: string
	point?: number
	user?: IUser
}

export type TypePosts = {
	objects: IPost[]
}
