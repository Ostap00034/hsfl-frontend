import { FC, useEffect, useState } from 'react'
import { useAuthRedirect } from '../auth/useAuthRedirect'
import { IPost } from '../../../types/post.interface'
import Heading from '../../ui/heading'
import { PostService } from '../../../services/post/post.service'
import { getUserFromStorage } from '../../../services/auth/auth.helper'
import Button from '../../ui/button'
import { Link } from 'react-router-dom'

const Main: FC = () => {
	useAuthRedirect()

	const { id, role } = getUserFromStorage()

	const [posts, setPosts] = useState<IPost[]>([])
	const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
	const [selectedCategory, setSelectedCategory] = useState<string>('')
	const [selectedMo, setSelectedMo] = useState<string>('')
	const [selectedCriterie, setSelectedCriterie] = useState<string>('')

	useEffect(() => {
		const getData = async () => {
			const response =
				role !== 'ADMIN'
					? await PostService.getAllById(id)
					: await PostService.getAll()
			const postsData = response.data
			setPosts(postsData)
			setFilteredPosts(postsData)
		}

		getData()
	}, [id, role])

	useEffect(() => {
		// Filter posts based on selected category, mo, and criterie
		const filteredPosts = posts.filter(post => {
			const isCategoryMatch =
				selectedCategory === '' || post.category.title === selectedCategory
			const isMoMatch = selectedMo === '' || post.user.mo.title === selectedMo
			const isCriterieMatch =
				selectedCriterie === '' || post.criterie.title === selectedCriterie
			return isCategoryMatch && isMoMatch && isCriterieMatch
		})

		setFilteredPosts(filteredPosts)
	}, [selectedCategory, selectedMo, selectedCriterie, posts])

	const handleCategoryChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedCategory(event.target.value)
	}

	const handleMoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedMo(event.target.value)
	}

	const handleCriterieChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedCriterie(event.target.value)
	}

	return (
		<div className='flex flex-col justify-start gap-[20px] px-[32px] items-center h-[calc(100vh-100px)]'>
			<Heading>{role !== 'ADMIN' ? 'Мои публикации' : 'Публикации'}</Heading>
			<div className='flex flex-col gap-[16px]'>
				<div className='flex gap-4'>
					{/* Category filter */}
					<label htmlFor='category'>Категория:</label>
					<select
						name='category'
						id='category'
						value={selectedCategory}
						onChange={handleCategoryChange}>
						<option value=''>Все</option>
						{/* Render options dynamically */}
						{Array.from(new Set(posts.map(post => post.category.title))).map(
							category => (
								<option key={category} value={category}>
									{category}
								</option>
							)
						)}
					</select>

					{/* Mo filter */}
					<label htmlFor='mo'>Мо:</label>
					<select
						name='mo'
						id='mo'
						value={selectedMo}
						onChange={handleMoChange}>
						<option value=''>Все</option>
						{/* Render options dynamically */}
						{Array.from(new Set(posts.map(post => post.user.mo.title))).map(
							mo => (
								<option key={mo} value={mo}>
									{mo}
								</option>
							)
						)}
					</select>

					{/* Criterie filter */}
					<label htmlFor='criterie'>Критерий:</label>
					<select
						name='criterie'
						id='criterie'
						value={selectedCriterie}
						onChange={handleCriterieChange}>
						<option value=''>Все</option>
						{/* Render options dynamically */}
						{Array.from(new Set(posts.map(post => post.criterie.title))).map(
							criterie => (
								<option key={criterie} value={criterie}>
									{criterie}
								</option>
							)
						)}
					</select>
				</div>

				{filteredPosts.length ? (
					filteredPosts.map((post, index) => (
						<Link to={`/post/${post.id}`} key={index}>
							<div className='border-gray-800 cursor-pointer rounded-12 flex justify-between items-center w-[80vw] border-[0.3px] p-10 text-20 font-medium'>
								<div>
									<div>Название: {post.title}</div>
									<div>Мо: {post.user.mo.title}</div>
									<div>Категория: {post.category.title}</div>
									<div>Критерий: {post.criterie.title}</div>
									<div>Количество баллов: {post.point}</div>
								</div>
								<Link to={`/update/post/${post.id}`}>
									{role !== 'ADMIN' ? (
										<Button color='white' className='cursor-pointer'>
											Редактировать
										</Button>
									) : null}
								</Link>
							</div>
						</Link>
					))
				) : (
					<div className=''>Постов нет</div>
				)}
			</div>
		</div>
	)
}

export default Main
