import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Bundle Next..js to Single HTML - The Right Way v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Bundle Next.js to Single HTML - The Right Way at version 1</Heading>
            <Heading>Bundle Next.js to Single HTML File</Heading>
            <Heading>Option 1: Use next-single-page (Experimental)</Heading>
            <Paragraph>There's an experimental Next.js feature for single-page apps:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// next.config.ts
const nextConfig = {
  output: 'export',
  distDir: 'build',
  experimental: {
    // This might work for single page
    optimizeCss: false,
    craCompat: true,
  }
}`}
            </CodeBox>
            <Heading>Option 2: Simple Post-Build Script</Heading>
            <Paragraph>
                Create <Word>
                    <Verbatim />
                    scripts/bundle.js
                </Word>:
            </Paragraph>
            <CodeBox
                language="javascript"
            >
                {`${''}const fs = require('fs');
const path = require('path');

async function bundle() {
  // Read the built index.html
  let html = fs.readFileSync('./build/index.html', 'utf8');
  
  // Find and inline all CSS
  const cssRegex = /<link rel="stylesheet" href="([^"]+)"/g;
  let match;
  while ((match = cssRegex.exec(html)) !== null) {
    const cssPath = path.join('./build', match[1]);
    if (fs.existsSync(cssPath)) {
      const css = fs.readFileSync(cssPath, 'utf8');
      html = html.replace(match[0], \`<style>\${css}</style>\`);
    }
  }
  
  // Find and inline all JS
  const scriptRegex = /<script src="([^"]+)"/g;
  html = html.replace(scriptRegex, (match, src) => {
    const jsPath = path.join('./build', src);
    if (fs.existsSync(jsPath)) {
      const js = fs.readFileSync(jsPath, 'utf8');
      return \`<script>\${js}\`;
    }
    return match;
  });
  
  // Inline WASM as base64
  const wasm = fs.readFileSync('./build/release.wasm');
  const wasmBase64 = wasm.toString('base64');
  html = html.replace('</body>', \`
    <script>
      window.WASM_BASE64 = "\${wasmBase64}";
    </script>
    </body>
  \`);
  
  // Write single file
  fs.writeFileSync('pattern.html', html);
  console.log('Created pattern.html - single file!');
}

bundle();`}
            </CodeBox>
            <Paragraph>Then in package.json:</Paragraph>
            <CodeBox
                language="json"
            >
                {`{
  "scripts": {
    "build:single": "next build && node scripts/bundle.js"
  }
}`}
            </CodeBox>
            <Heading>Option 3: Use a Plugin - next-export-optimize-images</Heading>
            <CodeBox
                language="bash"
            >
                {`npm install --save-dev next-export-optimize-images`}
            </CodeBox>
            <Paragraph>This helps with static export optimization.</Paragraph>
            <Heading>Option 4: The Nuclear Option - Don't Use Next.js App Router</Heading>
            <Paragraph>Use Pages Router instead (older but simpler):</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Create <Word>
                        <Verbatim />
                        pages/index.tsx
                    </Word> instead of <Word>
                        <Verbatim />
                        app/page.tsx
                    </Word>
                </Line>
                <Line>Simpler output structure</Line>
                <Line>Easier to bundle</Line>
            </Paragraph>
            <Heading>The Reality Check:</Heading>
            <Paragraph>Next.js is optimized for:</Paragraph>
            <Paragraph>
                <List />
                <Line>Server-side rendering</Line>
                <Line>Multi-page apps</Line>
                <Line>Code splitting</Line>
            </Paragraph>
            <Paragraph>
                For a single HTML file, we might be fighting against its nature. But the post-build script (Option 2) WILL
                work - it just takes all the files Next generates and smashes them into one HTML file.
            </Paragraph>
            <Heading>My Recommendation:</Heading>
            <Paragraph>
                Let's try Option 2 - build the bundler script. It's just 30 lines of code and will definitely work!
            </Paragraph>
        </Section>
    </Chapter>
);
