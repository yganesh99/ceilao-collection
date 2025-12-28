import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const ConnectWithUs = () => {
	const brands = [
		{
			name: 'Ceilão Collection',
			id: 1,
			imageSrc: '/assets/logo.png',
		},
		{
			name: 'Ceilão Travels & Tours',
			id: 2,
			imageSrc: '/assets/ceilao-tours-logo.png',
		},
		{
			name: 'Ceilão Events',
			id: 3,
			imageSrc: '/assets/ceilao-events-logo.png',
		},
		{
			name: 'Hopeful Foundation',
			id: 4,
			imageSrc: '/assets/hopeful-foundation.png',
		},
	];

	const socialLinks = [
		{ icon: FaInstagram, href: '#', label: 'Instagram' },
		{ icon: FaFacebook, href: '#', label: 'Facebook' },
		{ icon: FaTiktok, href: '#', label: 'TikTok' },
		{ icon: FaLinkedin, href: '#', label: 'LinkedIn' },
	];

	return (
		<section
			id='connect'
			className='bg-champagne py-20 px-6 md:px-12'
		>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-4xl md:text-5xl font-serif text-navy text-center mb-16'>
					Connect
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
					{brands.map((brand) => (
						<div
							key={brand.id}
							className='flex flex-col items-center group'
						>
							{/* Logo */}
							<div className='w-48 h-24 mb-8 flex items-center justify-center rounded-lg bg-transparent backdrop-blur-sm transition-all duration-300 group-hover:border-navy/30'>
								<Image
									src={brand.imageSrc}
									alt={brand.name}
									width={160}
									height={80}
									className='object-contain'
								/>
							</div>

							{/* Social Icons */}
							<div className='flex items-center gap-6'>
								{socialLinks.map((social) => (
									<Link
										key={social.label}
										href={social.href}
										className='text-navy hover:text-gold transition-colors duration-300 transform hover:scale-110'
										aria-label={`${brand.name} on ${social.label}`}
									>
										<social.icon size={24} />
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ConnectWithUs;
