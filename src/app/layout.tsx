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
	title: 'Ceilão Collection | House of Brands & Luxury Hospitality',
	description:
		'Curated journeys, signature events, and luxury experiences that embody the soul of Sri Lanka. Discover timeless elegance with a purpose.',
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
