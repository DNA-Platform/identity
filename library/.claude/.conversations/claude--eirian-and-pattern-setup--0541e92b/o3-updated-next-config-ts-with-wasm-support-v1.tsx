import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Updated next..config..ts with WASM Support v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /**
   * Static export for GitHub Pages
   */
  output: 'export',
  
  /**
   * Custom output directory
   */
  distDir: 'build',
  
  /**
   * Add trailing slash for better static file serving
   */
  trailingSlash: true,
  
  /**
   * Disable image optimization for static export
   */
  images: {
    unoptimized: true,
  },
  
  /**
   * Optional: Set base path for GitHub Pages subpath
   * Comment out for now since we're testing locally
   */
  // basePath: '/inexplicable-phenomena',
  
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
    
    // Add rule for WASM files
    config.module.rules.push({
      test: /\\.wasm$/,
      type: 'asset/resource',
    })
    
    // For static export, we need to handle WASM differently
    if (!isServer) {
      config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'
    }
    
    return config
  },
}

export default nextConfig`}
        </CodeBox>
    </Chapter>
);
