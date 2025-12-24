import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';

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
							<form className='space-y-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div className='flex flex-col'>
										<label
											htmlFor='firstName'
											className='text-xs uppercase tracking-widest text-navy mb-2'
										>
											First Name
										</label>
										<input
											type='text'
											id='firstName'
											className='border-b border-gray-300 py-3 focus:border-gold focus:outline-none bg-transparent transition-colors font-light'
											placeholder='Enter your first name'
										/>
									</div>
									<div className='flex flex-col'>
										<label
											htmlFor='lastName'
											className='text-xs uppercase tracking-widest text-navy mb-2'
										>
											Last Name
										</label>
										<input
											type='text'
											id='lastName'
											className='border-b border-gray-300 py-3 focus:border-gold focus:outline-none bg-transparent transition-colors font-light'
											placeholder='Enter your last name'
										/>
									</div>
								</div>

								<div className='flex flex-col'>
									<label
										htmlFor='email'
										className='text-xs uppercase tracking-widest text-navy mb-2'
									>
										Email Address
									</label>
									<input
										type='email'
										id='email'
										className='border-b border-gray-300 py-3 focus:border-gold focus:outline-none bg-transparent transition-colors font-light'
										placeholder='Enter your email address'
									/>
								</div>

								<div className='flex flex-col'>
									<label
										htmlFor='interest'
										className='text-xs uppercase tracking-widest text-navy mb-2'
									>
										Area of Interest
									</label>
									<select
										id='interest'
										className='border-b border-gray-300 py-3 focus:border-gold focus:outline-none bg-transparent transition-colors font-light text-charcoal/70'
									>
										<option>General Enquiry</option>
										<option>Curated Journeys</option>
										<option>Weddings & Events</option>
										<option>Private Villas</option>
									</select>
								</div>

								<div className='flex flex-col'>
									<label
										htmlFor='message'
										className='text-xs uppercase tracking-widest text-navy mb-2'
									>
										Message
									</label>
									<textarea
										id='message'
										rows={4}
										className='border-b border-gray-300 py-3 focus:border-gold focus:outline-none bg-transparent transition-colors font-light resize-none'
										placeholder='How can we assist you?'
									></textarea>
								</div>

								<div className='pt-6'>
									<button
										type='submit'
										className='px-10 py-4 bg-navy text-white uppercase text-xs tracking-widest hover:bg-gold hover:text-navy transition-all duration-500 ease-out'
									>
										Send Enquiry
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
