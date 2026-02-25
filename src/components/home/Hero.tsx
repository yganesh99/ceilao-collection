export default function Hero() {
	return (
		<section className='relative h-screen w-full overflow-hidden'>
			{/* Background Video */}
			<div className='absolute inset-0'>
				<video
					src='/assets/hero.mp4'
					autoPlay
					loop
					muted
					playsInline
					className='w-full h-full object-cover animate-ken-burns'
				/>
				{/* Overlay gradient for text readability */}
				<div className='absolute inset-0 bg-black/30 bg-linear-to-b from-black/40 via-transparent to-black/20' />

				{/* Tagline */}
				<div className='absolute inset-0 flex items-center justify-center'>
					<h1 className='text-white text-3xl md:text-5xl font-light tracking-wide text-center px-4 drop-shadow-md font-serif italic'>
						Luxury Hospitality. Lasting Impressions.
					</h1>
				</div>
			</div>
		</section>
	);
}
