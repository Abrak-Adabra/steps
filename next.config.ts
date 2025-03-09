import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    devIndicators: false,
    output: 'export',
    basePath: '/steps',
    images: {
        unoptimized: true,
    },
    env: {
        PRIVATE_KEY: process.env.PRIVATE_KEY,
    },
}

export default nextConfig
