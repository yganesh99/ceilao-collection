import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/common/PageHeader';

export const metadata: Metadata = {
	title: 'Curated Journeys | Ceilão Collection',
	description:
		'Explore our curated luxury journeys through Sri Lanka. From the misty hills to the wild southern coasts.',
};

const journeys = [
	{
		title: 'The Tea Country Escape',
		days: '4 Days / 3 Nights',
		description:
			'Retreat to the misty highlands of Nuwara Eliya and Ella. Stay in heritage planters’ bungalows, witness the art of tea making, and enjoy high tea amidst the rolling hills.',
		image: '/assets/card-heritage.png',
	},
	{
		title: 'Wilderness & Safari',
		days: '5 Days / 4 Nights',
		description:
			'Experience the thrill of the wild in Yala and Udawalawe. Private game drives, luxury tented camps, and encounters with the majestic Sri Lankan leopard and elephant.',
		image: '/assets/card-safari.png',
	},
	{
		title: 'Coastal Bliss',
		days: '6 Days / 5 Nights',
		description:
			'Unwind on the pristine beaches of the south. Private villas in Mirissa and Tangalle, whale watching expeditions, and sunset cruises on the Indian Ocean.',
		image: '/assets/card-wedding.png', // Fallback image fitting luxury
	},
];

export default function Journeys() {
	return (
		<main>
			<PageHeader
				title='Curated Journeys'
				subtitle='Immersive itineraries designed for the discerning traveler.'
				image='/assets/card-safari.png'
			/>

			<section className='py-24 bg-champagne'>
				<div className='container mx-auto px-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
						{journeys.map((journey, index) => (
							<div
								key={index}
								className='bg-white group cursor-pointer border border-transparent hover:border-gold/30 transition-all duration-300'
							>
								{/* Image */}
								<div className='relative w-full aspect-[4/3] overflow-hidden'>
									<Image
										src={journey.image}
										alt={journey.title}
										fill
										className='object-cover transition-transform duration-700 group-hover:scale-105'
									/>
									<div className='absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors' />
								</div>

								{/* Content */}
								<div className='p-8 text-center'>
									<p className='text-xs font-bold tracking-widest text-gold mb-3 uppercase'>
										{journey.days}
									</p>
									<h3 className='text-2xl font-serif text-navy mb-4'>
										{journey.title}
									</h3>
									<p className='text-sm text-charcoal/70 font-light leading-relaxed mb-6'>
										{journey.description}
									</p>
									<button className='text-xs uppercase tracking-widest border-b border-gold pb-1 hover:text-gold transition-colors'>
										View Itinerary
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
