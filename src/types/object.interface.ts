export enum EnumObjectStatus {
	NORMAL = 'NORMAL',
	EMERGENCY = 'EMERGENCY',
	REPAIR = 'REPAIR',
}
export interface IObject {
	id: number
	title: string
	status: EnumObjectStatus
	geolocation: string[]
	description: string
	createdAt: Date
	userId: number | null
}

export type TypeObjects = {
	objects: IObject[]
}

export type TypeObjectsWithDelete = {
	objects: IObject[]
	deleteObject: (objectId: number) => void
}
