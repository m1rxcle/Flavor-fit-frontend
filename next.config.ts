import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
	/* config options here */
	async rewrites() {
		return [
			{
				source: '/tmp/:path*',
				destination: 'http://localhost:5000/tmp/:path*'
			}
		]
	},
	experimental: {
		viewTransition: true
	}
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
