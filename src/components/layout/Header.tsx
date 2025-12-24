import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='absolute top-0 w-full z-50 bg-transparent py-6 border-b border-white/10'>
			<div className='container mx-auto px-6 flex justify-between items-center'>
				{/* Logo */}
				<div className='relative w-40 h-20 md:w-48 md:h-24'>
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

				{/* Navigation */}
				<nav className='hidden md:block'>
					<ul className='flex space-x-8 text-white uppercase tracking-widest text-sm font-medium'>
						<li>
							<Link
								href='/'
								className='hover:text-gold transition-colors duration-300'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='/about'
								className='hover:text-gold transition-colors duration-300'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href='/services'
								className='hover:text-gold transition-colors duration-300'
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								href='/journeys'
								className='hover:text-gold transition-colors duration-300'
							>
								Journeys
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								className='hover:text-gold transition-colors duration-300'
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				{/* Mobile Menu Icon (Placeholder for functionality) */}
				<div className='md:hidden text-white'>
					<button className='space-y-2'>
						<span className='block w-8 h-0.5 bg-white'></span>
						<span className='block w-8 h-0.5 bg-white'></span>
						<span className='block w-8 h-0.5 bg-white'></span>
					</button>
				</div>
			</div>
		</header>
	);
}
