import Link from 'next/link';

export default function About() {
	return (
		<section
			id='about'
			className='bg-champagne py-4'
		>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-32'>
				<div className='bg-navy py-4 sm:py-20 md:py-20 px-1 sm:px-10 lg:px-20 text-center shadow-xl'>
					<h1 className='text-xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 tracking-wide font-serif text-[#cea263]'>
						CEILÃO COLLECTION
					</h1>

					<p className='text-white text-sm sm:text-xl justify-center px-0.5 sm:px-1 lg:px-20 mb-4 mt-10'>
						Ceilão Collection is a house of brands united by luxury
						hospitality and curated experiences. We blend
						exceptional service with the authentic soul of our
						island, ensuring the heartfelt warmth of our nation is
						present at every guest touchpoint. <br /> <br />
						We believe true luxury is not simply experienced, but
						remembered. <br /> <br />
						Our legacy is rooted in the land we love. Through our
						collection wide social accountability approach, each
						experience with Ceilão Collection contributes to
						meaningful and lasting change within the communities we
						call home.
					</p>
				</div>
			</div>
		</section>
	);
}
