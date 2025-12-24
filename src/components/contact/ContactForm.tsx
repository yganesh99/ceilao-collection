'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
	const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
		'idle'
	);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setStatus('submitting');

		// Simulate API call
		setTimeout(() => {
			setStatus('success');
		}, 1500);
	};

	if (status === 'success') {
		return (
			<div className='h-full flex flex-col items-center justify-center text-center p-12 border border-gold/20 bg-champagne/30 animate-fade-in'>
				<div className='w-16 h-16 mb-6 rounded-full border border-gold flex items-center justify-center text-gold text-2xl'>
					✓
				</div>
				<h3 className='text-2xl font-serif text-navy mb-4'>
					Thank You
				</h3>
				<p className='text-charcoal/80 font-light'>
					Your enquiry has been received. Our concierge team will be
					in touch shortly.
				</p>
				<button
					onClick={() => setStatus('idle')}
					className='mt-8 text-xs uppercase tracking-widest text-navy border-b border-navy pb-1 hover:text-gold hover:border-gold transition-colors'
				>
					Send Another Message
				</button>
			</div>
		);
	}

	return (
		<form
			className='space-y-6'
			onSubmit={handleSubmit}
		>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='flex flex-col'>
					<label
						htmlFor='firstName'
						className='text-xs uppercase tracking-widest text-navy mb-2'
					>
						First Name
					</label>
					<input
						required
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
						required
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
					required
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
					required
					id='message'
					rows={4}
					className='border-b border-gray-300 py-3 focus:border-gold focus:outline-none bg-transparent transition-colors font-light resize-none'
					placeholder='How can we assist you?'
				></textarea>
			</div>

			<div className='pt-6'>
				<button
					type='submit'
					disabled={status === 'submitting'}
					className='px-10 py-4 bg-navy text-white uppercase text-xs tracking-widest hover:bg-gold hover:text-navy disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 ease-out flex items-center gap-2'
				>
					{status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
				</button>
			</div>
		</form>
	);
}
