import { siteConfig, siteUrl } from '@/lib/site';

const { ogImage, defaultTitle, description } = siteConfig;
const homeUrl = `${siteUrl}/`;

export default function HomePageJsonLd() {
	const data = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': `${homeUrl}#webpage`,
		url: homeUrl,
		name: defaultTitle,
		description,
		isPartOf: { '@id': `${siteUrl}/#website` },
		about: { '@id': `${siteUrl}/#organization` },
		primaryImageOfPage: {
			'@type': 'ImageObject',
			url: `${siteUrl}${ogImage.path}`,
			width: ogImage.width,
			height: ogImage.height,
			caption: ogImage.alt,
		},
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
