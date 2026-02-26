'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LaunchingSoonModal from '../common/LaunchingSoonModal';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTiktok,
	FaWhatsapp,
} from 'react-icons/fa';
import LaunchingSoonModal2 from '../common/LaunchingSoonModal2';

const ConnectWithUs = () => {
	interface Social {
		icon: any;
		href: string;
		label: string;
	}

	interface Brand {
		name: string;
		id: number;
		imageSrc: string;
		text: string;
		socialLinks: Social[];
	}

	const brands = [
		{
			name: 'Ceilão Collection',
			id: 1,
			imageSrc: '/assets/logo.png',
			text: 'Unveiling Soon',
			socialLinks: [
				{
					icon: FaInstagram,
					href: 'https://www.instagram.com/ceilao.collection?igsh=MW5vMWVqa2ZpYm9mZw==',
					label: 'Instagram',
				},
				{
					icon: FaFacebook,
					href: 'https://www.facebook.com/share/1CcuqrZ8p3/?mibextid=wwXIfr',
					label: 'Facebook',
				},
				{
					icon: FaTiktok,
					href: 'https://www.tiktok.com/@ceilao.collection?_r=1&_t=ZS-94Dl1B661AL',
					label: 'TikTok',
				},
				{
					icon: FaWhatsapp,
					href: 'https://wa.me/94771319489',
					label: 'Whatsapp',
				},
			],
		},
		{
			name: 'Ceilão Travels & Tours',
			id: 2,
			imageSrc: '/assets/ceilao-tours-logo.png',
			text: 'Unveiling Soon',
			socialLinks: [
				{
					icon: FaInstagram,
					href: 'https://www.instagram.com/ceilao.travels?igsh=NHR2eHZmdDhsaDY=',
					label: 'Instagram',
				},
				{
					icon: FaFacebook,
					href: 'https://www.facebook.com/share/18869zyGwa/?mibextid=wwXIfr',
					label: 'Facebook',
				},
				{
					icon: FaTiktok,
					href: 'https://www.tiktok.com/@ceilao.travels?_r=1&_t=ZS-94CF0CH815A',
					label: 'TikTok',
				},
				{
					icon: FaWhatsapp,
					href: 'https://wa.me/94771319589',
					label: 'Whatsapp',
				},
			],
		},
		{
			name: 'Ceilão Events',
			id: 3,
			imageSrc: '/assets/ceilao-events-logo.png',
			text: 'Unveiling Soon',
			socialLinks: [
				{ icon: FaInstagram, href: '#', label: 'Instagram' },
				{ icon: FaFacebook, href: '#', label: 'Facebook' },
				{ icon: FaTiktok, href: '#', label: 'TikTok' },
				{ icon: FaWhatsapp, href: '#', label: 'Whatsapp' },
			],
		},
		{
			name: 'Hopeful Foundation',
			id: 4,
			imageSrc: '/assets/hopeful-foundation.png',
			text: 'Unveiling Soon',
			socialLinks: [
				{ icon: FaInstagram, href: '#', label: 'Instagram' },
				{ icon: FaFacebook, href: '#', label: 'Facebook' },
				{ icon: FaTiktok, href: '#', label: 'TikTok' },
				{ icon: FaWhatsapp, href: '#', label: 'Whatsapp' },
			],
		},
	];

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSocialClick = (e: React.MouseEvent, brand: Brand) => {
		if (
			brand.name === 'Ceilão Events' ||
			brand.name === 'Hopeful Foundation'
		) {
			e.preventDefault();
			setIsModalOpen(true);
		}
		return;
	};

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
								{brand.socialLinks.map((social) => (
									<Link
										target='_blank'
										rel='noopener noreferrer'
										key={social.label}
										href={social.href}
										onClick={(e: React.MouseEvent) => {
											handleSocialClick(e, brand);
										}}
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

			<LaunchingSoonModal2
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				text='Unveiling Soon'
				// text='We’re crafting something special. Stay tuned for updates.'
			/>
		</section>
	);
};

export default ConnectWithUs;
