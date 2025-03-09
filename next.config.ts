import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    devIndicators: false,
    output: 'export',
    basePath: '/steps',
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_PRIVATE_KEY: process.env.NEXT_PUBLIC_PRIVATE_KEY,
    },
}

export default nextConfig
