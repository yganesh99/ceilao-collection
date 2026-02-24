'use client';

import Image from 'next/image';
import LaunchingSoonModal from '../common/LaunchingSoonModal';
import { useState } from 'react';

const features = [
	{
		title: 'Our Heritage',
		subtitle:
			'Ceilão Travel & Tours curates journeys across Sri Lanka for the discerning traveler seeking depth, authenticity, and refined luxury. Each experience is handcrafted to reveal an island not just seen, but felt.',
		image: '/assets/ceilao-tours-logo.png',
		cta: 'Discover Heritage',
	},
	{
		title: 'Bespoke Celebrations',
		subtitle:
			'Ceilão Events curates exclusive, intimate celebrations for those who seek more than just a moment. We craft lasting memories through thoughtful detail and quiet precision, weaving each experience into your story.',
		image: '/assets/ceilao-events-logo.png',
		cta: 'Plan Your Event',
		text: 'Ceilão Events is currently being refined. We look forward to unveiling it soon.',
	},
	{
		title: 'Curated Journeys',
		subtitle:
			'The Hopeful Foundation empowers future generations and preserves our heritage through grassroots initiatives. We create pathways for our community to share in the joy of travel and celebration, offering experiences that inspire, uplift, and endure.',
		image: '/assets/hopeful-foundation.png',
		cta: 'Explore Journeys',
		text: 'The Hopeful Foundation’s initiatives are currently being shaped and will be unveiled soon.',
	},
];

export default function FeatureCards() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalText, setModalText] = useState('');

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsModalOpen(true);
	};

	return (
		<section
			id='brands'
			className='py-12 md:py-10 bg-white'
		>
			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='group relative flex flex-col items-center text-left h-full'
						>
							{/* Image Container */}
							<div
								className={`relative flex justify-center w-full aspect-4/5 mb-4 overflow-hidden h-50 shrink-0 ${index === 0 ? 'mr-16' : 'justify-center'}`}
							>
								<Image
									src={feature.image}
									alt={feature.title}
									// fill
									height={300}
									width={300}
									className='object-contain transition-transform duration-700 ease-out group-hover:scale-105'
								/>
								{/* Subtle overlay */}
								{/* <div className='absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500' /> */}
							</div>

							<p className='text-sm md:text-[14px] text-navy mb-6 font-light grow'>
								{feature.subtitle}
							</p>

							{feature.title === 'Curated Journeys' ||
							feature.title === 'Bespoke Celebrations' ? (
								<button
									onClick={(e) => {
										setModalText(feature.text || '');
										handleClick(e);
									}}
									className='mt-auto px-6 py-2 border border-gold text-white bg-navy uppercase text-xs tracking-widest hover:bg-gold hover:text-white transition-all duration-300'
								>
									Visit Site
								</button>
							) : (
								<a
									href='https://ceilaotravel.com/'
									target='_blank'
									rel='noopener noreferrer'
									className='mt-auto px-6 py-2 border border-gold text-white bg-navy uppercase text-xs tracking-widest hover:bg-gold hover:text-white transition-all duration-300 inline-flex items-center justify-center'
								>
									Visit Site
								</a>
							)}
						</div>
					))}
				</div>
			</div>
			<LaunchingSoonModal
				isOpen={isModalOpen}
				text={modalText}
				onClose={() => setIsModalOpen(false)}
			/>
		</section>
	);
}
