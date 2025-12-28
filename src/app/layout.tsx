import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
	variable: '--font-serif',
	subsets: ['latin'],
	display: 'swap',
});

const lato = Lato({
	variable: '--font-sans',
	weight: ['300', '400', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Ceilão Collection | Bespoke Sri Lankan Journeys',
	description:
		'Crafting bespoke destinations, journeys, and celebrations in Sri Lanka. Experience luxury, heritage, and timeless elegance with Ceilão Collection.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='scroll-smooth'
		>
			<body
				className={`${playfair.variable} ${lato.variable} antialiased bg-champagne text-charcoal font-sans flex flex-col min-h-screen`}
			>
				<Header />
				<div className='grow'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
