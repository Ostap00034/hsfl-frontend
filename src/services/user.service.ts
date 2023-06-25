import { instance } from '../api/api.interceptor'
import { IUser } from '../types/user.interface'

type TypeData = {
	email?: string
	password?: string
	fio?: string
}

export const UserService = {
	async getProfile() {
		return instance<IUser>({
			url: 'users/profile',
			method: 'GET',
		})
	},

	async updateProfile(data: TypeData) {
		return instance<IUser>({
			url: 'users/profile',
			method: 'PUT',
			data,
		})
	},

	async toggleArchive(objectId: string | number, description: string) {
		return instance<IUser>({
			url: `users/profile/archive/${objectId}`,
			method: 'PATCH',
			data: {
				description,
			},
		})
	},
}
