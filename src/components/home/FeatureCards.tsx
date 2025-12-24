import Image from 'next/image';

const features = [
	{
		title: 'Our Heritage',
		subtitle: 'Cultural immersion & timeless tradition',
		image: '/assets/card-heritage.png',
		cta: 'Discover Heritage',
	},
	{
		title: 'Bespoke Celebrations',
		subtitle: 'Unforgettable moments & exclusive events',
		image: '/assets/card-wedding.png',
		cta: 'Plan Your Event',
	},
	{
		title: 'Curated Journeys',
		subtitle: 'Private escapes & luxury travel',
		image: '/assets/card-safari.png',
		cta: 'Explore Journeys',
	},
];

export default function FeatureCards() {
	return (
		<section className='py-20 md:py-28 bg-white'>
			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='group relative flex flex-col items-center text-center'
						>
							{/* Image Container */}
							<div className='relative w-full aspect-[4/5] mb-8 overflow-hidden'>
								<Image
									src={feature.image}
									alt={feature.title}
									fill
									className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
								/>
								{/* Subtle overlay */}
								<div className='absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500' />
							</div>

							{/* Text Content */}
							<h3 className='text-2xl font-serif text-navy mb-3'>
								{feature.title}
							</h3>
							<p className='text-sm text-charcoal/70 mb-6 font-light'>
								{feature.subtitle}
							</p>

							<button className='px-6 py-2 border border-gold text-navy uppercase text-xs tracking-widest hover:bg-gold hover:text-white transition-all duration-300'>
								{feature.cta}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
