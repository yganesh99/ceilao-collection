import Hero from '@/components/home/Hero';
import FeatureCards from '@/components/home/FeatureCards';
import BrandStory from '@/components/home/BrandStory';

export default function Home() {
	return (
		<main className='flex flex-col'>
			<Hero />
			<FeatureCards />
			<BrandStory />
		</main>
	);
}
