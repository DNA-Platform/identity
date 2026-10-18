import { Append, Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[1 November 2025](2025-11-01)</Date>
        </Dated>
        <Title>[[ 1 November 2025 ]]</Title>
        <Message
            at="2025-11-01T23:56:14.291201Z"
        >
            <Origin>18b364e4-7f67-4cfc-92bc-638172bd8a7b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am getting this error: import &#123; $Chemical, Include, $use, $Function, $Html, $check &#125; from
                '@/archive/chemistry'; I used to have chemistyr there. I removed it. I changed all the includes. But I am ##
                Error Type Build Error ## Error Message Module not found: Can't resolve '@/archive/chemistry' ## Build
                Output ./app/tests/child-bonding/arg-tests.tsx:3:1 Module not found: Can't resolve '@/archive/chemistry' 1 |
                // app/tests/child-binding/arg-tests.tsx 2 | 'use client' &gt; 3 | import &#123; $Chemical, Include, $use,
                $Function, $Html, $check &#125; from '@/archive/chemistry'; | ^ 4 | import React from 'react'; 5 | 6 | //
                ============================================ https://nextjs.org/docs/messages/module-not-found Import trace
                for requested module: ./app/tests/child-bonding/page.tsx Next.js version: 15.5.4 (Webpack) --- Look here's
                that page: Subpages look like that. Why does it remember? I can't even find archive/chemical anymore in any
                project fiels vscode wide search
            </Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment
                identifier="untitled-2"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-11-01T23:56:28.613354Z"
        >
            <Origin>06c5f554-18c8-4863-9229-10f80c458398</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is a <Word>
                    <Bold />
                    Next.js build cache issue
                </Word>. The cached webpack build still references the old import path even though you've updated all your
                source files. Here's how to fix it:
            </Paragraph>
            <Heading>Solution</Heading>
            <Paragraph>Run these commands in your terminal:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Stop your dev server (Ctrl+C)

# Delete the Next.js build cache
rm -rf .next

# If you have a cache folder in node_modules, delete that too
rm -rf node_modules/.cache

# Restart your dev server
npm run dev`}
            </CodeBox>
            <Paragraph>Or on Windows:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Stop your dev server (Ctrl+C)

# Delete the Next.js build cache
rmdir /s /q .next

# If you have a cache folder in node_modules
rmdir /s /q node_modules\\.cache

# Restart your dev server
npm run dev`}
            </CodeBox>
            <Heading>Why This Happens</Heading>
            <Paragraph>
                Next.js uses webpack which caches module resolution to speed up builds. When you change import paths, the
                cache can retain the old paths even though your source files are correct. The VSCode search confirms you've
                updated all source files - it's just the build cache that's stale.
            </Paragraph>
            <Heading>Quick Alternative</Heading>
            <Paragraph>If you're in a hurry, you can also try:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm run dev -- --turbo --no-cache`}
            </CodeBox>
            <Paragraph>
                But the cleanest solution is to delete <Word>
                    <Verbatim />
                    .next
                </Word> and restart fresh.
            </Paragraph>
            <Paragraph>
                Once you do this, your app should build successfully with the new import paths from <Word>
                    <Verbatim />
                    @/chemistry
                </Word> (or wherever your chemistry files now live).
            </Paragraph>
        </Message>
        <Message
            at="2025-11-01T23:56:41.339475Z"
        >
            <Origin>da5f5934-65a2-483a-bcbd-01c1365d403c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you write it in powershell</Paragraph>
        </Message>
        <Message
            at="2025-11-01T23:56:48.362767Z"
        >
            <Origin>c4b24c83-71ca-49e0-b7e7-6ce5aa99030a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>PowerShell Solution</Heading>
            <CodeBox
                language="powershell"
            >
                {`# Stop your dev server (Ctrl+C) first

# Delete the Next.js build cache
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Delete node_modules cache if it exists
Remove-Item -Recurse -Force node_modules\\.cache -ErrorAction SilentlyContinue

# Restart your dev server
npm run dev`}
            </CodeBox>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    -ErrorAction SilentlyContinue
                </Word> flag prevents errors if the directories don't exist (which is fine - we just want them gone).
            </Paragraph>
            <Heading>One-Liner Version</Heading>
            <Paragraph>If you want to do it all in one command:</Paragraph>
            <CodeBox
                language="powershell"
            >
                {`Remove-Item -Recurse -Force .next, node_modules\\.cache -ErrorAction SilentlyContinue; npm run dev`}
            </CodeBox>
            <Paragraph>This will clear the cache and immediately restart your dev server.</Paragraph>
        </Message>
        <Message
            at="2025-11-01T23:59:55.469230Z"
        >
            <Origin>666bb57f-0fbe-4f3e-92ed-8a534516b746</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>▲ Next.js 15.5.4</Paragraph>
            <Paragraph>
                <List />
                <Line>Local:        http://localhost:3000</Line>
                <Line>Network:      http://172.22.176.1:3000</Line>
            </Paragraph>
            <Paragraph>
                ✓ Starting... ✓ Ready in 2.2s ⚠ Fast Refresh had to perform a full reload due to a runtime error. ○
                Compiling / ... ✓ Compiled / in 2.9s (562 modules) ⚠ Fast Refresh had to perform a full reload due to a
                runtime error. GET / 200 in 3356ms GET / 200 in 89ms ✓ Compiled /favicon.ico in 454ms (355 modules) GET
                /favicon.ico 200 in 616ms
            </Paragraph>
            <Paragraph>Still not working. It's getting stuck</Paragraph>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
        <Append
            identifier="untitled-2"
            type=".txt"
        >
            ![[ untitled-2.txt ]]
        </Append>
    </Chapter>
);
