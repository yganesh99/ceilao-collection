import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				hostname: 'res.cloudinary.com',
				protocol: 'https',
				port: '',
				pathname: '/**',
			},
		],
		qualities: [75, 90],
		formats: ['image/avif', 'image/webp'],
	},
};

export default nextConfig;
