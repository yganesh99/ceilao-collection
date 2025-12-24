import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/common/PageHeader';

export const metadata: Metadata = {
	title: 'Bespoke Services | Ceilão Collection',
	description:
		'Experience our range of bespoke services, from private villa stays to exclusive event planning in Sri Lanka.',
};

const services = [
	{
		title: 'Private Villa Management',
		description:
			'Unlock the doors to Sri Lanka’s most exclusive private estates. Our portfolio includes colonial bungalows, beachfront villas, and hill country retreats, all fully staffed and managed to the highest international standards.',
		image: '/assets/card-heritage.png', // Reusing available assets
		reverse: false,
	},
	{
		title: 'Destination Weddings',
		description:
			'Celebrate your love amidst the breathtaking landscapes of the island. We specialize in intimate, high-end weddings, handling every detail from floral design to gourmet catering, ensuring a seamless and magical day.',
		image: '/assets/card-wedding.png',
		reverse: true,
	},
	{
		title: 'Luxury Transport & Concierge',
		description:
			'Travel in absolute comfort with our fleet of luxury vehicles and private air charters. Our dedicated concierge team is available 24/7 to curate your daily itinerary, secure reservations, and fulfill any request.',
		image: '/assets/card-safari.png',
		reverse: false,
	},
];

export default function Services() {
	return (
		<main>
			<PageHeader
				title='Bespoke Services'
				subtitle='Going beyond the exceptional to craft the extraordinary.'
				image='/assets/card-wedding.png'
			/>

			<section className='py-20 bg-white'>
				<div className='container mx-auto px-6'>
					<div className='flex flex-col gap-24'>
						{services.map((service, index) => (
							<div
								key={index}
								className={`flex flex-col ${
									service.reverse
										? 'md:flex-row-reverse'
										: 'md:flex-row'
								} items-center gap-12 md:gap-20`}
							>
								{/* Image */}
								<div className='w-full md:w-1/2'>
									<div className='relative aspect-3/2 w-full overflow-hidden'>
										<Image
											src={service.image}
											alt={service.title}
											fill
											className='object-cover grayscale hover:grayscale-0 transition-all duration-700'
										/>
									</div>
								</div>

								{/* Content */}
								<div className='w-full md:w-1/2 text-center md:text-left'>
									<h2 className='text-3xl font-serif text-navy mb-6'>
										{service.title}
									</h2>
									<div
										className={`w-12 h-0.5 bg-gold mb-6 ${
											service.reverse ? 'md:ml-auto' : ''
										} mx-auto md:mx-0`}
									/>
									<p className='text-charcoal/80 font-light leading-relaxed text-lg'>
										{service.description}
									</p>
									<button className='mt-8 px-8 py-3 border border-navy text-navy uppercase text-xs tracking-widest hover:bg-navy hover:text-white transition-all duration-300'>
										Enquire Now
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
