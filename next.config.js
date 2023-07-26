const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  })
  
  module.exports = withMDX({
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    images: {
      unoptimized: true
    }
  })