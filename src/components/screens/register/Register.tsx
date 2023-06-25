import { FC, useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuthRedirect } from '../auth/useAuthRedirect'
import { useAuth } from '../../../hooks/useAuth'
import { useActions } from '../../../hooks/useActions'
import Field from '../../ui/input/field'
import Heading from '../../ui/heading'
import Loader from '../../ui/loader'
import Button from '../../ui/button'
import { useNavigate } from 'react-router-dom'
import { MoService } from '../../../services/mo/mo.service'
import { IMo } from '../../../types/mo.inteface'
import { IEmailPasswordFull } from '../../../types/user.interface'

const Register: FC = () => {
	useAuthRedirect()

	const navigate = useNavigate()

	const { isLoading } = useAuth()

	const { register } = useActions()

	const [mo, setMo] = useState<IMo[]>([])

	const {
		register: formRegister,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm<IEmailPasswordFull>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IEmailPasswordFull> = data => {
		register(data)
		reset()
		navigate('/')
	}

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await MoService.getAll()
				setMo(data.data)
			} catch (error) {
				console.error('Ошибка при получении метообъединений', error)
			}
		}

		getData()
	}, [])

	return (
		<div className='flex h-auto min-h-screen w-full flex-col items-center justify-center bg-gray-400 p-[16px]'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				action='POST'
				className='flex w-[calc(100vw-32px)] flex-col gap-[32px] rounded-[12px] bg-white p-[24px] md:max-w-[500px] md:p-[32px]'>
				<Heading>Регистрация</Heading>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<div className='flex flex-col gap-[24px]'>
							<Field
								{...formRegister('email', {
									required: 'Введите почту',
								})}
								placeholder='Email'
								label='Введите электронную почту'
								type='text'
								error={errors.email?.message}
							/>
							<Field
								{...formRegister('fio', {
									required: 'Введите фамилию имя отчество',
								})}
								placeholder='ФИО'
								label='Введите Фамилия Имя Отчество'
								type='text'
								error={errors.fio?.message}
							/>
							<Field
								{...formRegister('role', {
									required: 'Выберите вашу роль',
								})}
								placeholder='Роль'
								label='Выберите роль'
								type='text'
								error={errors.role?.message}
							/>
							<div className='flex flex-col gap-[10px]'>
								<label
									className='text-[16px] leading-[20.8px] font-manrope font-semibold'
									htmlFor={'select'}>
									Выберите метобъеденение
								</label>
								<select
									defaultValue=''
									{...formRegister('moId', {
										required: 'Выберите метобъединение',
									})}
									id='select'
									className='rounded-[12px] focus:border-[#0050B3] delay-150 transition cursor-pointer focus:outline-none text-[#0F172A] font-manrope font-medium leading-[22.4px] bg-[#F1F5F9] p-[20px] border-[1px] border-[#E2E8F0]'>
									<option value='' disabled>
										Выберите метобъеденение
									</option>
									{mo.length
										? mo.map((Mo, index) => (
												<option
													className='rounded-[12px] focus:border-[#0050B3] delay-150 transition cursor-pointer focus:outline-none text-[#0F172A] font-manrope font-medium leading-[22.4px] bg-[#F1F5F9] p-[20px] border-[1px] border-[#E2E8F0]'
													value={Mo.id}
													key={index}>
													{Mo.title}
												</option>
										  ))
										: null}
									error={errors.moId?.message}
								</select>
							</div>

							<Field
								{...formRegister('password', {
									required: 'Введите пароль',
									minLength: {
										value: 6,
										message: 'Минимальная длина пароля 6 символов',
									},
								})}
								placeholder='Пароль'
								label='Введите пароль'
								type='password'
								error={errors.password?.message}
							/>
							<Field
								{...formRegister('confirm_password', {
									required: 'Введите пароль повторно',
									minLength: {
										value: 6,
										message: 'Минимальная длина пароля 6 символов',
									},
									validate: val => {
										if (watch('password') != val) {
											return 'Пароли не совпадают'
										}
									},
								})}
								placeholder='Пароль'
								label='Введите пароль повторно'
								type='password'
								error={errors.confirm_password?.message}
							/>
						</div>
						<div className='flex w-full flex-col gap-[12px]'>
							<Button type='submit' color='white'>
								Зарегистрироваться
							</Button>
							<Button type='button' url='/auth' color='#0050B3' bg='#D9EAFF'>
								Войти
							</Button>
						</div>
					</>
				)}
			</form>
		</div>
	)
}

export default Register
