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
				<p className='text-center text-white/60 text-sm max-w-2xl mb-10 font-light leading-relaxed'>
					Ceilão Collection is a house of brands united by luxury
					hospitality and curated experiences. Rooted in our island’s
					soul, we create lasting impressions while contributing to
					meaningful impact across our communities.
				</p>

				{/* Navigation Links */}
				<div className='flex space-x-8 mb-10 text-xs tracking-widest uppercase text-gold/80'>
					<Link
						href='/about'
						className='hover:text-white transition-colors'
					>
						About Us
					</Link>
					<Link
						href='/legal'
						className='hover:text-white transition-colors'
					>
						Legal
					</Link>
					<Link
						href='/commitments'
						className='hover:text-white transition-colors'
					>
						Commitments
					</Link>
					<Link
						href='/contact'
						className='hover:text-white transition-colors'
					>
						Contact
					</Link>
				</div>

				{/* Copyright */}
				<div className='text-[10px] text-white/60 uppercase tracking-wider text-center'>
					<p className='mt-2'>
						Ceilão Collection (Private) Limited - PV 00345241 |
						Registered in Sri Lanka.
					</p>
					<p>
						&copy; {new Date().getFullYear()} Ceilão Collection. All
						Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
