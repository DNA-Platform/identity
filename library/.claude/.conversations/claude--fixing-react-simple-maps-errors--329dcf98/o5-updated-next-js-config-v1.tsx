import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

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
