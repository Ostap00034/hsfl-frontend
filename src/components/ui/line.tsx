import { FC } from 'react'
import Button from './button'
import { IObject } from '../../types/object.interface'

interface LineProps {
	object: IObject
}

const Line: FC<LineProps> = ({ object }) => {
	return (
		<div className='flex h-[80px] flex-row items-center justify-between gap-[20px] px-[52px]'>
			<div className=''>{object.id}</div>
			<div className=''>{object.title}</div>
			<div className=''>{object.status}</div>
			<div className=''>{object.description}</div>
			<Button
				onClick={() => {
					alert('Назначение работника')
				}}
				type='button'
				color='#0050B3'
				bg='#D9EAFF'>
				Назначить работника
			</Button>
		</div>
	)
}

export default Line
