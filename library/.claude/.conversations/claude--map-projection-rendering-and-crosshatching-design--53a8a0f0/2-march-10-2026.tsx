import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 March 2026](2026-03-10)</Date>
        </Dated>
        <Title>[[ 10 March 2026 ]]</Title>
        <Message
            at="2026-03-10T07:43:05.665856Z"
        >
            <Origin>019cd6b3-0416-75f6-a85e-7661bb43a762</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay from the perspective of uploading these maps to adobe stock, lets say I want to upload 100 maps at
                once. I have put the metadata into them. I can just to the sftp server. What is the easiest way for me to
                upload them? Is there anything you can do other than bring me to the place where I an go through the UI?
                Does the csv have any value if I put the metadata in the file already?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T07:43:14.280332Z"
        >
            <Origin>019cd6b3-0416-7aa1-85c8-03a42de591f2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Adobe Stock contributor SFTP bulk upload metadata XMP embedded 2024”</Action>
        </Message>
        <Message
            at="2026-03-10T07:44:32.487289Z"
        >
            <Origin>0d71bfb3-bbf5-437c-b510-43d80633bab8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The CSV has no value if the metadata is already embedded in the files as XMP. Adobe Stock reads XMP directly
                — title, keywords, category all get pulled automatically. The CSV is only useful if you're adding metadata
                <Word>
                    <Emphasis />
                    after
                </Word> upload through the portal UI.
            </Paragraph>
            <Paragraph>
                For the actual upload, SFTP is the right move for 100 files. You already have the credentials. The simplest
                command-line approach from your project's output folder:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`sftp your_username@sftp.contributor.adobestock.com << 'EOF'
put *.jpg
quit
EOF`}
            </CodeBox>
            <Paragraph>Or if you want progress feedback:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`for f in *.jpg; do
  sftp your_username@sftp.contributor.adobestock.com <<< "put $f"
done`}
            </CodeBox>
            <Paragraph>
                One important caveat from the search results: SFTP upload appears to have been eliminated for many
                contributors — it's gated on account standing. If you don't see the SFTP credentials option in your portal,
                your account may be drag-and-drop only, in which case 100 files is still manageable by selecting all and
                dropping at once.
            </Paragraph>
            <Paragraph>
                If SFTP is available to you, uploading all 100 is literally one command. Once they land on the server, they
                appear in the New tab of your contributor account — and since your XMP metadata is embedded, they should
                pre-populate without you touching the UI at all, just hitting submit.
            </Paragraph>
            <Paragraph>
                The Playwright automation we discussed before is still the last mile — even with SFTP + embedded XMP, you
                still have to click "Submit for Review" on each asset through the portal. That's where the script earns its
                keep for a batch of 100.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T08:15:12.963318Z"
        >
            <Origin>019cd6d0-6fab-7d37-b208-8ede0118092e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We have sftp. But what else can be automated beyond sftp? Are there any things you could help automate?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T08:15:28.685979Z"
        >
            <Origin>019cd6d0-6fac-7ae2-a694-901925cfa618</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>The full pipeline from your perspective:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Already automatable / done:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>SFTP upload (scripted, one command)</Line>
                <Line>XMP metadata embedding (exiftool before upload)</Line>
                <Line>File renaming/organizing before upload</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The gap — portal actions after upload:
                </Word>
            </Paragraph>
            <Paragraph>
                Files land on the server and appear in your "New" tab. Before they go to review, the portal expects you to
                confirm/submit them. This is where Playwright picks up. Specifically it can automate:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Logging in (the IMS auth flow we already discussed)</Line>
                <Line>Navigating to the New tab</Line>
                <Line>Selecting all uploaded assets</Line>
                <Line>Hitting "Submit for Review" in bulk</Line>
            </Paragraph>
            <Paragraph>
                That covers the full loop — files go in one end, submitted out the other, no UI touching required.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I could help build on top of that:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Pre-upload validation script
                    </Word> — checks every file has the required XMP fields (title, keywords, category) before any SFTP
                    transfer starts. Fails loudly on missing metadata rather than letting bad files through.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Upload manifest
                    </Word> — generates a log of exactly which files were sent, timestamps, and file sizes so you have a
                    record if anything goes missing between SFTP and the portal.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Post-submission status checker
                    </Word> — after Playwright submits, poll the portal periodically and report back which files were
                    approved, rejected, or still pending. Gives you a local record without manually checking.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The whole thing as one command
                    </Word> — <Word>
                        <Verbatim />
                        npm run submit
                    </Word> that runs validate → SFTP → Playwright submit → log results end to end.
                </Line>
            </Paragraph>
            <Paragraph>
                The only thing that stays manual is responding to rejections, since those require human judgment on what to
                fix. Everything else is scriptable. Which of these is most useful to build first?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T10:39:03.658093Z"
        >
            <Origin>019cd754-224a-7860-bcd6-92493a7bd098</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Are there any tools to convert svg to AI that don't use illustrator?</Paragraph>
        </Message>
        <Message
            at="2026-03-10T10:39:21.585132Z"
        >
            <Origin>019cd754-224b-7c4f-ab3d-a59ab92f01d4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “convert SVG to AI file without Illustrator command line tool 2024”</Action>
            <Paragraph>
                Worth stepping back first — Adobe Stock accepts SVG directly for vector illustrations. You may not need to
                convert at all.
            </Paragraph>
            <Paragraph>But if you do need .ai files specifically:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest technical reality:
                </Word> Modern .ai files are just PDFs with an Illustrator wrapper. SVG is already valid XML vector data. A
                "conversion" is mostly a container swap, not a real transformation. This means the output quality from any
                non-Illustrator converter is hit or miss — they're guessing at the PDF wrapper structure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Scriptable/automatable options:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Inkscape CLI
                    </Word> — free, runs headless, batch-converts 100 files in one command: <Word>
                        <Verbatim />
                        inkscape input.svg --export-filename=output.ai
                    </Word>. Converts via its own PDF-based AI output. Works well for simple paths, less so for complex SVG
                    filters.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ghostscript
                    </Word> — can wrap SVG-as-EPS into an AI-compatible container. Very low-level, good for simple artwork.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Online batch tools:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Convertio and reaConverter both do batch SVG→AI but require manual upload or a paid API</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The real question for your maps:
                </Word> your SVGs are clean paths with fills and a pattern background — no complex filters, no text. That's
                actually the ideal case for Inkscape CLI. The conversion would be clean. I could write the batch script
                right now if you want it.
            </Paragraph>
            <Paragraph>
                But again — worth checking if Adobe Stock's vector submission path accepts SVG, because that eliminates the
                problem entirely.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T10:40:13.533324Z"
        >
            <Origin>019cd755-32ec-7284-ba68-e15765928f19</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No... AI is the preferred file by adobe stock. They want an AI file. Right now I am using extendscript to
                open ai and save as AI. But if there was a tool to do this, it would be infinitely easier
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T10:40:26.432629Z"
        >
            <Origin>019cd755-32ec-707d-8cd3-463f48fdeb67</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Inkscape CLI is almost certainly your answer. It runs without a GUI, converts SVG→AI in batch, and is free.
                One command:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`for f in *.svg; do
  inkscape "$f" --export-filename="\${f%.svg}.ai"
done`}
            </CodeBox>
            <Paragraph>100 files, no Illustrator open, no ExtendScript, no human in the loop.</Paragraph>
            <Paragraph>
                The risk is whether Adobe Stock's ingest accepts the output. Inkscape produces AI via a PDF wrapper, same as
                Illustrator does — but the internal structure differs slightly. For your maps specifically (clean fills, no
                effects, no text) it would very likely pass. The only way to know for certain is to test one file through
                submission and see if it gets rejected at the validation step.
            </Paragraph>
            <Paragraph>
                If Inkscape's output gets rejected, the next option is <Word>
                    <Bold />
                    Ghostscript
                </Word>, which produces a more PostScript-native AI file — some contributors swear by it for exactly this
                use case.
            </Paragraph>
            <Paragraph>The honest comparison to your current approach:</Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word></Word>
                    <Word>ExtendScript</Word>
                    <Word>Inkscape CLI</Word>
                </Line>
                <Line>
                    <Word>Requires Illustrator open</Word>
                    <Word>Yes</Word>
                    <Word>No</Word>
                </Line>
                <Line>
                    <Word>Scriptable/automated</Word>
                    <Word>Yes, but brittle</Word>
                    <Word>Yes, clean</Word>
                </Line>
                <Line>
                    <Word>Batch 100 files</Word>
                    <Word>Yes, slow</Word>
                    <Word>~30 seconds</Word>
                </Line>
                <Line>
                    <Word>Adobe Stock acceptance</Word>
                    <Word>Guaranteed</Word>
                    <Word>Very likely</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Worth a 5-minute test before committing. Want me to write the full batch script including the SFTP upload
                chain so it's one command from SVG folder to submitted?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T10:41:20.698712Z"
        >
            <Origin>019cd756-3942-779d-8876-7601e3b88b7c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Why does it know what an AI file is? What makes inkscape special?</Paragraph>
        </Message>
        <Message
            at="2026-03-10T10:41:31.810881Z"
        >
            <Origin>019cd756-3942-7a78-b414-d194cc4fcf26</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Inkscape doesn't really "know" what an AI file is in any deep sense. Here's what's actually happening:
            </Paragraph>
            <Paragraph>
                Modern .ai files (CS and later) are just <Word>
                    <Bold />
                    PDFs
                </Word> with two things added:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    A <Word>
                        <Verbatim />
                        %AI
                    </Word> header comment at the top
                </Line>
                <Line>Some Adobe-specific metadata embedded in the PDF structure</Line>
            </Paragraph>
            <Paragraph>
                That's it. There's no secret proprietary vector format — Illustrator switched to PDF as its underlying
                container years ago. So when Inkscape "exports to AI" it's actually just exporting a PDF and writing the
                right header and metadata wrapper around it.
            </Paragraph>
            <Paragraph>
                This is also why your SVG maps would convert cleanly — SVG paths and fills map directly to PDF path
                operations with no lossy translation step. It's all just Bezier curves and color values underneath.
            </Paragraph>
            <Paragraph>
                The older .ai format (pre-CS, before the PDF switch) was based on PostScript, which is a completely
                different story and genuinely proprietary. If someone hands you an old .ai file from the early 2000s,
                Inkscape struggles with it because that format is actually opaque.
            </Paragraph>
            <Paragraph>
                So the reason Inkscape can do this isn't special knowledge — it's that Adobe quietly made their
                "proprietary" format a thin wrapper around an open standard. The same reason any PDF reader can open a
                modern .ai file if you just rename the extension.
            </Paragraph>
            <Paragraph>
                This is also why your ExtendScript approach works — Illustrator is essentially just doing <Word>
                    <Verbatim />
                    save as PDF with our header
                </Word> internally too.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T10:47:37.854295Z"
        >
            <Origin>019cd75b-f9d9-7741-91be-d4ae93db2792</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is the flag to run claude where it ignores permissions. It;s like dangerously-skip-permissions
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T10:47:54.533410Z"
        >
            <Origin>019cd75b-f9d9-73f5-947c-c5d97f34b7a2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/skills/public/product-self-knowledge/SKILL.md</Action>
            <Action>Fetched https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md</Action>
            <Action>Searched the web for “claude code dangerously skip permissions flag CLI”</Action>
            <Paragraph>You got it right:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`claude --dangerously-skip-permissions`}
            </CodeBox>
            <Paragraph>There's also an equivalent longer form:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`claude --permission-mode bypassPermissions`}
            </CodeBox>
            <Paragraph>
                Same behavior, different flag name. The <Word>
                    <Verbatim />
                    --dangerously-skip-permissions
                </Word> version is the one most people use. For your Adobe Stock pipeline this would be the way to run it
                headlessly — combine it with <Word>
                    <Verbatim />
                    -p
                </Word> for a one-shot non-interactive run:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`claude -p "run the upload pipeline" --dangerously-skip-permissions`}
            </CodeBox>
        </Message>
        <Message
            at="2026-03-10T10:48:19.006830Z"
        >
            <Origin>019cd75c-9b0f-77f3-b1ca-7cf22240d3d2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What if I want to specify model opus too</Paragraph>
        </Message>
        <Message
            at="2026-03-10T10:48:21.607887Z"
        >
            <Origin>019cd75c-9b0f-73ca-b8dc-2b3c2c79f958</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="bash"
            >
                {`claude --dangerously-skip-permissions --model claude-opus-4-5`}
            </CodeBox>
            <Paragraph>
                Or with <Word>
                    <Verbatim />
                    -p
                </Word>:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`claude -p "run the upload pipeline" --dangerously-skip-permissions --model claude-opus-4-5`}
            </CodeBox>
        </Message>
        <Message
            at="2026-03-10T10:48:37.676215Z"
        >
            <Origin>019cd75c-e2cb-7f8c-84f8-26ac2d7f22d1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can I do opus latest?</Paragraph>
        </Message>
        <Message
            at="2026-03-10T10:48:45.593255Z"
        >
            <Origin>019cd75c-e2cb-7893-9fb6-3b3f2fffdfef</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “claude code CLI model flag "claude-opus-4" latest alias 2025”</Action>
            <Paragraph>
                Yes — you can use just the alias <Word>
                    <Verbatim />
                    opus
                </Word> and it resolves to the latest:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`claude --dangerously-skip-permissions --model opus`}
            </CodeBox>
            <Paragraph>
                The docs confirm <Word>
                    <Verbatim />
                    opus
                </Word>, <Word>
                    <Verbatim />
                    sonnet
                </Word>, and <Word>
                    <Verbatim />
                    haiku
                </Word> are all valid shorthand aliases. If you want to pin to the specific current version it's <Word>
                    <Verbatim />
                    claude-opus-4-6
                </Word>, but <Word>
                    <Verbatim />
                    opus
                </Word> will always track latest Opus.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T12:03:19.000314Z"
        >
            <Origin>019cd7a1-43e1-74f0-bef5-b5bca2d92964</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In adobe stock, can you put categories inside the metadata of the file or does this have to be in the
                accompanying csv
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T12:03:40.970217Z"
        >
            <Origin>019cd7a1-43e1-70e6-b7b5-915ad6870ec0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Adobe Stock contributor XMP metadata category embedded file IPTC”</Action>
            <Action>
                Searched the web for “Adobe Stock contributor category number XMP embedded metadata read from file”
            </Action>
            <Action>
                Searched the web for “Adobe Stock contributor category field XMP "category" embedded file read automatically
                portal”
            </Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Category cannot be embedded in the file.
                </Word> It's portal-only.
            </Paragraph>
            <Paragraph>
                Here's the breakdown of what Adobe Stock reads from embedded XMP vs. what requires the portal:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Read from embedded XMP/IPTC (automatic on upload):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Title / Description → <Word>
                        <Verbatim />
                        dc:description
                    </Word> or IPTC Caption
                </Line>
                <Line>
                    Keywords → <Word>
                        <Verbatim />
                        dc:subject
                    </Word> or IPTC Keywords
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Portal only — cannot be embedded:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Category → Adobe Stock uses Adobe Sensei technology to automatically suggest categories when you upload,
                    but you have to confirm or override in the UI. There's no XMP field Adobe Stock maps to their category
                    taxonomy.
                </Line>
            </Paragraph>
            <Paragraph>
                This is actually the core reason Playwright automation still matters for your pipeline. Title and keywords
                travel with the file, but category is the one field that requires a human (or a Playwright script) to click
                through in the portal. Adobe Sensei's auto-suggestions are usually pretty good for maps — it would almost
                certainly suggest "Travel" or "The Environment" — so the Playwright script just needs to accept the
                suggestion rather than select from scratch.
            </Paragraph>
            <Paragraph>
                The CSV also cannot set category, for the same reason — Adobe's CSV format covers title and keywords only.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T12:19:01.977694Z"
        >
            <Origin>019cd7af-a78f-7bf8-86c6-1031e840e8e1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Excellent and did you comment on querying tigerweb and using their geographical data as part of stock art?
                Is that okay?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T12:19:16.511619Z"
        >
            <Origin>019cd7af-a78f-7496-bc32-7335dd346d8c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, covered this in a previous session. The short answer is <Word>
                    <Bold />
                    yes, it's fine.
                </Word>
            </Paragraph>
            <Paragraph>
                TIGERweb / TIGER/Line data is produced by the US Census Bureau, which is a US government work. Under 17
                U.S.C. §105, US federal government works are not subject to copyright — they're in the public domain by
                statute. That means you can use the geographic data commercially, including in stock art sold on Adobe
                Stock, without attribution or licensing fees.
            </Paragraph>
            <Paragraph>
                The one caveat noted: <Word>
                    <Bold />
                    don't use "TIGER/Line®" in the product name or description
                </Word> — that's a registered trademark even though the data itself is free. Just call it a "US map" or
                reference Census Bureau data generically.
            </Paragraph>
            <Paragraph>The strategic split established was:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Natural Earth
                    </Word> (110m/50m resolution) for world maps — public domain, no attribution required
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        TIGERweb
                    </Word> for US-specific detail maps at state, county, metro, or census tract level — free via REST API
                    returning GeoJSON, same public domain status
                </Line>
            </Paragraph>
            <Paragraph>
                TIGERweb's REST API is particularly useful because you can query it programmatically by geography — so
                generating 50 state maps or all 3,000+ county maps becomes a scripted batch operation rather than manual
                work. That's a natural fit for the kind of pipeline you're building.
            </Paragraph>
        </Message>
    </Chapter>
);
