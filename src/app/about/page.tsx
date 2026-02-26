import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';

export const metadata: Metadata = {
	title: 'About Us | Ceilão Collection',
	description:
		'Discover the vision and mission of Ceilão Collection, a leading name in Sri Lankan luxury hospitality.',
};

export default function About() {
	return (
		<main>
			<section className='py-24 bg-white'>
				{/* Content */}
				<div className='relative z-10 text-center px-4 w-fit mx-auto py-2 mt-16'>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-serif text-navy tracking-wide'>
						About Us
					</h1>
					<div className='w-24 h-0.5 bg-[#d4af37] mx-auto mt-6' />
				</div>
				<div className='container mx-auto px-6 flex flex-col md:flex-row mt-16'>
					<div className='w-full max-w-4xl mx-auto'>
						<h2 className='text-3xl font-serif text-navy mb-6'>
							Vision Statement
						</h2>
						<div className={`w-20 h-0.5 bg-[#d4af37] mb-6`}></div>
						<p className='text-charcoal/80 font-light leading-relaxed mb-16 max-w-2xl'>
							To be the leading name in Sri Lankan luxury
							hospitality, where international excellence meets
							the soul of the island. We envision a future where
							our diverse brands deliver unique experiences and
							signature services that leave a lasting impression
							on our guests and a meaningful legacy in our
							community.
						</p>
					</div>
					<div className='w-full max-w-4xl mx-auto'>
						<h2 className='text-3xl font-serif text-navy mb-6'>
							Mission Statement
						</h2>
						<div className={`w-20 h-0.5 bg-[#d4af37] mb-6`}></div>
						<p className='text-charcoal/80 font-light leading-relaxed mb-16 max-w-2xl'>
							Ceilão Collection unites a family of luxury
							hospitality brands through elegance and purpose. By
							blending exceptional service with Sri Lankan warmth,
							we craft unique experiences that go beyond
							luxury—creating moments that last a lifetime while
							fostering meaningful change through the Hopeful
							Foundation.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
