import { forwardRef } from 'react'

import { IField } from './field.interface'

import cn from 'clsx'

const Field = forwardRef<HTMLInputElement, IField>(
	({ label = '', placeholder = '', error, type = 'text', ...rest }, ref) => {
		return (
			<div className='flex flex-col gap-[10px]'>
				<label
					className='text-[16px] leading-[20.8px] font-manrope font-semibold'
					htmlFor={label}>
					{label}
				</label>
				<input
					id={label}
					className={cn(
						'rounded-[12px] focus:border-[#0050B3] delay-150 transition cursor-pointer focus:outline-none text-[#0F172A] font-manrope font-medium leading-[22.4px] bg-[#F1F5F9] p-[20px] border-[1px] border-[#E2E8F0]',
						{
							'border-red-500': !!error,
						}
					)}
					type={type}
					placeholder={placeholder}
					ref={ref}
					{...rest}
				/>
				{error && (
					<h2 className='text-red-500 text-[20px] font-bold'>{error}</h2>
				)}
			</div>
		)
	}
)

export default Field
