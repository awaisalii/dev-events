import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
  cacheComponents:true,
  typescript:{
    ignoreBuildErrors:true,
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:'res.cloudinary.com',
        pathname: '/**',
      },
    ]
  }

};

export default nextConfig;
