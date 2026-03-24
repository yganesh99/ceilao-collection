'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Hero() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [muted, setMuted] = useState(true);

	const handleTimeUpdate = () => {
		if (videoRef.current && videoRef.current.currentTime >= 3.1) {
			videoRef.current.currentTime = 0;
			videoRef.current.play().catch(() => {});
		}
	};

	const toggleMute = () => {
		const next = !muted;
		setMuted(next);
		const el = videoRef.current;
		if (el) {
			el.muted = next;
			el.play().catch(() => {});
		}
	};

	return (
		<section className='relative w-full h-[75vw] xs:h-[65vw] sm:h-[75vw] lg:h-screen overflow-hidden'>
			{/* Background Video */}
			<div className='absolute inset-0'>
				<video
					ref={videoRef}
					src='/assets/hero-a.mp4'
					autoPlay
					loop
					muted={muted}
					playsInline
					onTimeUpdate={handleTimeUpdate}
					className='absolute inset-0 w-full h-full object-contain object-[20%_100%] sm:object-cover sm:object-[0%_0%] bg-black animate-ken-burns scale-110 sm:scale-100'
				/>
				{/* Overlay gradient for text readability */}
				<div className='pointer-events-none absolute inset-0 bg-black/30 bg-linear-to-b from-black/40 via-transparent to-black/20' />

				{/* Tagline */}
				<div className='pointer-events-none absolute inset-0 flex items-center justify-center mt-14 md:mt-0 md:pb-20'>
					<h1 className='text-white text-sm md:text-3xl lg:text-5xl font-light tracking-wide text-center px-4 drop-shadow-md font-serif italic'>
						Luxury Hospitality. Lasting Impressions.
					</h1>
				</div>

				<div className='absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6'>
					<button
						type='button'
						onClick={toggleMute}
						aria-pressed={!muted}
						aria-label={muted ? 'Unmute video' : 'Mute video'}
						className='pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80'
					>
						{muted ? <VolumeX className='h-5 w-5' aria-hidden /> : <Volume2 className='h-5 w-5' aria-hidden />}
					</button>
				</div>
			</div>
		</section>
	);
}
