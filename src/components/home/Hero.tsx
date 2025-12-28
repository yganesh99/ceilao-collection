import Image from 'next/image';

export default function Hero() {
	return (
		<section className='relative h-[80vh] w-full overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0'>
				<Image
					src='/assets/hero.png'
					alt='Sri Lankan Landscape'
					fill
					className='object-cover'
					priority
					quality={90}
				/>
				{/* Overlay gradient for text readability */}
				<div className='absolute inset-0 bg-black/30 bg-linear-to-b from-black/40 via-transparent to-black/20' />
			</div>
		</section>
	);
}
