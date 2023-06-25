import { FC } from 'react'
import ObjectItem from './object-item/object-item'
import Loader from './loader'
import { useAuth } from '../../hooks/useAuth'
import { TypeObjects } from '../../types/object.interface'
import { EnumObjectStatus } from '../../types/object.interface'

const Objects: FC<TypeObjects> = ({ objects }) => {
	const { isLoading } = useAuth()

	if (isLoading) return <Loader />

	return (
		<div className='flex h-[calc(100vh-100px-140px)] flex-col gap-[20px] overflow-y-auto overflow-x-hidden'>
			{objects.length ? (
				objects.map((object, index) =>
					object.status === EnumObjectStatus.NORMAL || object.userId ? null : (
						<ObjectItem
							key={index}
							object={object}
						/>
					)
				)
			) : (
				<div className='font-manrope text-center text-[24px] font-medium'>
					Нуждающихся в обслуживании объектов нет.
				</div>
			)}
		</div>
	)
}

export default Objects
