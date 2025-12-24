import Image from 'next/image';

export default function Hero() {
	return (
		<section className='relative h-screen w-full overflow-hidden'>
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

			{/* Content */}
			<div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'>
				<h1 className='text-4xl md:text-6xl lg:text-7xl mb-4 tracking-wide font-serif'>
					CEILÃO COLLECTION
				</h1>
				<p className='text-lg md:text-xl font-light tracking-wider mb-10 max-w-2xl text-white/90'>
					Crafting Bespoke Destinations & Experiences
				</p>

				<button className='px-8 py-3 bg-navy/90 border border-gold text-white uppercase tracking-widest text-xs md:text-sm hover:bg-gold hover:text-navy transition-all duration-500 ease-out backdrop-blur-sm'>
					Discover More
				</button>
			</div>
		</section>
	);
}
