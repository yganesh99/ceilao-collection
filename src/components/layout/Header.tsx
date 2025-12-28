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
			<header className='absolute top-0 w-full z-50 bg-champagne py-4'>
				<div className='container mx-auto px-2 flex justify-between items-center relative'>
					{/* Logo */}
					<div className='relative h-16 md:h-16 lg:h-20 aspect-2/1'>
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
						<ul className='flex space-x-10 text-black uppercase tracking-widest text-sm font-medium'>
							<li>
								<Link
									href='/'
									className='hover:underline underline-offset-8 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='/#about'
									className='hover:underline underline-offset-8 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href='/#brands'
									className='hover:underline underline-offset-8 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
								>
									Our Brands
								</Link>
							</li>
							<li>
								<Link
									href='/#connect'
									className='hover:underline underline-offset-8 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
								>
									Connect
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='hover:underline underline-offset-8 decoration-2 decoration-[#D4AF37] transition-colors duration-300'
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>

					{/* Mobile Menu Button (Hamburger) */}
					<div className='md:hidden z-50'>
						<button
							onClick={toggleMenu}
							className='space-y-2 focus:outline-none text-[#cea263]'
							aria-label='Open Menu'
						>
							<span className='block w-8 h-0.5 bg-current'></span>
							<span className='block w-8 h-0.5 bg-current'></span>
							<span className='block w-8 h-0.5 bg-current'></span>
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Backdrop & Drawer */}
			<div
				className={`fixed inset-0 z-60 md:hidden transition-all duration-300 ${
					isMobileMenuOpen
						? 'opacity-100 visible'
						: 'opacity-0 invisible delay-300'
				}`}
			>
				{/* Backdrop */}
				<div
					className='absolute inset-0 bg-black/50 transition-opacity duration-300'
					onClick={toggleMenu}
				/>

				{/* Drawer */}
				<div
					className={`absolute top-0 right-0 h-fit w-2/3 max-w-xs bg-navy text-[#cea263] shadow-xl transform transition-transform duration-300 ease-out ${
						isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
				>
					<div className='flex flex-col h-full p-6'>
						{/* Close Button */}
						<div className='flex justify-end mb-8'>
							<button
								onClick={toggleMenu}
								className='space-y-2 focus:outline-none text-[#cea263]'
								aria-label='Close Menu'
							>
								<span
									className={`block w-8 h-0.5 bg-current transition-transform duration-300 rotate-45 translate-y-2.5`}
								></span>
								<span
									className={`block w-8 h-0.5 bg-current opacity-0`}
								></span>
								<span
									className={`block w-8 h-0.5 bg-current transition-transform duration-300 -rotate-45 -translate-y-2.5`}
								></span>
							</button>
						</div>

						{/* Navigation Links */}
						<nav>
							<ul className='flex flex-col space-y-6 uppercase tracking-widest text-lg font-light text-center'>
								<li>
									<Link
										href='/'
										onClick={toggleMenu}
										className='hover:text-white transition-colors block border-b border-[#cea263]/20 pb-2'
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										href='/#about'
										onClick={toggleMenu}
										className='hover:text-white transition-colors block border-b border-[#cea263]/20 pb-2'
									>
										About
									</Link>
								</li>
								<li>
									<Link
										href='/#brands'
										onClick={toggleMenu}
										className='hover:text-white transition-colors block border-b border-[#cea263]/20 pb-2'
									>
										Our Brands
									</Link>
								</li>
								<li>
									<Link
										href='/#connect'
										onClick={toggleMenu}
										className='hover:text-white transition-colors block border-b border-[#cea263]/20 pb-2'
									>
										Connect
									</Link>
								</li>
								<li>
									<Link
										href='/contact'
										onClick={toggleMenu}
										className='hover:text-white transition-colors block border-b border-[#cea263]/20 pb-2'
									>
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}
