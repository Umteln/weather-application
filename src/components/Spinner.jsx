import Image from 'next/image';
import React from 'react';
import spinner from '../../public/spinner.gif';

const Spinner = () => {
	return (
		<>
			<Image
				src={spinner}
				alt='Loading...'
				className='w-[200px] m-auto block'
			/>
		</>
	);
};

export default Spinner;
