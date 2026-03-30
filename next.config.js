/** @type {import('next').NextConfig} */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let supabaseDomain;

try {
  supabaseDomain = supabaseUrl ? new URL(supabaseUrl).hostname : undefined;
} catch {
  supabaseDomain = undefined;
}

const domains = [
  'avatars.githubusercontent.com', // For GitHub avatars
  'lh3.googleusercontent.com', // For Google avatars
];

if (supabaseDomain) {
  domains.unshift(supabaseDomain);
}

const nextConfig = {
  images: {
    domains,
  },
};

module.exports = nextConfig;
