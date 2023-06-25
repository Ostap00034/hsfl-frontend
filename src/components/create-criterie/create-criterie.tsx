import { FC, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuthRedirect } from '../screens/auth/useAuthRedirect'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ICriterie } from '../../types/criterie.interface'
import { ICategory } from '../../types/category.interface'
import { CategoryService } from '../../services/categorie/category.service'
import { CriterieService } from '../../services/criterie/criterie.service'
import Heading from '../ui/heading'
import Loader from '../ui/loader'
import Field from '../ui/input/field'
import Button from '../ui/button'

const CreateCriterie: FC = () => {
	// useAuthRedirect({ requiredRole: 'ADMIN' })

	const navigate = useNavigate()

	const { isLoading } = useAuth()

	const {
		register: formRegister,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ICriterie>({
		mode: 'onChange',
	})

	const [categories, setCategories] = useState<ICategory[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const categoriesData = await CategoryService.getAll()
				setCategories(categoriesData.data)
			} catch (error) {
				console.error('Ошибка при получении категорий', error)
			}
		}

		fetchData()
	}, [])

	const onSubmit: SubmitHandler<ICriterie> = async data => {
		await CriterieService.create(data)
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
							<div className='flex flex-col gap-[10px]'>
								<label
									className='text-[16px] leading-[20.8px] font-manrope font-semibold'
									htmlFor={'select'}>
									Выберите категорию
								</label>
								<select
									defaultValue=''
									{...formRegister('categoryId', {
										required: 'Выберите категорию',
									})}
									id='select'
									className='rounded-[12px] focus:border-[#0050B3] delay-150 transition cursor-pointer focus:outline-none text-[#0F172A] font-manrope font-medium leading-[22.4px] bg-[#F1F5F9] p-[20px] border-[1px] border-[#E2E8F0]'>
									<option value='' disabled>
										Выберите категорию
									</option>
									{categories.length
										? categories.map((category, index) => (
												<option
													className='rounded-[12px] focus:border-[#0050B3] delay-150 transition cursor-pointer focus:outline-none text-[#0F172A] font-manrope font-medium leading-[22.4px] bg-[#F1F5F9] p-[20px] border-[1px] border-[#E2E8F0]'
													value={category.id}
													key={index}>
													{category.title}
												</option>
										  ))
										: null}
									error={errors.categoryId?.message}
								</select>
							</div>
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

export default CreateCriterie
