import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/common/PageHeader';

export const metadata: Metadata = {
	title: 'About Us | Ceilão Collection',
	description:
		'Discover the heritage and legacy of Ceilão Collection. We craft bespoke luxury experiences in Sri Lanka, rooted in tradition and elegance.',
};

export default function About() {
	return (
		<main>
			<PageHeader
				title='Our Heritage'
				subtitle='A legacy of timeless elegance and authentic Sri Lankan hospitality.'
				image='/assets/hero.png'
			/>

			{/* Introduction Section */}
			<section className='py-20 md:py-32 bg-white'>
				<div className='container mx-auto px-6'>
					<div className='flex flex-col md:flex-row items-center gap-16'>
						<div className='w-full md:w-1/2'>
							<div className='relative aspect-4/5 w-full overflow-hidden'>
								<Image
									src='/assets/card-heritage.png'
									alt='Sri Lankan Heritage'
									fill
									className='object-cover hover:scale-105 transition-transform duration-700'
								/>
							</div>
						</div>
						<div className='w-full md:w-1/2'>
							<h2 className='text-3xl md:text-5xl font-serif text-navy mb-8'>
								The Art of Belonging
							</h2>
							<p className='text-charcoal/80 leading-relaxed mb-6 font-light'>
								Founded on the principles of grace and
								exclusivity, Ceilão Collection is more than a
								luxury brand; it is a custodian of Sri Lankan
								culture. Our journey began with a simple desire:
								to share the untold stories of this resplendent
								island with the world’s most discerning
								travelers.
							</p>
							<p className='text-charcoal/80 leading-relaxed mb-6 font-light'>
								From the misty tea plantations of the central
								highlands to the pristine coasts of the south,
								we curate spaces and moments that resonate with
								the soul. We believe in slow travel, where every
								second is savored, and every connection is
								meaningful.
							</p>
							<div className='w-24 h-0.5 bg-gold mt-8' />
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className='py-24 bg-champagne'>
				<div className='container mx-auto px-6 text-center'>
					<h2 className='text-3xl md:text-4xl font-serif text-navy mb-16'>
						Our Core Values
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
						<div className='p-8 border border-gold/20 bg-white/50 hover:bg-white transition-colors duration-500'>
							<h3 className='text-xl font-serif text-navy mb-4'>
								Authenticity
							</h3>
							<p className='text-sm text-charcoal/70 font-light leading-relaxed'>
								We honor the true spirit of Sri Lanka, embracing
								local traditions, craftsmanship, and community
								in everything we do.
							</p>
						</div>
						<div className='p-8 border border-gold/20 bg-white/50 hover:bg-white transition-colors duration-500'>
							<h3 className='text-xl font-serif text-navy mb-4'>
								Exclusivity
							</h3>
							<p className='text-sm text-charcoal/70 font-light leading-relaxed'>
								Our journeys are private, bespoke, and tailored
								to the individual, ensuring unmatched privacy
								and personal attention.
							</p>
						</div>
						<div className='p-8 border border-gold/20 bg-white/50 hover:bg-white transition-colors duration-500'>
							<h3 className='text-xl font-serif text-navy mb-4'>
								Sustainability
							</h3>
							<p className='text-sm text-charcoal/70 font-light leading-relaxed'>
								We are guardians of the land, committed to
								preserving the natural beauty and biodiversity
								of our island home.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
