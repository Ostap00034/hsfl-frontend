import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuthRedirect } from '../screens/auth/useAuthRedirect'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { CategoryService } from '../../services/categorie/category.service'
import Heading from '../ui/heading'
import Loader from '../ui/loader'
import Field from '../ui/input/field'
import Button from '../ui/button'
import { ICategory } from '../../types/category.interface'

const CreateCategory: FC = () => {
	// useAuthRedirect({ requiredRole: 'ADMIN' })

	const navigate = useNavigate()

	const { isLoading } = useAuth()

	const {
		register: formRegister,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ICategory>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<ICategory> = async data => {
		await CategoryService.create(data)
		reset()
		navigate('/')
	}

	return (
		<div className='flex h-auto min-h-screen w-full flex-col items-center justify-center bg-gray-400 p-[16px]'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				action='POST'
				className='flex w-[calc(100vw-32px)] flex-col gap-[32px] rounded-[12px] bg-white p-[24px] transition-all md:max-w-[500px] md:p-[32px]'>
				<Heading>Создание критерия</Heading>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<div className='flex flex-col gap-[24px]'>
							<Field
								{...formRegister('title', {
									required: 'Введите название',
								})}
								placeholder='Название'
								label='Введите название'
								type='text'
								error={errors.title?.message}
							/>
						</div>
						<div className='flex w-full flex-col gap-[12px]'>
							<Button type='submit' color='white'>
								Создать
							</Button>
						</div>
					</>
				)}
			</form>
		</div>
	)
}

export default CreateCategory
