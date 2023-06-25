export enum EnumObjectStatus {
	NORMAL = 'Нормально',
	EMERGENCY = 'Чрезвычайная ситуация',
	REPAIR = 'Обслуживается',
}

export type TypeObject = {
	title: string
	status: EnumObjectStatus
	userId: number
	description: string
	geolocation: string[]
}

export type TypeTakeObject = {
	objectId: number
}

export type TypeUpdateObject = {
	title?: string
	status?: EnumObjectStatus
	userId?: number
	geolocation?: string[]
}
