import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import FeatureCards from '@/components/home/FeatureCards';
import About from '@/components/home/About';
import ConnectWithUs from '@/components/home/ConnectWithUs';
import HomePageJsonLd from '@/components/seo/HomePageJsonLd';
import { siteConfig, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
	alternates: { canonical: '/' },
	openGraph: {
		url: siteUrl + '/',
		title: siteConfig.defaultTitle,
		description: siteConfig.description,
	},
};

export default function Home() {
	return (
		<>
			<HomePageJsonLd />
			<Hero />
			<About />
			<FeatureCards />
			<ConnectWithUs />
			{/* <BrandStory /> */}
		</>
	);
}
