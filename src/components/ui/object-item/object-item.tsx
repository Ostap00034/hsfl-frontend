import { FC } from 'react'
import Button from '../button'
import { IObject } from '../../../types/object.interface'
import { ObjectService } from '../../../services/object/object.service'

const ObjectItem: FC<{
	object: IObject
}> = ({ object }) => {
	return (
		<div className='flex h-auto w-full flex-col rounded-[12px] border-[1px] border-black border-opacity-[12%] bg-white px-[16px] py-[12px] transition-all'>
			<div className='flex flex-row items-center justify-between'>
				<h1 className='font-manrope text-[20px] font-semibold leading-[38px] xl:text-[24px]'>
					{object.title}
				</h1>
				<span className='font-manrope text-[16px] font-semibold leading-[27px] text-[#A7A7A7] xl:text-[20px]'>
					{object.createdAt
						.toString()
						.substring(0, 10)
						.split('-')
						.reverse()
						.join('-')}
				</span>
			</div>
			<span className='font-manrope mb-[32px] mt-[8px] text-[16px] font-semibold leading-[27px] text-[#A7A7A7] xl:text-[20px]'>
				<div className=''>{object.description}</div>
				<div className=''>{object.userId}</div>
				{/* <div className=''>{object.geolocation}</div> */}
			</span>
			<Button
				onClick={async () => {
					await ObjectService.takeObject(object.id)
				}}
				color='white'>
				Взять заказ
			</Button>
		</div>
	)
}

export default ObjectItem
