'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
	const [showLegalMenu, setShowLegalMenu] = useState(false);

	return (
		<footer className='bg-navy text-white py-16 border-t border-gold/20'>
			<div className='container mx-auto px-6 flex flex-col items-center'>
				{/* Logo */}
				<div className='relative w-32 h-16 mb-8 opacity-80 hover:opacity-100 transition-opacity'>
					<Link href='/'>
						<Image
							src='/assets/logo.png'
							alt='Ceilão Collection'
							fill
							className='object-contain'
						/>
					</Link>
				</div>

				{/* Brand Statement */}
				<p className='text-center text-white/60 text-sm max-w-2xl mb-10 font-light leading-relaxed'>
					Ceilão Collection is a house of brands united by luxury
					hospitality and curated experiences. Rooted in our island’s
					soul, we create lasting impressions while contributing to
					meaningful impact across our communities.
				</p>

				{/* Navigation Links */}
				<div className='min-h-[24px] flex flex-wrap justify-center gap-6 md:gap-8 mb-10 text-xs tracking-widest uppercase text-gold/80'>
					{!showLegalMenu ? (
						<>
							<a
								onClick={() => setShowLegalMenu(true)}
								className='hover:text-white transition-colors focus:outline-none cursor-pointer'
							>
								Legal
							</a>
							<Link
								href='/commitment'
								className='hover:text-white transition-colors'
							>
								Commitments
							</Link>
							<Link
								href='/about'
								className='hover:text-white transition-colors'
							>
								About Us
							</Link>
							<Link
								href='/contact'
								className='hover:text-white transition-colors'
							>
								Contact
							</Link>
						</>
					) : (
						<>
							<Link
								href='/privacy-policy'
								className='hover:text-white transition-colors'
							>
								Privacy Policy
							</Link>
							<Link
								href='/terms-and-conditions'
								className='hover:text-white transition-colors'
							>
								Terms & Conditions
							</Link>
							<a
								onClick={() => setShowLegalMenu(false)}
								className='hover:text-white transition-colors focus:outline-none cursor-pointer'
							>
								Close
							</a>
						</>
					)}
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
