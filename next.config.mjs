/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['app.medservebd.com', 'test.editboxpro.com', 'localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'app.medservebd.com',
            },
            {
                protocol: 'https',
                hostname: 'test.editboxpro.com',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
        ],
    },
};

export default nextConfig;
