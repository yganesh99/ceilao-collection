import Image from 'next/image';

export default function Hero() {
	return (
		<section className='relative h-[100vh] w-full overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0'>
				{/* Desktop Image */}
				<div className='hidden md:block absolute inset-0'>
					<Image
						src='/assets/hero.gif'
						alt='Sri Lankan Landscape'
						fill
						className='object-cover animate-ken-burns'
						priority
						quality={90}
					/>
				</div>
				{/* Mobile Image */}
				<div className='block md:hidden absolute inset-0'>
					<Image
						src='/assets/hero.gif'
						alt='Sri Lankan Landscape'
						fill
						className='object-cover animate-ken-burns'
						priority
						quality={90}
					/>
				</div>
				{/* Overlay gradient for text readability */}
				<div className='absolute inset-0 bg-black/30 bg-linear-to-b from-black/40 via-transparent to-black/20' />

				{/* Tagline */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<h1 className='text-white text-3xl md:text-5xl font-light tracking-wide text-center px-4 drop-shadow-md font-serif italic'>
						Curating Life&apos;s Finest Moments
					</h1>
				</div>
			</div>
		</section>
	);
}
