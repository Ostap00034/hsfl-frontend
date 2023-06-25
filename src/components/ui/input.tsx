import { FC } from 'react'

type typeInput = {
	label: string
	mode?: string
	placeholder?: string
}

const Input: FC<typeInput> = ({ label, mode = 'text', placeholder = '' }) => {
	return (
		<div className='flex flex-col gap-[10px]'>
			<label
				className='font-manrope text-[16px] font-semibold leading-[20.8px]'
				htmlFor={label}>
				{label}
			</label>
			<input
				className='font-manrope rounded-[12px] border-[1px] border-[#E2E8F0] bg-[#F1F5F9] p-[20px] font-medium leading-[22.4px] text-[#0F172A] focus:outline-none'
				type={mode}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Input
