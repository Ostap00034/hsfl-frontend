import { instance } from '../../api/api.interceptor'
import { IPost } from '../../types/post.interface'
import { TypeDataFilters } from '../sort.types'
import { TypeUpdatePost } from './post.types'

export const PostService = {
	async getAll(queryData = {} as TypeDataFilters) {
		return instance<IPost[]>({
			url: '/posts',
			method: 'GET',
			params: queryData,
		})
	},

	async getAllById(id: string) {
		return instance<IPost[]>({
			url: `/posts/byuserid/${id}`,
			method: 'GET',
		})
	},

	async getById(postId: string | number) {
		return instance<IPost>({
			url: `/posts/${postId}`,
			method: 'GET',
		})
	},

	async create(data: IPost) {
		return instance<IPost>({
			url: `/posts/`,
			method: 'POST',
			data,
		})
	},

	async update(postId: string | number, data: TypeUpdatePost) {
		return instance<IPost>({
			url: `/posts/${postId}`,
			method: 'PUT',
			data,
		})
	},

	async delete(postId: string | number) {
		return instance<IPost>({
			url: `/posts/${postId}`,
			method: 'DELETE',
		})
	},
}
