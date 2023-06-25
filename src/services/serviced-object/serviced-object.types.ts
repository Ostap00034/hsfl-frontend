import { IObject } from '../../types/object.interface'

export enum EnumObjectStatus {
	NORMAL = 'Нормально',
	EMERGENCY = 'Чрезвычайная ситуация',
	REPAIR = 'Обслуживается',
}

export type TypeServicedObject = {
	title: string
	status: EnumObjectStatus
	userId: number
	geolocation: string[]
}

export type TypeUpdateServicedObject = {
	title?: string
	status?: EnumObjectStatus
	userId?: number
	geolocation?: string[]
}
