import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SiteJsonLd from '@/components/seo/SiteJsonLd';
import { siteConfig, siteUrl } from '@/lib/site';

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

const { defaultTitle, description, name, ogImage } = siteConfig;

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: defaultTitle,
		template: '%s | Ceilão Collection',
	},
	description,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: '/',
		siteName: name,
		title: defaultTitle,
		description,
		images: [
			{
				url: ogImage.path,
				width: ogImage.width,
				height: ogImage.height,
				alt: ogImage.alt,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: defaultTitle,
		description,
		images: [ogImage.path],
	},
	icons: {
		icon: [{ url: ogImage.path, type: 'image/png' }],
		apple: ogImage.path,
	},
	robots: { index: true, follow: true },
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
				<SiteJsonLd />
				<Header />
				<div className='grow'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
