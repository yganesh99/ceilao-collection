import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='bg-navy text-white py-16 border-t border-gold/20'>
			<div className='container mx-auto px-6 flex flex-col items-center'>
				{/* Logo */}
				<div className='relative w-32 h-16 mb-8 opacity-80 hover:opacity-100 transition-opacity'>
					<Image
						src='/assets/logo.png'
						alt='Ceilão Collection'
						fill
						className='object-contain'
					/>
				</div>

				{/* Brand Statement */}
				<p className='text-center text-white/60 text-sm max-w-md mb-10 font-light leading-relaxed'>
					Crafting bespoke journeys and moments of timeless elegance
					in the heart of Sri Lanka. Experience the art of luxury
					living.
				</p>

				{/* Navigation Links */}
				<div className='flex space-x-8 mb-10 text-xs tracking-widest uppercase text-gold/80'>
					<Link
						href='/about'
						className='hover:text-white transition-colors'
					>
						About
					</Link>
					<Link
						href='/services'
						className='hover:text-white transition-colors'
					>
						Services
					</Link>
					<Link
						href='/journeys'
						className='hover:text-white transition-colors'
					>
						Journeys
					</Link>
					<Link
						href='/contact'
						className='hover:text-white transition-colors'
					>
						Contact
					</Link>
				</div>

				{/* Social Icons (Placeholders) */}
				<div className='flex space-x-6 mb-8 text-gold'>
					{/* Facebook */}
					<a
						href='#'
						className='w-5 h-5 border border-gold/50 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all'
					>
						<span className='sr-only'>Facebook</span>
						<span className='text-[10px]'>f</span>
					</a>
					{/* Instagram */}
					<a
						href='#'
						className='w-5 h-5 border border-gold/50 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all'
					>
						<span className='sr-only'>Instagram</span>
						<span className='text-[10px]'>i</span>
					</a>
				</div>

				{/* Copyright */}
				<div className='text-[10px] text-white/30 uppercase tracking-wider'>
					&copy; {new Date().getFullYear()} Ceilão Collection. All
					Rights Reserved.
				</div>
			</div>
		</footer>
	);
}
