const Loader = () => {
	return (
		<div className='flex justify-center'>
			<div
				className={`h-5 w-5 bg-[#0050B3] rounded-full mr-1 animate-bounce`}></div>
			<div
				className={`h-5 w-5 bg-black rounded-full mr-1 animate-bounce200`}></div>
			<div
				className={`h-5 w-5 bg-[#0050B3] rounded-full animate-bounce400`}></div>
		</div>
	)
}

export default Loader
