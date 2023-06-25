import { ICriterie } from '../../types/criterie.interface'

export type TypeCriterie = {
	title: string
	categoryId: number
}

export type TypeCriteries = {
	mos: ICriterie[]
}

export type TypeUpdateCriterie = {
	title?: string
}
