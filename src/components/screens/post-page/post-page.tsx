import { FC, useState, useEffect } from 'react'
import { IPost } from '../../../types/post.interface'
import { PostService } from '../../../services/post/post.service'
import { useParams } from 'react-router-dom'
import Loader from '../../ui/loader'

const PostPage: FC = () => {
	const { id } = useParams()
	const [post, setPost] = useState<IPost>()

	useEffect(() => {
		const getPost = async () => {
			try {
				if (id) {
					const response = await PostService.getById(id)
					console.log(response.data)
					setPost(response.data)
				}
			} catch (error) {
				console.error('Error retrieving post:', error)
			}
		}

		getPost()
	}, [id])

	if (!post) {
		return <Loader />
	}

	return (
		<div className='max-w-md mx-auto p-6 bg-white rounded shadow'>
			<h2 className='text-xl font-bold mb-4'>{post.title}</h2>
			<p className='mb-2'>Мо: {post.user.mo.title}</p>
			<p className='mb-2'>Категория: {post.category.title}</p>
			<p className='mb-2'>Критерий: {post.criterie.title}</p>
			<p className='mb-2'>Количество баллов: {post.point}</p>
		</div>
	)
}

export default PostPage
