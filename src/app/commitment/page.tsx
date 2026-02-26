'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Globe, Heart, Leaf, Shield, CheckCircle } from 'lucide-react';

const sections = [
	{ id: 'spirit', label: '1. The Spirit of Ceilão Collection' },
	{ id: 'social-accountability', label: '2. Social Accountability' },
	{
		id: 'environmental-responsibility',
		label: '3. Environmental Responsibility',
	},
	{ id: 'integrity', label: '4. Integrity & Leadership' },
	{ id: 'commitment-in-practice', label: '5. Commitment in Practice' },
];

export default function CommitmentPage() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	return (
		<main
			ref={containerRef}
			className='bg-background min-h-screen'
		>
			<div className='container mx-auto px-4 md:px-6 py-16 md:py-24 mt-20'>
				<div className='relative z-10 text-center px-4 max-w-4xl mx-auto mb-12'>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className='text-4xl md:text-7xl font-playfair text-[#1f2b44] tracking-wide'
					>
						Our Commitment
					</motion.h1>
					<div className='w-24 h-0.5 bg-[#d4af37] mx-auto mt-6' />
					<div className='w-24 h-0.5 bg-accent mx-auto mt-4' />
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 1 }}
						className='mt-4 text-[#1f2b44]/60 text-xs font-inter uppercase tracking-widest'
					>
						Last Updated: February 2026
					</motion.div>
				</div>
				<div className='flex flex-col lg:flex-row gap-12 lg:gap-20'>
					{/* Sticky Sidebar Navigation */}
					<aside className='hidden lg:block w-72 shrink-0'>
						<div className='sticky top-32 space-y-2 border-l border-primary/10 pl-6'>
							<h3 className='font-playfair text-xl text-[#1f2b44] mb-6'>
								Contents
							</h3>
							{sections.map((section) => (
								<ScrollLink
									key={section.id}
									to={section.id}
									smooth={true}
									duration={800}
									offset={-100}
									className='block text-sm text-foreground/60 hover:text-accent cursor-pointer transition-colors py-1.5 font-inter'
									activeClass='text-accent font-medium'
									spy={true}
								>
									{section.label}
								</ScrollLink>
							))}
						</div>
					</aside>

					{/* Main Content */}
					<div className='flex-1 max-w-4xl font-inter text-foreground/80 leading-relaxed space-y-20'>
						<Section
							id='spirit'
							title='1. The Spirit of Ceilão Collection'
							icon={<Globe className='w-6 h-6 text-accent' />}
						>
							<p>
								Ceilão Collection is guided by the belief that
								true luxury extends beyond experience. It
								reflects responsibility, stewardship, and
								lasting respect for the people, cultures, and
								environments that shape our identity. As a house
								of brands united by luxury hospitality and
								curated experiences, we are committed to
								ensuring our presence contributes meaningfully
								and responsibly to the world around us.
							</p>
						</Section>

						<Section
							id='social-accountability'
							title='2. Social Accountability: The Hopeful Foundation'
							icon={<Heart className='w-6 h-6 text-accent' />}
						>
							<p>
								Through the Hopeful Foundation, Ceilão
								Collection supports initiatives that empower
								future generations, preserve cultural heritage,
								and expand access to meaningful opportunities.
								These efforts include grassroots programs,
								educational support, and creating pathways for
								individuals and communities to experience
								travel, celebration, and moments of joy that
								inspire dignity, confidence, and lasting impact.
							</p>
						</Section>

						<Section
							id='environmental-responsibility'
							title='3. Environmental and Cultural Responsibility'
							icon={<Leaf className='w-6 h-6 text-accent' />}
						>
							<p>
								We are committed to honoring and preserving the
								natural and cultural heritage of our island.
								Ceilão Collection and its associated brands
								operate with thoughtful consideration for
								environmental sustainability and cultural
								integrity, ensuring that our activities respect
								the landscapes, traditions, and communities that
								define our identity.
							</p>
						</Section>

						<Section
							id='integrity'
							title='4. Integrity, Stewardship, and Leadership'
							icon={<Shield className='w-6 h-6 text-accent' />}
						>
							<p>
								Integrity guides every decision we make. We
								uphold the highest standards of transparency,
								accountability, and ethical conduct across all
								Ceilão Collection brands. Our leadership is
								grounded in a long-term vision to build a legacy
								defined by trust, responsibility, and meaningful
								contribution.
							</p>
						</Section>

						<Section
							id='commitment-in-practice'
							title='5. Commitment in Practice'
							icon={
								<CheckCircle className='w-6 h-6 text-accent' />
							}
						>
							<p>
								Our commitment is ongoing and intentional. We
								seek to ensure that every experience connected
								to Ceilão Collection reflects our values and
								contributes to a broader purpose —supporting
								communities, preserving heritage, and creating
								meaningful and lasting positive impact for
								future generations.
							</p>
						</Section>
					</div>
				</div>
			</div>
		</main>
	);
}

function Section({
	id,
	title,
	icon,
	children,
}: {
	id: string;
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<motion.section
			id={id}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6 }}
			className='scroll-mt-32'
		>
			<div className='flex items-center gap-4 mb-6 border-b border-primary/10 pb-4'>
				{icon}
				<h2 className='text-2xl md:text-3xl font-playfair text-[#1f2b44]'>
					{title}
				</h2>
			</div>
			<div className='pl-2 md:pl-10'>{children}</div>
		</motion.section>
	);
}
