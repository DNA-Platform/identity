import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Updated Next..js Config v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // Add redirect from root to maps page
  async redirects() {
    return [
      {
        source: '/',
        destination: '/maps',
        permanent: true, // Use a 308 permanent redirect
      },
    ];
  },
};

export default nextConfig;
`}
        </CodeBox>
    </Chapter>
);
