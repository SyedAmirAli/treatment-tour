/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['app.medservebd.com', 'test.editboxpro.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'app.medservebd.com',
            },
            {
                protocol: 'https',
                hostname: 'test.editboxpro.com',
            },
        ],
    },
};

export default nextConfig;
