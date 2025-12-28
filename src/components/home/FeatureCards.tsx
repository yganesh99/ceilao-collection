import Image from 'next/image';

const features = [
	{
		title: 'Our Heritage',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		image: '/assets/ceilao-tours-logo.png',
		cta: 'Discover Heritage',
	},
	{
		title: 'Bespoke Celebrations',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		image: '/assets/ceilao-events-logo.png',
		cta: 'Plan Your Event',
	},
	{
		title: 'Curated Journeys',
		subtitle:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		image: '/assets/hopeful-foundation.png',
		cta: 'Explore Journeys',
	},
];

export default function FeatureCards() {
	return (
		<section className='py-12 md:py-10 bg-white'>
			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='group relative flex flex-col items-center text-center'
						>
							{/* Image Container */}
							<div className='relative flex justify-center w-full aspect-4/5 mb-4 overflow-hidden h-50'>
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

							<p className='text-sm text-navy mb-6 font-light'>
								{feature.subtitle}
							</p>

							<button className='px-6 py-2 border border-gold text-white bg-navy uppercase text-xs tracking-widest hover:bg-gold hover:text-white transition-all duration-300'>
								Visit Site
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
