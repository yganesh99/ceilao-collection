import Hero from '@/components/home/Hero';
import FeatureCards from '@/components/home/FeatureCards';
import BrandStory from '@/components/home/BrandStory';
import About from '@/components/home/About';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<FeatureCards />
			{/* <BrandStory /> */}
		</>
	);
}
