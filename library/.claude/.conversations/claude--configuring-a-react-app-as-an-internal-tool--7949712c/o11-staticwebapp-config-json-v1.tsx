import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ staticwebapp..config..json v1 ]]</Title>
        <CodeBox
            language="json"
        >
            {`${''}
{
  "platform": {
    "apiRuntime": "node:18",
    "buildProperties": {
      "skipLint": true
    }
  },
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": [
      "/images/*.{png,jpg,gif}",
      "/css/*",
      "/robots.txt"
    ]
  },
  "routes": [
    {
      "route": "/internal/*",
      "rewrite": "/index.html",
      "allowedRoles": ["authenticated"]
    },
    {
      "route": "/login",
      "rewrite": "/index.html"
    },
    {
      "route": "/*",
      "rewrite": "/index.html"
    }
  ],
  "responseOverrides": {
    "401": {
      "redirect": "/login",
      "statusCode": 302
    }
  },
  "globalHeaders": {
    "X-Robots-Tag": "noindex, nofollow"
  }
}
`}
        </CodeBox>
    </Chapter>
);
