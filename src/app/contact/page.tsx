import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
	title: 'Contact Us | Ceilão Collection',
	description:
		'Start your journey with Ceilão Collection. Contact us for bespoke travel enquiries, event planning, and reservations.',
};

export default function Contact() {
	return (
		<main>
			<PageHeader
				title='Begin Your Journey'
				subtitle='Allow us to curate your perfect Sri Lankan experience.'
				image='/assets/hero.png'
			/>

			<section className='py-24 bg-white'>
				<div className='container mx-auto px-6'>
					<div className='w-full max-w-4xl mx-auto text-center'>
						<h2 className='text-3xl font-serif text-navy mb-8'>
							Get in Touch
						</h2>
						<p className='text-charcoal/80 font-light leading-relaxed mb-16 max-w-2xl mx-auto'>
							Whether you are planning a private escape, a
							destination wedding, or simply have a query about
							our collection, our team is at your disposal.
						</p>

						<div className='flex flex-col items-center gap-12'>
							{/* Email & Phone Row */}
							<div className='flex flex-col md:flex-row gap-12 md:gap-32 items-center justify-center w-full'>
								<div className='flex flex-col items-center gap-4 group'>
									<div className='w-12 h-12 flex items-center justify-center rounded-full bg-champagne/30 text-navy group-hover:bg-navy group-hover:text-gold transition-all duration-300'>
										<FaEnvelope size={24} />
									</div>
									<a
										href='mailto:concierge@ceilaocollection.com'
										className='text-charcoal/70 font-light hover:text-gold transition-colors text-lg'
									>
										concierge@ceilaocollection.com
									</a>
								</div>

								<div className='flex flex-col items-center gap-4 group'>
									<div className='w-12 h-12 flex items-center justify-center rounded-full bg-champagne/30 text-navy group-hover:bg-navy group-hover:text-gold transition-all duration-300'>
										<FaPhone size={24} />
									</div>
									<a
										href='tel:+94112345678'
										className='text-charcoal/70 font-light hover:text-gold transition-colors text-lg'
									>
										+94 11 234 5678
									</a>
								</div>
							</div>

							{/* WhatsApp Row */}
							<div className='flex flex-col items-center gap-4 md:ml-20 group'>
								<a
									href='https://wa.me/94112345678'
									target='_blank'
									rel='noopener noreferrer'
									className='w-14 h-14 flex items-center justify-center rounded-full bg-champagne/30 text-navy group-hover:bg-navy group-hover:text-gold transition-all duration-300'
								>
									<FaWhatsapp size={32} />
								</a>
								<span className='text-charcoal/70 font-light hover:text-gold transition-colors text-lg'>
									Click to Chat
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
