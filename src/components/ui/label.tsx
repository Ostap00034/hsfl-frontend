import { FC } from 'react'

type typeLabel = {
	text: string
	ml?: string
}

const Label: FC<typeLabel> = ({ text, ml }) => {
	return (
		<div
			style={{
				marginLeft: ml,
			}}
			className='font-manrope text-[24px] font-semibold leading-[32px] text-[#1E1E1E]'>
			{text}
		</div>
	)
}

export default Label
