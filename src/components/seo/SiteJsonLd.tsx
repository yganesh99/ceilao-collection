import { siteConfig, siteUrl } from '@/lib/site';

const { ogImage, name, description } = siteConfig;
const logoAbsolute = `${siteUrl}${ogImage.path}`;

export default function SiteJsonLd() {
	const data = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${siteUrl}/#organization`,
				name,
				alternateName: 'House of Brands & Luxury Hospitality',
				url: siteUrl,
				description,
				logo: {
					'@type': 'ImageObject',
					url: logoAbsolute,
					width: ogImage.width,
					height: ogImage.height,
					caption: ogImage.alt,
				},
				image: logoAbsolute,
			},
			{
				'@type': 'WebSite',
				'@id': `${siteUrl}/#website`,
				name,
				url: siteUrl,
				description,
				inLanguage: 'en',
				publisher: { '@id': `${siteUrl}/#organization` },
			},
		],
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
