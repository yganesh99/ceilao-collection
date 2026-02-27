'use client';

import { useRef } from 'react';

export default function Hero() {
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleTimeUpdate = () => {
		if (videoRef.current && videoRef.current.currentTime >= 3.1) {
			videoRef.current.currentTime = 0;
			videoRef.current.play().catch(() => {});
		}
	};

	return (
		<section className='relative w-full h-[75vw] xs:h-[65vw] sm:h-[75vw] lg:h-screen overflow-hidden'>
			{/* Background Video */}
			<div className='absolute inset-0'>
				<video
					ref={videoRef}
					src='/assets/hero.mp4'
					autoPlay
					loop
					muted
					playsInline
					onTimeUpdate={handleTimeUpdate}
					className='absolute inset-0 w-full h-full object-contain object-[20%_100%] sm:object-cover sm:object-[0%_0%] bg-black animate-ken-burns scale-110 sm:scale-100'
				/>
				{/* Overlay gradient for text readability */}
				<div className='absolute inset-0 bg-black/30 bg-linear-to-b from-black/40 via-transparent to-black/20' />

				{/* Tagline */}
				<div className='absolute inset-0 flex items-center justify-center mt-14 md:mt-0 md:pb-20'>
					<h1 className='text-white text-sm md:text-3xl lg:text-5xl font-light tracking-wide text-center px-4 drop-shadow-md font-serif italic'>
						Luxury Hospitality. Lasting Impressions.
					</h1>
				</div>
			</div>
		</section>
	);
}
