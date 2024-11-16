import createNextIntlPlugin from "next-intl/plugin";

// Initialize next-intl with your plugin configuration
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['digitalrun.biz','images.unsplash.com','media.licdn.com',"res.cloudinary.com"], // Allow images from digitalrun.biz
  },
};

export default withNextIntl(nextConfig);
