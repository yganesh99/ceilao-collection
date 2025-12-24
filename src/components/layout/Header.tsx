'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<header className='absolute top-0 w-full z-50 bg-champagne py-6'>
				<div className='container mx-auto h-16 px-6 flex justify-between items-center'>
					{/* Logo */}
					<div className='relative sm:w-40 sm:h-28 md:w-64 md:h-32'>
						<Link href='/'>
							<Image
								src='/assets/logo.png'
								alt='Ceilão Collection'
								fill
								className='object-contain'
								priority
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden md:block'>
						<ul className='flex space-x-8 text-black uppercase tracking-widest text-sm font-medium'>
							<li>
								<Link
									href='/'
									className='hover:underline underline-offset-4 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='hover:underline underline-offset-4 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href='/services'
									className='hover:underline underline-offset-4 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href='/journeys'
									className='hover:underline underline-offset-4 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
								>
									Journeys
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='hover:underline underline-offset-4 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>

					{/* Mobile Menu Button */}
					<div className='md:hidden text-white z-50'>
						<button
							onClick={toggleMenu}
							className='space-y-2 focus:outline-none text-black'
							aria-label='Toggle Menu'
						>
							<span
								className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
									isMobileMenuOpen
										? 'rotate-45 translate-y-2.5'
										: ''
								}`}
							></span>
							<span
								className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${
									isMobileMenuOpen ? 'opacity-0' : ''
								}`}
							></span>
							<span
								className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
									isMobileMenuOpen
										? '-rotate-45 -translate-y-2.5'
										: ''
								}`}
							></span>
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out md:hidden ${
					isMobileMenuOpen
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
			>
				<nav>
					<ul className='flex flex-col space-y-8 text-center text-white uppercase tracking-widest text-lg font-light'>
						<li>
							<Link
								href='/'
								onClick={toggleMenu}
								className='hover:text-gold transition-colors'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='/about'
								onClick={toggleMenu}
								className='hover:text-gold transition-colors'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href='/services'
								onClick={toggleMenu}
								className='hover:text-gold transition-colors'
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								href='/journeys'
								onClick={toggleMenu}
								className='hover:text-gold transition-colors'
							>
								Journeys
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								onClick={toggleMenu}
								className='hover:text-gold transition-colors'
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
