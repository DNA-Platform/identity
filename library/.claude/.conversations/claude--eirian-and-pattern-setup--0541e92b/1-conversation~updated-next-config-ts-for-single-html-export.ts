import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /**
   * Static export - REQUIRED for single HTML
   */
  output: 'export',
  
  /**
   * Custom output directory
   */
  distDir: 'build',
  
  /**
   * Disable trailing slash for single page
   */
  trailingSlash: false,
  
  /**
   * Disable image optimization for static export
   */
  images: {
    unoptimized: true,
  },
  
  /**
   * Disable x-powered-by header
   */
  poweredByHeader: false,
  
  /**
   * Generate a single page app
   */
  experimental: {
    // Disable CSS code splitting
    optimizeCss: false,
  },
  
  /**
   * WASM Support Configuration
   */
  webpack: (config, { isServer }) => {
    // Enable WebAssembly experiments
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      layers: true,
    }
    
    // Inline WASM as base64 for single file
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/inline',  // Changed from 'asset/resource' to inline!
    })
    
    // Minimize code splitting for single file
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Bundle everything into one chunk
            bundle: {
              name: 'bundle',
              chunks: 'all',
              enforce: true
            }
          }
        }
      }
    }
    
    return config
  },
}

export default nextConfig