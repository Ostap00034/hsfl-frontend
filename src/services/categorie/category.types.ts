import { ICategory } from '../../types/category.interface'

export type TypeCategory = {
	title: string
}

export type TypeCategories = {
	mos: ICategory[]
}

export type TypeUpdateCategory = {
	title?: string
}
