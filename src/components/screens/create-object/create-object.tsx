// import { FC, useState } from 'react'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import { useAuth } from '../../../hooks/useAuth'
// import Heading from '../../ui/heading'
// import Loader from '../../ui/loader'
// import Field from '../../ui/input/field'
// import Button from '../../ui/button'
// import { useNavigate } from 'react-router-dom'
// import { IObject } from '../../../types/object.interface'
// import { ObjectService } from '../../../services/object/object.service'
// import { useAuthRedirect } from '../auth/useAuthRedirect'
// import {
// 	AddressSuggestions,
// 	BaseInputProps,
// 	DaDataAddress,
// 	DaDataSuggestion,
// } from 'react-dadata'

export const CreateObject = () => {
	return <div>CreateObject</div>
}

export default CreateObject

// const CustomInputForAddress = (props: BaseInputProps, ref) => {
// 	const { autoComplete, onBlur, onChange, onFocus, onKeyDown, value } = props

// 	return (
// 		<Field
// 			type='text'
// 			autoComplete={autoComplete}
// 			onBlur={onBlur}
// 			onChange={onChange}
// 			onFocus={onFocus}
// 			onKeyDown={onKeyDown}
// 			value={value}
// 			label='Введите адрес'
// 			ref={ref}
// 			placeholder='Адрес'
// 		/>
// 	)
// }

// const CreateObject: FC = () => {
// 	useAuthRedirect()

// 	const navigate = useNavigate()

// 	const { isLoading } = useAuth()

// 	const [value, setValue] = useState<
// 		DaDataSuggestion<DaDataAddress> | undefined
// 	>()

// 	const {
// 		register: formRegister,
// 		handleSubmit,
// 		reset,
// 		formState: { errors },
// 	} = useForm<IObject>({
// 		mode: 'onChange',
// 	})

// 	const onSubmit: SubmitHandler<IObject> = async data => {
// 		const geolocation = ['' + value?.data.geo_lat, '' + value?.data.geo_lon]
// 		// const extendedData = { title: value?.data.unreg, ...data, geolocation: geolocation }
// 		// console.log(extendedData)
// 		// await ObjectService.create(extendedData)
// 		// reset()
// 	}

// 	return (
// 		<div className='flex h-auto min-h-screen w-full flex-col items-center justify-center bg-gray-400 p-[16px]'>
// 			<form
// 				onSubmit={handleSubmit(onSubmit)}
// 				action='POST'
// 				className='flex w-[calc(100vw-32px)] flex-col gap-[32px] rounded-[12px] bg-white p-[24px] transition-all md:max-w-[500px] md:p-[32px]'>
// 				<Heading>Регистрация нового объекта</Heading>
// 				{isLoading ? (
// 					<Loader />
// 				) : (
// 					<>
// 						<div className='flex flex-col gap-[24px]'>
// 							<AddressSuggestions
// 								token='8f309031c789c5365c724c0ab00c0f13db4be1f8'
// 								value={value}
// 								{...formRegister('title', { required: 'Введите адрес' })}
// 								customInput={CustomInputForAddress}
// 								onChange={e => {
// 									setValue
// 									formRegister('title')(e.target.value) // Bind formRegister to AddressSuggestions
// 								}}
// 								suggestionsClassName='text-[16px] leading-[20.8px] font-manrope font-semibold'
// 							/>
// 							{/* <Field
// 								{...formRegister('title', {
// 									required: 'Введите адрес',
// 								})}
// 								placeholder='Адрес'
// 								label='Введите адрес объекта'
// 								type='text'
// 								error={errors.title?.message}
// 							/> */}
// 							<Field
// 								{...formRegister('status', {
// 									required: 'Выберите статус',
// 								})}
// 								placeholder='Статус'
// 								label='Выберите статус'
// 								type='text'
// 								error={errors.status?.message}
// 							/>
// 							<Field
// 								{...formRegister('description')}
// 								placeholder='Описание'
// 								label='Опишите объект'
// 								type='text'
// 								error={errors.description?.message}
// 							/>
// 						</div>
// 						<div className='flex w-full flex-col gap-[12px]'>
// 							<Button type='submit' color='white'>
// 								Войти
// 							</Button>
// 						</div>
// 					</>
// 				)}
// 			</form>
// 		</div>
// 	)
// }

// export default CreateObject
