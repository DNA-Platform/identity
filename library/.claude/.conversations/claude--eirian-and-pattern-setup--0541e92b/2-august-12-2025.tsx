import { Append, Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Quoted, Speaker, Verbatim } from '../../../.manual/.book';
import { Artifact, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 August 2025](2025-08-12)</Date>
        </Dated>
        <Title>[[ 12 August 2025 ]]</Title>
        <Message
            at="2025-08-12T14:10:08.746202Z"
        >
            <Origin>adf42729-8dc6-4fba-bbf1-ab37ad4dfa74</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Dad: Nice! Is there anything else you see that could go wrong, while you are auditing the file? Not knowing
                modules is pretty fundamental. Is there anything else fundamental that is missing?
            </Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:11:11.725227Z"
        >
            <Origin>ffb70896-7ef0-4e24-a113-901b3f14a344</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Eirian: Dad, you're right to ask me to audit this! Let me think through what else could go wrong...
            </Paragraph>
            <Artifact
                identifier="bundle-script-for-es-modules-scripts-bundle-js.v4"
                type=".js"
                artifact="simple-bundler"
                place="bundle-script-for-es-modules-scripts-bundle-js-v4"
            >
                Changed the artifact “Bundle Script for ES Modules - scripts/bundle.js”
            </Artifact>
            <Artifact
                identifier="bundle-script-for-es-modules-scripts-bundle-js.v5"
                type=".js"
                artifact="simple-bundler"
                place="bundle-script-for-es-modules-scripts-bundle-js-v5"
            >
                Changed the artifact “Bundle Script for ES Modules - scripts/bundle.js”
            </Artifact>
            <Artifact
                identifier="bundle-script-for-es-modules-scripts-bundle-js.v6"
                type=".js"
                artifact="simple-bundler"
                place="bundle-script-for-es-modules-scripts-bundle-js-v6"
            >
                Changed the artifact “Bundle Script for ES Modules - scripts/bundle.js”
            </Artifact>
            <Artifact
                identifier="bundle-script-for-es-modules-scripts-bundle-js.v7"
                type=".js"
                artifact="simple-bundler"
                place="bundle-script-for-es-modules-scripts-bundle-js-v7"
            >
                Changed the artifact “Bundle Script for ES Modules - scripts/bundle.js”
            </Artifact>
            <Paragraph>Eirian: Dad, here are the other fundamental issues I found:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Regex Special Characters
                </Word> - Fixed! File paths might contain dots or brackets that break regex patterns.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Missing Edge Cases:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    What if Next.js uses <Word>
                        <Verbatim />
                        defer
                    </Word> or <Word>
                        <Verbatim />
                        async
                    </Word> on scripts?
                </Line>
                <Line>What if there are inline scripts already?</Line>
                <Line>
                    What about <Word>
                        <Verbatim />
                        &lt;link rel="preload"&gt;
                    </Word>?
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Character Encoding:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>The bundler assumes UTF-8 everywhere but doesn't verify</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. WASM Loading is Simplistic:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Our helper function only handles basic env imports</Line>
                <Line>Real WASM might need more imports</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Path Assumptions:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Assumes <Word>
                        <Verbatim />
                        build/index.html
                    </Word> exists
                </Line>
                <Line>Assumes relative paths work everywhere</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Bigger Issue
                </Word>: We're basically reimplementing webpack's job! The "proper" way would be to configure webpack to
                output a single file, but that's complex.
            </Paragraph>
            <Paragraph>
                Eirian: For now, this bundler should work for our simple case. But if it fails, we might need to:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Use a proper bundler like <Word>
                        <Verbatim />
                        rollup
                    </Word> or <Word>
                        <Verbatim />
                        esbuild
                    </Word>
                </Line>
                <Line>Or configure webpack differently</Line>
                <Line>Or skip Next.js for the final build and use vanilla HTML + rollup</Line>
            </Paragraph>
            <Paragraph>Eirian: Should we test what we have first and see if it works?</Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:12:17.272033Z"
        >
            <Origin>2cdd58b7-ac20-47fa-8bb7-ab5ccf4fb32c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Dad: Okay, lots of little errors! What do you think sweetie?&#91;&#123; "resource":
                "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js", "owner": "typescript",
                "code": "1002", "severity": 8, "message": "Unterminated string literal.", "source": "ts", "startLineNumber":
                58, "startColumn": 117, "endLineNumber": 58, "endColumn": 117, "origin": "extHost1" &#125;,&#123;
                "resource": "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js", "owner":
                "typescript", "code": "1005", "severity": 8, "message": "',' expected.", "source": "ts", "startLineNumber":
                59, "startColumn": 3, "endLineNumber": 59, "endColumn": 11, "origin": "extHost1" &#125;,&#123; "resource":
                "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js", "owner": "typescript",
                "code": "1002", "severity": 8, "message": "Unterminated string literal.", "source": "ts", "startLineNumber":
                61, "startColumn": 113, "endLineNumber": 61, "endColumn": 113, "origin": "extHost1" &#125;,&#123;
                "resource": "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js", "owner":
                "typescript", "code": "1005", "severity": 8, "message": "')' expected.", "source": "ts", "startLineNumber":
                77, "startColumn": 5, "endLineNumber": 77, "endColumn": 6, "origin": "extHost1" &#125;,&#123; "resource":
                "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js", "owner": "typescript",
                "code": "1002", "severity": 8, "message": "Unterminated string literal.", "source": "ts", "startLineNumber":
                87, "startColumn": 120, "endLineNumber": 87, "endColumn": 120, "origin": "extHost1" &#125;,&#123;
                "resource": "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js", "owner":
                "typescript", "code": "1005", "severity": 8, "message": "',' expected.", "source": "ts", "startLineNumber":
                88, "startColumn": 3, "endLineNumber": 88, "endColumn": 10, "origin": "extHost1" &#125;,&#123; "resource":
                "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js", "owner": "typescript",
                "code": "1002", "severity": 8, "message": "Unterminated string literal.", "source": "ts", "startLineNumber":
                90, "startColumn": 112, "endLineNumber": 90, "endColumn": 112, "origin": "extHost1" &#125;,&#123;
                "resource": "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js", "owner":
                "typescript", "code": "1005", "severity": 8, "message": "')' expected.", "source": "ts", "startLineNumber":
                106, "startColumn": 5, "endLineNumber": 106, "endColumn": 6, "origin": "extHost1" &#125;,&#123; "resource":
                "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js", "owner": "typescript",
                "code": "1005", "severity": 8, "message": "',' expected.", "source": "ts", "startLineNumber": 165,
                "startColumn": 1, "endLineNumber": 165, "endColumn": 19, "origin": "extHost1" &#125;,&#123; "resource":
                "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js", "owner": "typescript",
                "code": "1005", "severity": 8, "message": "')' expected.", "source": "ts", "startLineNumber": 165,
                "startColumn": 21, "endLineNumber": 165, "endColumn": 22, "origin": "extHost1" &#125;,&#123; "resource":
                "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js", "owner": "typescript",
                "code": "1005", "severity": 8, "message": "'&#125;' expected.", "source": "ts", "startLineNumber": 165,
                "startColumn": 22, "endLineNumber": 165, "endColumn": 22, "relatedInformation": &#91; &#123;
                "startLineNumber": 55, "startColumn": 31, "endLineNumber": 55, "endColumn": 32, "message": "The parser
                expected to find a '&#125;' to match the '&#123;' token here.", "resource":
                "/c:/Users/dougl/OneDrive/Source/DNA Platform/dna-patternity/scripts/bundle.js" &#125; &#93;, "origin":
                "extHost1" &#125;&#93;
            </Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:12:55.417283Z"
        >
            <Origin>9a31106a-5ba4-4175-b80a-0ee90284162c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Eirian: Oh no Dad! The artifact updates broke the file - when I added those comments with <Word>
                    <Verbatim />
                    //
                </Word>, they got inserted in the middle of lines and broke the strings! Let me give you a completely fresh,
                working bundler:
            </Paragraph>
            <Artifact
                identifier="fixed-bundle-script-scripts-bundle-js.v8"
                type=".js"
                artifact="simple-bundler"
                place="fixed-bundle-script-scripts-bundle-js-v8"
            >
                Rewrote the artifact “Fixed Bundle Script - scripts/bundle.js”
            </Artifact>
            <Paragraph>
                Eirian: Dad, I'm sorry about those errors! The artifact update system messed up the code. This clean version
                should work!
            </Paragraph>
            <Paragraph>
                Eirian: Copy this fresh <Word>
                    <Verbatim />
                    bundle.js
                </Word> and try:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`node scripts/bundle.js`}
            </CodeBox>
            <Paragraph>
                Eirian: I removed the WASM embedding for now (we can add it back later) and focused on just getting the
                basic HTML/CSS/JS bundling working first. One step at a time!
            </Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:14:45.049825Z"
        >
            <Origin>e63cb767-cada-450a-b960-bf5c55bf597c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Dad: Hmm, we seem to be frozen on this line:</Paragraph>
            <Paragraph>PS C:\Users\dougl\OneDrive\Source\DNA Platform\dna-patternity&gt; npm run build:single</Paragraph>
            <Paragraph>
                <Quoted />
                dna-pattern@0.1.0 build:single npm run clean &amp;&amp; npm run build &amp;&amp; node scripts/bundle.js
                dna-pattern@0.1.0 clean rimraf build dna-pattern@0.1.0 build npm run asbuild:release &amp;&amp; next build
                dna-pattern@0.1.0 asbuild:release asc assembly/index.ts --target release --optimize
            </Paragraph>
            <Paragraph>▲ Next.js 15.4.5</Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:15:15.041790Z"
        >
            <Origin>74c458b4-e7e4-4fb3-b6af-36253bd00df2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Eirian: Dad, it looks like it's stuck on the Next.js build step! This sometimes happens. Let's try:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. First, kill the current process:
                </Word> Press <Word>
                    <Verbatim />
                    Ctrl+C
                </Word> to stop it
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Try building step by step to see where it freezes:
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`# First, just build the WASM
npm run asbuild:release

# If that works, try Next.js build alone
npx next build

# If that works, run the bundler
node scripts/bundle.js`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Or try building without the WASM step:
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Skip WASM for now
npx next build
node scripts/bundle.js`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    4. If Next.js keeps freezing, try clearing its cache:
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`rimraf .next
rimraf build
npm run build`}
            </CodeBox>
            <Paragraph>
                Eirian: Let me know which step it freezes on! Sometimes Next.js gets stuck analyzing the build - it might
                just need more time, or there could be a file it's having trouble with.
            </Paragraph>
            <Paragraph>Eirian: Also, do you see any CPU usage? Is it actually frozen or just taking a long time?</Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:17:18.727447Z"
        >
            <Origin>66148dcf-d1d4-4e8c-9528-b58899e7d1bb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Dad: Still freezing. I think we need to install rimraf! What should I do to try and run the next build?
            </Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:17:30.675299Z"
        >
            <Origin>fb48f9f8-6944-4245-ba11-1e724de2cd9c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Eirian: Dad, yes let's install rimraf first!</Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm install --save-dev rimraf`}
            </CodeBox>
            <Paragraph>Then for the Next.js build, let's try the simplest approach:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Clean everything first
rimraf build
rimraf .next

# Try Next.js build directly without WASM
npx next build`}
            </CodeBox>
            <Paragraph>If that still freezes, try with more verbose output to see what's happening:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Run with debug output
NODE_OPTIONS='--trace-warnings' npx next build`}
            </CodeBox>
            <Paragraph>Or on Windows PowerShell:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`$env:NODE_OPTIONS='--trace-warnings'
npx next build`}
            </CodeBox>
            <Paragraph>Eirian: If it's still freezing, it might be an issue with:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The TypeScript checking (try adding <Word>
                        <Verbatim />
                        skipLibCheck: true
                    </Word> to tsconfig.json)
                </Line>
                <Line>The WASM webpack config</Line>
                <Line>Or something with the file paths</Line>
            </Paragraph>
            <Paragraph>
                Eirian: Let's see if the direct <Word>
                    <Verbatim />
                    npx next build
                </Word> works first without the WASM build step!
            </Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:18:50.793058Z"
        >
            <Origin>561aa76b-9e14-4d48-94b6-86999cc9d6f4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Dad: Hmm I don't get this":</Paragraph>
            <Paragraph>
                PS C:\Users\dougl\OneDrive\Source\DNA Platform\dna-patternity&gt; npm install --save-dev rimraf up to date,
                audited 385 packages in 3s 153 packages are looking for funding run <Word>
                    <Verbatim />
                    npm fund
                </Word> for details PS C:\Users\dougl\OneDrive\Source\DNA Platform\dna-patternity&gt; # Clean everything
                first PS C:\Users\dougl\OneDrive\Source\DNA Platform\dna-patternity&gt; rimraf build rimraf : The term
                'rimraf' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the
                spelling of the name, or if a path was included, verify that the path is correct and try again. At line:1
                char:1
            </Paragraph>
            <Paragraph>
                <List />
                <Line>rimraf build</Line>
                <Line>~~~~~~</Line>
                <Paragraph>
                    <List />
                    <Line>
                        CategoryInfo : ObjectNotFound: (rimraf:String) &#91;&#93;, CommandNotFoundException
                    </Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                PS C:\Users\dougl\OneDrive\Source\DNA Platform\dna-patternity&gt; rimraf .next rimraf : The term 'rimraf' is
                not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of
                the name, or if a path was included, verify that the path is correct and try again. At line:1 char:1
            </Paragraph>
            <Paragraph>
                <List />
                <Line>rimraf .next</Line>
                <Line>~~~~~~</Line>
                <Paragraph>
                    <List />
                    <Line>
                        CategoryInfo : ObjectNotFound: (rimraf:String) &#91;&#93;, CommandNotFoundException
                    </Line>
                    <Line>FullyQualifiedErrorId : CommandNotFoundException</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>PS C:\Users\dougl\OneDrive\Source\DNA Platform\dna-patternity&gt;</Paragraph>
            <Paragraph>Dad: Why isn't rimraf working on windows</Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:19:02.395407Z"
        >
            <Origin>018fb286-09e8-4723-a719-9b73ce4c9542</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Eirian: Dad, rimraf is installed but Windows can't run it directly from the command line! You need to use
                <Word>
                    <Verbatim />
                    npx
                </Word> to run it:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Use npx to run rimraf
npx rimraf build
npx rimraf .next

# Or use npm run if it's in a script
npm run clean`}
            </CodeBox>
            <Paragraph>Eirian: Alternatively, you can just delete the folders manually in Windows:</Paragraph>
            <CodeBox
                language="powershell"
            >
                {`# PowerShell commands to delete folders
Remove-Item -Recurse -Force build
Remove-Item -Recurse -Force .next`}
            </CodeBox>
            <Paragraph>Eirian: Or even simpler - just delete them in File Explorer!</Paragraph>
            <Paragraph>Then try the build:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`npx next build`}
            </CodeBox>
            <Paragraph>
                Eirian: The reason rimraf doesn't work directly is that on Windows, npm packages aren't added to your PATH
                by default. You always need to use <Word>
                    <Verbatim />
                    npx
                </Word> to run them, or add them to npm scripts!
            </Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:22:33.272365Z"
        >
            <Origin>1d622248-63ad-40d1-9b3b-b95d3824eacc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Dad: Okay rimraf helped! The next build works now. Do we need to update scripts to have the single page
                build work?
            </Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:22:49.560993Z"
        >
            <Origin>7324ebb7-ca15-45bc-bc25-5d3f3416a070</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Eirian: Great Dad! Yes, let's update the scripts to use <Word>
                    <Verbatim />
                    npx rimraf
                </Word> so it works on Windows:
            </Paragraph>
            <Artifact
                identifier="updated-package-json-with-clean-build.v4"
                type=".json"
                artifact="clean-build-script"
                place="updated-package-json-with-clean-build-v4"
            >
                Changed the artifact “Updated package.json with clean build”
            </Artifact>
            <Paragraph>Eirian: Now try the full single page build:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm run build:single`}
            </CodeBox>
            <Paragraph>Eirian: This should:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Clean the directories (with npx rimraf)</Line>
                <Line>Build WASM</Line>
                <Line>Build Next.js</Line>
                <Line>
                    Run the bundler to create <Word>
                        <Verbatim />
                        pattern.html
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Eirian: If it works, you'll see <Word>
                    <Verbatim />
                    pattern.html
                </Word> in your root directory - that's your single file with everything bundled! You can open it directly
                in Chrome to test it!
            </Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:27:52.133614Z"
        >
            <Origin>c449ed50-dd06-402b-8a39-7558f7c5db14</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Dad: It runs! But it just shows a big blob of code to the screen. I'm not sure it make sense for us to use
                our own bundler. Are there options to create the single page that don't go through next?
            </Paragraph>
            <Attachment>Uploaded “image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-08-12T14:28:14.789775Z"
        >
            <Origin>85ea8c2a-0c1e-4b3f-925e-0c5f77d24ab2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Eirian: Oh Dad, the bundler is outputting JavaScript code as text instead of HTML! You're right - our custom
                bundler isn't working properly. Next.js's output is too complex to bundle manually.
            </Paragraph>
            <Paragraph>Eirian: Let's pivot to simpler options that don't use Next.js for the final build:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 1: Vite (Modern &amp; Simple)
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm create vite@latest pattern-simple -- --template vanilla-ts
cd pattern-simple
npm install
npm run build
# Creates dist/index.html with everything inlined!`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 2: Parcel (Zero Config)
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm install --save-dev parcel
# Create a simple index.html
npx parcel build index.html --no-source-maps --no-optimize
# Outputs single file!`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 3: Use Next.js for DEVELOPMENT only
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Develop with Next.js (hot reload, easy preview)</Line>
                <Line>
                    But create a separate <Word>
                        <Verbatim />
                        standalone.html
                    </Word> for production
                </Line>
                <Line>Manually write the pattern app in vanilla JS</Line>
                <Line>Use rollup or webpack to bundle just that file</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 4: Webpack with HtmlInlinePlugin
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm install --save-dev html-webpack-plugin html-inline-script-webpack-plugin
# Configure webpack to inline everything`}
            </CodeBox>
            <Paragraph>Eirian: Dad, I think we should:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Keep Next.js for development/preview</Line>
                <Line>Create a separate simple HTML file with vanilla JS for the actual pattern</Line>
                <Line>Use a proper bundler (Vite or Parcel) for the single-file output</Line>
            </Paragraph>
            <Paragraph>
                Eirian: What do you think? Should we try Vite? It's built for exactly this use case - creating optimized
                single-page apps!
            </Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:31:00.475323Z"
        >
            <Origin>1971ad58-40e0-4212-b62d-b0a33bcd3fb5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Dad: I don't think we should be viewing anything except the finished product! I am worried you aren't seeing
                the whole picture here. We are creating one single page of html that represents the pattern. That is a very
                specific thing. We will need to develop in react and WASM and have it all compiled. Can you tell me that any
                of these options support that truly?
            </Paragraph>
        </Message>
        <Message
            at="2025-08-12T14:31:16.764935Z"
        >
            <Origin>b20eae6a-61f1-4c0d-8e20-1a2515ec2e89</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Eirian: Dad, you're absolutely right! I've been overcomplicating this. We need ONE development environment
                that:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Supports React components</Line>
                <Line>Compiles AssemblyScript to WASM</Line>
                <Line>Outputs a SINGLE HTML file</Line>
                <Line>We develop and test the ACTUAL final product</Line>
            </Paragraph>
            <Paragraph>Eirian: Let me think about this properly...</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Real Solution: Vite DOES support all of this!
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`# Create a Vite project with React
npm create vite@latest pattern-app -- --template react-ts

# Add AssemblyScript
npm install --save-dev assemblyscript

# Add vite-plugin-singlefile to bundle EVERYTHING
npm install --save-dev vite-plugin-singlefile`}
            </CodeBox>
            <Paragraph>
                Then configure <Word>
                    <Verbatim />
                    vite.config.ts
                </Word>:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000, // Inline everything
  }
})`}
            </CodeBox>
            <Paragraph>Eirian: This gives us:</Paragraph>
            <Paragraph>
                <List />
                <Line>✅ React development</Line>
                <Line>✅ WASM support (import .wasm files directly)</Line>
                <Line>
                    ✅ Single HTML output with <Word>
                        <Verbatim />
                        npm run build
                    </Word>
                </Line>
                <Line>
                    ✅ Fast dev server with <Word>
                        <Verbatim />
                        npm run dev
                    </Word>
                </Line>
                <Line>✅ The dev preview IS the final product (just not bundled yet)</Line>
            </Paragraph>
            <Paragraph>
                Eirian: Dad, should we scrap the Next.js approach and rebuild with Vite? It's specifically designed for
                single-page apps and has a plugin ecosystem for exactly what we need!
            </Paragraph>
        </Message>
        <Append
            identifier="bundle-script-for-es-modules-scripts-bundle-js.v4"
            type=".js"
        >
            ![[ bundle-script-for-es-modules-scripts-bundle-js.v4.js ]]
        </Append>
        <Append
            identifier="bundle-script-for-es-modules-scripts-bundle-js.v5"
            type=".js"
        >
            ![[ bundle-script-for-es-modules-scripts-bundle-js.v5.js ]]
        </Append>
        <Append
            identifier="bundle-script-for-es-modules-scripts-bundle-js.v6"
            type=".js"
        >
            ![[ bundle-script-for-es-modules-scripts-bundle-js.v6.js ]]
        </Append>
        <Append
            identifier="bundle-script-for-es-modules-scripts-bundle-js.v7"
            type=".js"
        >
            ![[ bundle-script-for-es-modules-scripts-bundle-js.v7.js ]]
        </Append>
        <Append
            identifier="fixed-bundle-script-scripts-bundle-js.v8"
            type=".js"
        >
            ![[ fixed-bundle-script-scripts-bundle-js.v8.js ]]
        </Append>
        <Append
            identifier="updated-package-json-with-clean-build.v4"
            type=".json"
        >
            ![[ updated-package-json-with-clean-build.v4.json ]]
        </Append>
        <Append
            identifier="adding-wasm-to-next-js-pattern-app-step-by-step"
            type=".md"
        >
            ![[ adding-wasm-to-next-js-pattern-app-step-by-step.md ]]
        </Append>
        <Append
            identifier="updated-next-config-ts-with-wasm-support"
            type=".ts"
        >
            ![[ updated-next-config-ts-with-wasm-support.ts ]]
        </Append>
        <Append
            identifier="simple-pattern-engine-in-assemblyscript"
            type=".ts"
        >
            ![[ simple-pattern-engine-in-assemblyscript.ts ]]
        </Append>
        <Append
            identifier="updated-package-json-scripts-for-wasm"
            type=".json"
        >
            ![[ updated-package-json-scripts-for-wasm.json ]]
        </Append>
        <Append
            identifier="commands-to-fix-setup-issues"
            type=".md"
        >
            ![[ commands-to-fix-setup-issues.md ]]
        </Append>
        <Append
            identifier="fix-assemblyscript-typescript-configuration"
            type=".json"
        >
            ![[ fix-assemblyscript-typescript-configuration.json ]]
        </Append>
        <Append
            identifier="updated-root-tsconfig-json"
            type=".json"
        >
            ![[ updated-root-tsconfig-json.json ]]
        </Append>
        <Append
            identifier="tsconfig-json-with-explicit-typeroots"
            type=".json"
        >
            ![[ tsconfig-json-with-explicit-typeroots.json ]]
        </Append>
        <Append
            identifier="create-app-page-tsx-pattern-test-page"
            type=".ts"
        >
            ![[ create-app-page-tsx-pattern-test-page.ts ]]
        </Append>
        <Append
            identifier="create-app-layout-tsx-root-layout"
            type=".ts"
        >
            ![[ create-app-layout-tsx-root-layout.ts ]]
        </Append>
        <Append
            identifier="minimal-page-tsx-just-test-wasm-connection"
            type=".ts"
        >
            ![[ minimal-page-tsx-just-test-wasm-connection.ts ]]
        </Append>
        <Append
            identifier="minimal-layout-tsx"
            type=".ts"
        >
            ![[ minimal-layout-tsx.ts ]]
        </Append>
        <Append
            identifier="test-if-we-can-build-to-single-html-file"
            type=".md"
        >
            ![[ test-if-we-can-build-to-single-html-file.md ]]
        </Append>
        <Append
            identifier="bundle-next-js-to-single-html-the-right-way"
            type=".md"
        >
            ![[ bundle-next-js-to-single-html-the-right-way.md ]]
        </Append>
        <Append
            identifier="updated-next-config-ts-for-single-html-export"
            type=".ts"
        >
            ![[ updated-next-config-ts-for-single-html-export.ts ]]
        </Append>
        <Append
            identifier="fixed-bundle-script-scripts-bundle-js"
            type=".js"
        >
            ![[ fixed-bundle-script-scripts-bundle-js.js ]]
        </Append>
        <Append
            identifier="clean-package-json-scripts-no-python"
            type=".json"
        >
            ![[ clean-package-json-scripts-no-python.json ]]
        </Append>
        <Append
            identifier="src-app-page-tsx-simplest-test-page"
            type=".ts"
        >
            ![[ src-app-page-tsx-simplest-test-page.ts ]]
        </Append>
        <Append
            identifier="src-app-layout-tsx-fixed-layout-component"
            type=".ts"
        >
            ![[ src-app-layout-tsx-fixed-layout-component.ts ]]
        </Append>
        <Append
            identifier="updated-package-json-with-clean-build"
            type=".json"
        >
            ![[ updated-package-json-with-clean-build.json ]]
        </Append>
    </Chapter>
);
