'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import {
	BookOpen,
	Globe,
	Shield,
	CheckCircle,
	ExternalLink,
	AlertTriangle,
	Lock,
	Briefcase,
	Activity,
	Network,
	Edit,
	Scale,
	Mail,
} from 'lucide-react';

const sections = [
	{ id: 'introduction', label: '1. Introduction' },
	{ id: 'use-of-website', label: '2. Use of the Website' },
	{ id: 'intellectual-property', label: '3. Intellectual Property' },
	{ id: 'information-accuracy', label: '4. Information Accuracy' },
	{ id: 'external-links', label: '5. External Links' },
	{ id: 'limitation-of-liability', label: '6. Limitation of Liability' },
	{ id: 'privacy', label: '7. Privacy' },
	{ id: 'no-commercial-offer', label: '8. No Commercial Offer or Contract' },
	{ id: 'availability', label: '9. Availability and Continuity' },
	{ id: 'associated-brands', label: '10. Associated Brands' },
	{ id: 'changes', label: '11. Changes to These Terms' },
	{ id: 'governing-law', label: '12. Governing Law' },
	{ id: 'contact', label: '13. Contact' },
];

export default function TermsAndConditionsPage() {
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
						Terms & Conditions
					</motion.h1>
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
							id='introduction'
							title='1. Introduction'
							icon={<BookOpen className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Welcome to the Ceilão Collection website. These
								Terms and Conditions govern your access to and
								use of this website.
							</p>
							<p className='mb-4'>
								Ceilão Collection is a house of brands united by
								luxury hospitality and curated experiences. This
								website exists solely to present and showcase
								the brands, philosophy, and initiatives of
								Ceilão Collection.
							</p>
							<p>
								By accessing or using this website, you agree to
								be bound by these Terms and Conditions. If you
								do not agree, you should discontinue use of the
								website.
							</p>
						</Section>

						<Section
							id='use-of-website'
							title='2. Use of the Website'
							icon={<Globe className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								This website is provided for general
								informational and brand presentation purposes
								only.
							</p>
							<p className='mb-4'>
								You agree to use this website lawfully and
								respectfully. You must not:
							</p>
							<ul className='list-disc pl-5 space-y-2 mb-4'>
								<li>
									Use the website in any way that may damage,
									disable, or impair its functionality
								</li>
								<li>
									Attempt to gain unauthorized access to any
									part of the website or its systems
								</li>
								<li>
									Use the website for unlawful, fraudulent, or
									harmful purposes
								</li>
								<li>
									Copy, reproduce, or misuse website content
									without authorization
								</li>
							</ul>
							<p>
								Ceilão Collection reserves the right to restrict
								or terminate access to the website where misuse
								is suspected.
							</p>
						</Section>

						<Section
							id='intellectual-property'
							title='3. Intellectual Property'
							icon={<Shield className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								All content on this website, including text,
								images, branding, design, logos, and visual
								elements, is the property of Ceilão Collection
								or its associated brands and is protected by
								applicable intellectual property laws.
							</p>
							<p className='mb-4'>
								No content may be copied, reproduced,
								distributed, modified, or used without prior
								written permission from Ceilão Collection.
							</p>
							<p>
								Unauthorized use of any materials may result in
								legal action.
							</p>
						</Section>

						<Section
							id='information-accuracy'
							title='4. Information Accuracy'
							icon={
								<CheckCircle className='w-6 h-6 text-accent' />
							}
						>
							<p className='mb-4'>
								Ceilão Collection makes reasonable efforts to
								ensure that information presented on this
								website is accurate and current. However, the
								website is provided for general informational
								purposes only.
							</p>
							<p className='mb-4'>
								Ceilão Collection makes no warranties or
								representations, express or implied, regarding
								the completeness, accuracy, reliability, or
								availability of the website or its content.
							</p>
							<p>
								Information may be updated, modified, or removed
								at any time without notice.
							</p>
						</Section>

						<Section
							id='external-links'
							title='5. External Links'
							icon={
								<ExternalLink className='w-6 h-6 text-accent' />
							}
						>
							<p className='mb-4'>
								This website may contain links to external
								websites, including those of associated Ceilão
								Collection brands.
							</p>
							<p className='mb-4'>
								These links are provided for convenience and
								informational purposes only. Ceilão Collection
								does not control and is not responsible for the
								content, policies, or practices of external
								websites.
							</p>
							<p>
								Access to such websites is at the user&apos;s
								own discretion and risk.
							</p>
						</Section>

						<Section
							id='limitation-of-liability'
							title='6. Limitation of Liability'
							icon={
								<AlertTriangle className='w-6 h-6 text-accent' />
							}
						>
							<p className='mb-4'>
								To the fullest extent permitted by law, Ceilão
								Collection shall not be liable for any direct,
								indirect, incidental, consequential, or special
								damages arising from or related to your use of
								this website.
							</p>
							<p className='mb-4'>
								This includes, but is not limited to:
							</p>
							<ul className='list-disc pl-5 space-y-2 mb-4'>
								<li>Loss of data</li>
								<li>Loss of business or opportunity</li>
								<li>Service interruptions</li>
								<li>Website errors or omissions</li>
							</ul>
							<p>
								Use of this website is at your own discretion
								and risk.
							</p>
						</Section>

						<Section
							id='privacy'
							title='7. Privacy'
							icon={<Lock className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Your use of this website is also governed by the
								Ceilão Collection Privacy Policy.
							</p>
							<p>
								By using this website, you acknowledge and
								accept the practices described in the Privacy
								Policy.
							</p>
						</Section>

						<Section
							id='no-commercial-offer'
							title='8. No Commercial Offer or Contract'
							icon={<Briefcase className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								This website is intended solely for
								informational and brand presentation purposes.
							</p>
							<p className='mb-4'>
								Nothing on this website constitutes a binding
								offer, contract, or commercial agreement.
							</p>
							<p>
								Any services, experiences, or engagements
								referenced are provided by the respective Ceilão
								Collection brands, each operating independently
								under their own terms and conditions.
							</p>
						</Section>

						<Section
							id='availability'
							title='9. Availability and Continuity'
							icon={<Activity className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Ceilão Collection does not guarantee that the
								website, or any part of it, will always be
								available, uninterrupted, secure, or free from
								errors.
							</p>
							<p>
								Access to the website may be suspended,
								restricted, or withdrawn at any time without
								notice.
							</p>
						</Section>

						<Section
							id='associated-brands'
							title='10. Associated Brands'
							icon={<Network className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Ceilão Collection operates as a parent brand
								overseeing multiple associated brands and
								initiatives.
							</p>
							<p className='mb-4'>
								Each associated brand may operate independently
								and may maintain its own policies, terms, and
								conditions.
							</p>
							<p>
								Ceilão Collection is not responsible for the
								independent operations, services, or engagements
								of its associated brands beyond its role as a
								parent entity.
							</p>
						</Section>

						<Section
							id='changes'
							title='11. Changes to These Terms'
							icon={<Edit className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Ceilão Collection reserves the right to modify
								or update these Terms and Conditions at any
								time.
							</p>
							<p className='mb-4'>
								Any updates will be effective immediately upon
								publication on this website.
							</p>
							<p>
								Continued use of this website constitutes
								acceptance of any revised Terms and Conditions.
							</p>
						</Section>

						<Section
							id='governing-law'
							title='12. Governing Law'
							icon={<Scale className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								These Terms and Conditions shall be governed by
								and interpreted in accordance with the laws of
								the Democratic Socialist Republic of Sri Lanka.
							</p>
							<p>
								Any disputes arising in connection with these
								Terms shall be subject to the exclusive
								jurisdiction of the courts of Sri Lanka.
							</p>
						</Section>

						<Section
							id='contact'
							title='13. Contact'
							icon={<Mail className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								For questions regarding these Terms and
								Conditions, please contact:
							</p>
							<ul className='space-y-2 font-medium'>
								<li className='text-primary'>
									Ceilão Collection
								</li>
								<li>
									Email:{' '}
									<a
										href='mailto:navindu@ceilaocollection.com'
										className='hover:text-accent font-normal transition-colors'
									>
										navindu@ceilaocollection.com
									</a>
								</li>
								<li>
									Phone:{' '}
									<a
										href='tel:+94771319489'
										className='hover:text-accent font-normal transition-colors'
									>
										+94 77 131 9489
									</a>
								</li>
							</ul>
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
