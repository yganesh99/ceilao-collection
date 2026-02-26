'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import {
	Shield,
	FileText,
	Scale,
	Network,
	Eye,
	Lock,
	Server,
	Globe,
	ExternalLink,
	UserCheck,
	Mail,
} from 'lucide-react';

const sections = [
	{ id: 'introduction', label: '1. Introduction and Commitment' },
	{ id: 'collection', label: '2. Information We Collect' },
	{ id: 'purpose', label: '3. Purpose and Legal Basis' },
	{ id: 'sharing', label: '4. Data Sharing and Disclosure' },
	{ id: 'cookies', label: '5. Cookies and Website Analytics' },
	{ id: 'retention', label: '6. Data Retention' },
	{ id: 'security', label: '7. Data Security' },
	{ id: 'international', label: '8. International Data Transfers' },
	{ id: 'external', label: '9. External Websites' },
	{ id: 'rights', label: '10. Your Rights' },
	{ id: 'contact', label: '11. Contact Information' },
];

export default function PrivacyPolicyPage() {
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
						Privacy Policy
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
							id='introduction'
							title='1. Introduction and Commitment'
							icon={<Shield className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Ceilão Collection is a house of brands united by
								luxury hospitality and curated experiences. This
								website is operated by Ceilão Collection and
								serves as a platform to present its associated
								brands and initiatives.
							</p>
							<p className='mb-4'>
								Ceilão Collection respects your privacy and is
								committed to protecting your personal
								information in accordance with the Sri Lanka
								Personal Data Protection Act No. 9 of 2022
								(PDPA) and applicable data protection
								principles.
							</p>
							<p className='mb-4'>
								As this website serves primarily as a brand
								showcase and point of contact, Ceilão Collection
								collects only limited personal information
								necessary to respond to inquiries and ensure the
								proper functionality, integrity, and security of
								the website.
							</p>
							<p>
								Ceilão Collection reserves the right to update
								this Privacy Policy at any time. The most
								current version will always be available on this
								website. Continued use of this website
								constitutes acceptance of any updates.
							</p>
						</Section>

						<Section
							id='collection'
							title='2. Information We Collect'
							icon={<FileText className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Ceilão Collection collects only the information
								necessary to maintain communication and ensure
								the proper operation of the website.
							</p>
							<p className='mb-2 font-medium text-[#1f2b44]'>
								Information You Voluntarily Provide
							</p>
							<p className='mb-2'>
								When you contact Ceilão Collection through the
								website, email, or other direct communication
								channels, we may collect:
							</p>
							<ul className='list-disc pl-5 space-y-2 mb-4'>
								<li>Name</li>
								<li>Email address</li>
								<li>Phone number (if provided)</li>
								<li>
									Any information you voluntarily include in
									your message or correspondence
								</li>
							</ul>
							<p className='mb-6'>
								This information is used solely to respond to
								inquiries and maintain appropriate
								communication.
							</p>

							<p className='mb-2 font-medium text-[#1f2b44]'>
								Automatically Collected Information
							</p>
							<p className='mb-2'>
								When you access this website, certain technical
								information may be collected automatically,
								including:
							</p>
							<ul className='list-disc pl-5 space-y-2 mb-4'>
								<li>IP address</li>
								<li>Browser type and version</li>
								<li>Device type</li>
								<li>Pages visited</li>
								<li>Date and time of access</li>
							</ul>
							<p className='mb-4'>
								This information is used to maintain website
								security, monitor performance, and improve user
								experience.
							</p>
							<p>
								Ceilão Collection does not intentionally collect
								sensitive personal information through this
								website.
							</p>
						</Section>

						<Section
							id='purpose'
							title='3. Purpose and Legal Basis for Processing'
							icon={<Scale className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Personal information is processed in accordance
								with applicable data protection laws and based
								on legitimate interest and consent.
							</p>
							<p className='mb-4'>
								Legitimate interest includes responding to
								inquiries, maintaining communication, ensuring
								website security, and improving website
								performance.
							</p>
							<p className='mb-4'>
								Consent applies where you voluntarily provide
								personal information through direct
								communication or contact forms.
							</p>
							<p>
								Ceilão Collection does not use personal
								information for unsolicited marketing without
								your explicit consent.
							</p>
						</Section>

						<Section
							id='sharing'
							title='4. Data Sharing and Disclosure'
							icon={<Network className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Ceilão Collection does not sell, rent, or trade
								personal information.
							</p>
							<p className='mb-4'>
								Personal information may be shared only where
								necessary and appropriate, including:
							</p>
							<ul className='list-disc pl-5 space-y-2 mb-4'>
								<li>
									With trusted service providers who support
									the operation, maintenance, and security of
									the website
								</li>
								<li>
									Where required by law, regulation, or legal
									process
								</li>
								<li>
									Where necessary to protect the rights,
									security, and integrity of Ceilão Collection
									and its associated brands
								</li>
							</ul>
							<p>
								Any such sharing is conducted in accordance with
								applicable data protection laws.
							</p>
						</Section>

						<Section
							id='cookies'
							title='5. Cookies and Website Analytics'
							icon={<Eye className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								This website may use cookies and analytics tools
								to understand how visitors interact with the
								website and to improve its functionality and
								performance.
							</p>
							<p className='mb-4'>These tools may collect:</p>
							<ul className='list-disc pl-5 space-y-2 mb-4'>
								<li>IP address</li>
								<li>Device and browser information</li>
								<li>Pages visited and duration of visit</li>
							</ul>
							<p>
								You may disable cookies through your browser
								settings. However, doing so may affect certain
								website functionality.
							</p>
						</Section>

						<Section
							id='retention'
							title='6. Data Retention'
							icon={<Lock className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Ceilão Collection retains personal information
								only for as long as necessary to:
							</p>
							<ul className='list-disc pl-5 space-y-2 mb-4'>
								<li>Respond to inquiries and correspondence</li>
								<li>Maintain appropriate internal records</li>
								<li>
									Comply with legal and regulatory obligations
								</li>
							</ul>
							<p>
								When personal information is no longer required,
								it is securely deleted or anonymized.
							</p>
						</Section>

						<Section
							id='security'
							title='7. Data Security'
							icon={<Server className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Ceilão Collection implements appropriate
								technical and organizational safeguards to
								protect personal information against
								unauthorized access, misuse, loss, alteration,
								or disclosure.
							</p>
							<p>
								While reasonable safeguards are in place, no
								method of electronic transmission or storage can
								be guaranteed to be completely secure.
							</p>
						</Section>

						<Section
							id='international'
							title='8. International Data Transfers'
							icon={<Globe className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Service providers engaged in operating this
								website, including hosting providers or
								analytics services, may process data outside Sri
								Lanka.
							</p>
							<p>
								Where such processing occurs, Ceilão Collection
								ensures appropriate safeguards are implemented
								in accordance with applicable data protection
								laws.
							</p>
						</Section>

						<Section
							id='external'
							title='9. External Websites'
							icon={
								<ExternalLink className='w-6 h-6 text-accent' />
							}
						>
							<p className='mb-4'>
								This website may contain links to external
								websites, including those of associated Ceilão
								Collection brands.
							</p>
							<p>
								Ceilão Collection is not responsible for the
								privacy practices, policies, or content of
								external websites. Users are encouraged to
								review the privacy policies of those websites
								independently.
							</p>
						</Section>

						<Section
							id='rights'
							title='10. Your Rights'
							icon={<UserCheck className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>
								Under the Sri Lanka Personal Data Protection Act
								No. 9 of 2022, you have the right to:
							</p>
							<ul className='list-disc pl-5 space-y-2 mb-4'>
								<li>
									Request access to your personal information
								</li>
								<li>
									Request correction of inaccurate or
									incomplete information
								</li>
								<li>
									Request deletion of personal information,
									where legally permitted
								</li>
								<li>
									Object to or restrict the processing of
									personal information
								</li>
								<li>
									Withdraw consent where processing is based
									on consent
								</li>
							</ul>
							<p>
								Requests will be handled in accordance with
								applicable legal requirements.
							</p>
						</Section>

						<Section
							id='contact'
							title='11. Contact Information'
							icon={<Mail className='w-6 h-6 text-accent' />}
						>
							<p className='mb-4'>Ceilão Collection</p>
							<ul className='space-y-2'>
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
