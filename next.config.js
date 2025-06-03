/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'nkdslkrkftwgbvtqnqns.supabase.co', // The supbase domain
      'avatars.githubusercontent.com', // For GitHub avatars
      'lh3.googleusercontent.com', // For Google avatars
    ],
  },
};

module.exports = nextConfig;