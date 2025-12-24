import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import ContactForm from '@/components/contact/ContactForm';

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
					<div className='flex flex-col lg:flex-row gap-16 lg:gap-24'>
						{/* Contact Info */}
						<div className='w-full lg:w-1/3 text-center lg:text-left'>
							<h2 className='text-3xl font-serif text-navy mb-8'>
								Get in Touch
							</h2>
							<p className='text-charcoal/80 font-light leading-relaxed mb-10'>
								Whether you are planning a private escape, a
								destination wedding, or simply have a query
								about our collection, our team is at your
								disposal.
							</p>

							<div className='space-y-8'>
								<div>
									<h3 className='text-sm font-bold uppercase tracking-widest text-navy mb-2'>
										Head Office
									</h3>
									<p className='text-charcoal/70 font-light'>
										No. 45, Flower Road, <br />
										Colombo 07, Sri Lanka
									</p>
								</div>
								<div>
									<h3 className='text-sm font-bold uppercase tracking-widest text-navy mb-2'>
										Email
									</h3>
									<a
										href='mailto:concierge@ceilaocollection.com'
										className='text-charcoal/70 font-light hover:text-gold transition-colors'
									>
										concierge@ceilaocollection.com
									</a>
								</div>
								<div>
									<h3 className='text-sm font-bold uppercase tracking-widest text-navy mb-2'>
										Phone
									</h3>
									<a
										href='tel:+94112345678'
										className='text-charcoal/70 font-light hover:text-gold transition-colors'
									>
										+94 11 234 5678
									</a>
								</div>
							</div>
						</div>

						{/* Form */}
						<div className='w-full lg:w-2/3'>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
