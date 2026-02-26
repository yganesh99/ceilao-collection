import Image from 'next/image';

interface PageHeaderProps {
	title: string;
	subtitle?: string;
	image: string;
	video?: string;
}

export default function PageHeader({
	title,
	subtitle,
	image,
	video,
}: PageHeaderProps) {
	return (
		<section className='relative h-screen w-full overflow-hidden flex items-center justify-center'>
			{/* Background */}
			<div className='absolute inset-0'>
				{video ? (
					<video
						src={video}
						poster={image}
						autoPlay
						loop
						muted
						playsInline
						className='w-full h-full object-cover'
					/>
				) : (
					<Image
						src={image}
						alt={title}
						fill
						className='object-cover'
						priority
					/>
				)}
				{/* Overlay */}
				<div className='absolute inset-0 bg-black/40 bg-linear-to-b from-black/50 via-transparent to-black/30' />
			</div>

			{/* Content */}
			<div className='relative z-10 text-center text-white px-6 max-w-4xl pt-20'>
				<h1 className='text-4xl md:text-6xl lg:text-7xl mb-6 font-serif tracking-wide'>
					{title}
				</h1>
				{subtitle && (
					<p className='text-lg md:text-xl font-light tracking-wider opacity-90 leading-relaxed'>
						{subtitle}
					</p>
				)}
				{/* Decorative Line */}
				<div className='w-24 h-0.5 bg-gold mx-auto mt-8' />
			</div>
		</section>
	);
}
