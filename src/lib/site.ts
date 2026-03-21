/** Canonical origin for metadata, OG tags, and JSON-LD (no trailing slash). */
export const siteUrl = (
	process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ceilaocollection.com'
).replace(/\/$/, '');

export const siteConfig = {
	name: 'Ceilão Collection',
	defaultTitle: 'Ceilão Collection | House of Brands & Luxury Hospitality',
	description:
		'Curated journeys, signature events, and luxury experiences that embody the soul of Sri Lanka. Discover timeless elegance with a purpose.',
	/** Preferred brand image for search / social previews (matches header logo). */
	ogImage: {
		path: '/assets/logo.png' as const,
		alt: 'Ceilão Collection — House of Brands & Luxury Hospitality, Sri Lanka',
		width: 618,
		height: 372,
	},
} as const;
