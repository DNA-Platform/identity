import { Bold, Chapter, Date, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 March 2026](2026-03-10)</Date>
        </Dated>
        <Title>[[ 10 March 2026 ]]</Title>
        <Message
            at="2026-03-10T12:43:47.534890Z"
        >
            <Origin>019cd7c6-5523-7eac-84d2-0c0f1bc1a595</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am using claude code to automate the way that we submit to microstock sites. We have adobe stock down. We
                start with svg, generate metadata through research, then use inkscape to generate an ai file with metadata
                included, generate a batch csv for categories, have claude log in, and I submit by hand. These is a status
                update mechanism. Along the way is validation absed on adobe stock rules. Now, we need to come up with the
                equivalent system for iStock. We chose ai files because we heard that is what illustrators find most useful
                on adobe stock. We know iStock has issues where you need to dedupe certain types of keywords
            </Paragraph>
            <Paragraph>
                I want you to write me a long thorough article on all the things we know for submitting to adobe stock -
                which officially works - and come up with a research plan for iStock to handle every part of this pipeline
            </Paragraph>
            <Paragraph>
                We also have the login info necessary in a .env file. What do we need to put in there for iStock? All part
                of your research
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T12:47:48.041351Z"
        >
            <Origin>019cd7c6-5523-755b-bcee-7163a12699ba</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “iStock contributor submission requirements 2024 2025 file formats EPS AI”</Action>
            <Action>
                Searched the web for “iStock Getty contributor portal vector illustration submission EPS format keyword
                dedupe rules 2024”
            </Action>
            <Action>
                Searched the web for “Getty ESP contributor portal login URL esp.gettyimages.com iStock illustration upload
                workflow”
            </Action>
            <Action>
                Searched the web for “iStock Getty ESP keyword rules singular plural duplicate rejection illustration
                submission”
            </Action>
            <Action>
                Searched the web for “iStock ESP illustration vector technical requirements EPS10 JPEG preview minimum size
                2024”
            </Action>
            <Paragraph>Now I have everything I need. Let me write this as a full document.</Paragraph>
            <Action>Read /mnt/skills/public</Action>
            <Action>Read /mnt/skills/public/docx/SKILL.md</Action>
            <Paragraph>
                Good — this is best as a Markdown reference doc since it's meant to be consumed as a recipe/reference. Let
                me write it.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Here's a summary of the key findings — particularly the differences that drive the entire iStock pipeline
                design:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The critical iStock differences from Adobe Stock:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Format
                </Word> is the biggest shift. iStock does not accept <Word>
                    <Verbatim />
                    .ai
                </Word> files from contributors. You need <Word>
                    <Bold />
                    EPS10 + JPEG as a matched pair
                </Word>, same base filename. The JPEG must be at minimum 1900×2800px at maximum quality. The IPTC metadata
                (title, keywords, description) must be embedded in the <Word>
                    <Bold />
                    JPEG
                </Word>, not the EPS — this flips where ExifTool writes in the pipeline.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Keywords
                </Word> are the biggest complication. iStock uses Getty's controlled vocabulary — every keyword must map to
                an approved term or it gets silently dropped. This is the deduplication problem you mentioned, and it's
                real. The document includes a full Phase 3 research plan to build a <Word>
                    <Verbatim />
                    keyword-map.json
                </Word> that translates your free-text keywords to Getty-controlled terms, with deduplication of terms that
                resolve to the same concept.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    No SFTP.
                </Word> Everything goes through the ESP web UI at <Word>
                    <Verbatim />
                    esp.gettyimages.com
                </Word>. The <Word>
                    <Verbatim />
                    .env
                </Word> additions are just <Word>
                    <Verbatim />
                    ISTOCK_EMAIL
                </Word>, <Word>
                    <Verbatim />
                    ISTOCK_PASSWORD
                </Word>, and <Word>
                    <Verbatim />
                    ISTOCK_COUNTRY_CODE
                </Word> (Romania = <Word>
                    <Verbatim />
                    RO
                </Word>).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Biggest unknowns
                </Word> requiring live testing: whether Inkscape EPS passes iStock's format validation without going through
                Illustrator, and whether ESP has any CSV/API bulk metadata path or whether Playwright has to type every
                field.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T13:08:08.291741Z"
        >
            <Origin>019cd7dc-9b44-7de1-bc71-7efce4594696</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so do some more research on inkscape EPS and istock. See if they match. Add in notes about generating
                the JPEG and its dimensions and talk about validation. As for the controlled vocabularly, is there some way
                for claude code to either understand the rules or use a web service to check? Write a lot about the
                controlled vocabulary - as much as you can find - so we can breeze past this issue. Keep editing your file,
                and give claude code integration tasks - integrate this or that into the current system, add this or that to
                the documentation. We use documentation for everything in natural language form. If it corresponds to code,
                the docs reference the code so that the whole system is navigable. Great start, Keep making it better
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T13:15:05.854672Z"
        >
            <Origin>019cd7dc-9b44-7836-9aa6-398308e7667d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Inkscape EPS export iStock Getty accepted rejected vector submission format
                compatibility”
            </Action>
            <Action>
                Searched the web for “Getty Images controlled vocabulary API keyword check endpoint iStock ESP keywording
                service”
            </Action>
            <Action>
                Searched the web for “DeepMeta Getty ESP API vocabulary lookup endpoint network request keyword
                disambiguation JSON”
            </Action>
            <Action>Fetched https://pkg.go.dev/github.com/dysolution/espsdk</Action>
            <Action>
                Searched the web for “iStock illustration JPEG companion minimum dimensions 1900x2800 OR 4MP OR pixels
                preview requirements ESP contributor 2024”
            </Action>
            <Action>Fetched https://contributors.gettyimages.com/article/9146</Action>
            <Action>
                Searched the web for “iStock vector illustration JPEG preview "minimum" pixels contributor requirements 2024
                site:contributors.gettyimages.com”
            </Action>
            <Paragraph>
                Now I have everything I need for a substantially improved document. Let me update the file.
            </Paragraph>
            <Action>Read /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md</Action>
            <Action>Edited /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md</Action>
            <Action>Edited a file</Action>
            <Action>Read /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md</Action>
            <Action>Read /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md</Action>
            <Action>Read /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md</Action>
            <Paragraph>Now I'll replace the research plan and add all the new deep sections:</Paragraph>
            <Action>Edited /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md</Action>
            <Action>
                Ran wc -l /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md &amp;&amp; echo "---" &amp;&amp; tail
                -20 /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md
            </Action>
            <Paragraph>There's leftover content at the end from the old document. Let me clean it up:</Paragraph>
            <Action>Read /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md</Action>
            <Action>Edited /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md</Action>
            <Action>
                Ran wc -l /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md &amp;&amp; tail -10
                /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md
            </Action>
            <Paragraph>There's still a remnant of the old Phase 6 content. Let me check:</Paragraph>
            <Action>Read /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md</Action>
            <Action>Edited /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md</Action>
            <Action>
                Ran wc -l /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md &amp;&amp; tail -6
                /mnt/user-data/outputs/microstock-pipeline-adobe-istock.md
            </Action>
            <Action>Presented files</Action>
            <Paragraph>The document is now 1,293 lines — roughly doubled — with these major expansions:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Part 3 — Inkscape EPS Analysis (new, deep)
                </Word> The short answer: Inkscape's native EPS is unreliable for iStock. It produces PostScript Level 3,
                not Illustrator-dialect EPS, and will rasterize any transparent areas in the pattern. The recommended path
                is the two-stage <Word>
                    <Verbatim />
                    SVG → AI
                </Word> (already done for Adobe Stock) and then <Word>
                    <Verbatim />
                    AI → EPS10
                </Word> via Ghostscript's <Word>
                    <Verbatim />
                    eps2write
                </Word> device — fully headless, no Illustrator required. The document includes the exact shell command, the
                validation grep checks for raster contamination and live fonts, and notes the specific failure modes to
                watch for in the test submission.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Part 4 — JPEG Specification (new, complete)
                </Word> Full spec: 4000×4000 for square patterns, proportional scaling with 1900px floor on short side, PNG
                intermediate via Inkscape, JPEG at quality 100 via ImageMagick, sRGB color space, and all required IPTC
                fields embedded via ExifTool with the exact field names and ExifTool CLI syntax.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Part 5 — Controlled Vocabulary (exhaustive)
                </Word> The big section. Key findings:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The ESP API is real and confirmed via the open-source <Word>
                        <Verbatim />
                        espsdk
                    </Word> Go package — there is a <Word>
                        <Verbatim />
                        ValidateKeywords()
                    </Word> endpoint at <Word>
                        <Verbatim />
                        https://api.gettyimages.com/esp
                    </Word>
                </Line>
                <Line>
                    DeepMeta confirms it calls this endpoint live during keyword entry, using the contributor's own OAuth
                    session token — so Claude Code can do the same by extracting the token from the Playwright session
                </Line>
                <Line>
                    Three third-party services (Pixify.io, PhotoKeyworder.ai, PhotoTager) now offer Getty-vocabulary-aware
                    AI keyword generation as a paid API — any of them can be dropped into the pipeline
                </Line>
                <Line>Claude itself can approximate controlled-vocabulary compliance with a well-crafted prompt</Line>
                <Line>The minimum is 5 keywords (not 0 like Adobe Stock) — a hard floor</Line>
                <Line>
                    The document includes a full seed vocabulary of ~100 pattern-domain terms with confidence ratings, the
                    <Word>
                        <Verbatim />
                        keyword-map.json
                    </Word> schema, and the pre-deduplication rules (singular/plural, implied terms, synonym pairs)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Part 9 — Claude Code task list
                </Word> is completely restructured with explicit task IDs, file names, and cross-references to the relevant
                Part sections so any Claude Code session can pick up exactly where to start.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T15:20:52.394749Z"
        >
            <Origin>019cd856-2383-7b0e-a5d6-58a69a40fbc4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the iStock contributor name? We see contributor id</Paragraph>
        </Message>
        <Message
            at="2026-03-10T15:21:13.241367Z"
        >
            <Origin>019cd856-2383-7dbf-b776-66d747cdf3f0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched past conversations for “iStock contributor name Ana account”</Action>
            <Action>Searched past conversations for “iStock account username ESP login contributor portal”</Action>
            <Paragraph>
                I don't see Ana's specific iStock contributor name in my memories or past conversations — only her Adobe
                SFTP numeric ID (<Word>
                    <Verbatim />
                    209182981
                </Word>). The iStock contributor name is separate from a numeric ID and would be the username visible on her
                ESP profile or her public portfolio page at <Word>
                    <Verbatim />
                    istockphoto.com/portfolio/&lt;username&gt;
                </Word>.
            </Paragraph>
            <Paragraph>To find it, Ana can check:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ESP portal
                    </Word> → <Word>
                        <Verbatim />
                        esp.gettyimages.com
                    </Word> → Account Management → Profile — the "Display Name" or "Username" field
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        iStock public portfolio
                    </Word> URL — if she's ever browsed her own portfolio, the URL slug is her contributor name
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Account Management
                    </Word> at <Word>
                        <Verbatim />
                        accountmanagement.gettyimages.com
                    </Word> — shows the contributor name on file
                </Line>
            </Paragraph>
            <Paragraph>
                Once you have it, it goes in <Word>
                    <Verbatim />
                    .env
                </Word> as <Word>
                    <Verbatim />
                    ISTOCK_CONTRIBUTOR_NAME
                </Word> for the IPTC <Word>
                    <Verbatim />
                    By-line
                </Word> field in the JPEG metadata, and optionally as <Word>
                    <Verbatim />
                    ISTOCK_CONTRIBUTOR_USERNAME
                </Word> if it differs from her email (the DeepMeta docs distinguish between the login email and the display
                username used for board sync). Both values affect what gets embedded in every JPEG companion we generate, so
                it's worth getting right before running the pipeline.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T16:14:08.168658Z"
        >
            <Origin>019cd886-eda9-73a7-87e7-82b0447a3e07</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Here's where we are with the upload to iStock:</Paragraph>
            <Paragraph>Current state</Paragraph>
            <Paragraph>
                The build is done — 131 EPS+JPEG pairs sitting in dist/ folders, all validated, IPTC injected with correct
                metadata (RU, 49 keywords each). Manual upload process
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Go to https://esp.gettyimages.com</Line>
                <Line>Log in (your ISTOCK_EMAIL / ISTOCK_PASSWORD from .env)</Line>
                <Line>Create a batch — type: "iStock Creative Illustration", non-exclusive</Line>
                <Line>Upload EPS + JPEG pairs — the files are in:</Line>
                <Paragraph>
                    <List />
                    <Line>repo/serens-squares/dist/ (1 pair)</Line>
                    <Line>repo/iran-war/iran-lebanon-front/dist/ (1 pair)</Line>
                    <Line>repo/iran-war/iran-retaliation-arc/dist/ (1 pair)</Line>
                    <Line>repo/world-options/dist/ (129 pairs)</Line>
                </Paragraph>
                <Line>ESP reads IPTC from the JPEGs — title, keywords, country should auto-populate</Line>
                <Line>Review keyword disambiguation (ESP flags terms not in Getty's controlled vocabulary)</Line>
                <Line>
                    Submit batch What could be automated (Phase 6) Playwright browser automation for steps 1-4 and 7,
                    similar to what we have for Adobe Stock. Keyword disambiguation (step 6) would still need human
                    judgment. Practical concern Uploading 131 pairs (262 files) through a web portal is tedious. ESP may
                    support drag-and-drop of a folder, or batch upload. Want me to research whether ESP has a bulk upload
                    feature, or would you rather start with a smaller test batch — say just serens-squares — to confirm the
                    IPTC metadata gets read correctly before uploading all 131?
                </Line>
            </Paragraph>
            <Paragraph>
                Can you do research and decide on the best way to upload in bulk? What does microstock submitter do? What do
                biug firms do? What si the best way to do this?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T16:14:17.207361Z"
        >
            <Origin>019cd886-eda9-7aac-8380-552533cf23f8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Getty ESP bulk upload FTP API contributor 100+ files illustration batch 2024 2025”
            </Action>
            <Action>
                Searched the web for “Getty ESP API upload endpoint multipart POST illustration batch espsdk gettyup
                programmatic 2024”
            </Action>
        </Message>
        <Message
            at="2026-03-10T16:16:35.711279Z"
        >
            <Origin>31353ba8-1649-40e6-9163-b4d5b15a18ea</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “DeepMeta 4 iStock Getty upload EPS vector illustration batch how it works API”
            </Action>
            <Action>
                Searched the web for “Getty Images ESP API key contributor access "developer.gettyimages.com" regular
                contributor can apply 2024”
            </Action>
            <Paragraph>
                Here's the full picture, synthesized from research across tools, the ESP API, and what professional
                contributors actually do at scale.
            </Paragraph>
            <Heading>The Landscape</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Three paths exist for bulk iStock upload:
                </Word>
            </Paragraph>
            <Heading>Path 1: Raw ESP web portal (what you're doing now)</Heading>
            <Paragraph>
                Manual drag-and-drop through <Word>
                    <Verbatim />
                    esp.gettyimages.com
                </Word>. Fine for 5 files. Painful for 262. No scripting hooks. Dead end for scale.
            </Paragraph>
            <Heading>Path 2: The ESP API directly</Heading>
            <Paragraph>
                A real contributor REST API exists at <Word>
                    <Verbatim />
                    https://api.gettyimages.com/esp
                </Word> with a sandbox at <Word>
                    <Verbatim />
                    https://esp-sandbox.api.gettyimages.com/esp
                </Word>. There's even an open-source Go SDK (<Word>
                    <Verbatim />
                    dysolution/espsdk
                </Word>) and CLI (<Word>
                    <Verbatim />
                    dysolution/gettyup
                </Word>) that wrap it. To use it, you need a username/password for <Word>
                    <Verbatim />
                    sandbox.espaws.com
                </Word> plus an API Key and Secret from <Word>
                    <Verbatim />
                    developer.gettyimages.com/apps/mykeys
                </Word>.
            </Paragraph>
            <Paragraph>
                The catch: the Getty Images API requires you to contact a Getty account rep to discuss access and licensing
                options. This API is gated — it's primarily for enterprise partners, not individual contributors. Getting
                keys as a solo contributor is not a reliable path in 2025.
            </Paragraph>
            <Heading>Path 3: DeepMeta or qHero (what pros actually use)</Heading>
            <Paragraph>
                This is the answer. Both tools wrap the ESP API using Getty-approved credentials under the hood.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    DeepMeta
                </Word> is the longest-standing tool. The DeepMeta software uses the Getty Images API and is endorsed by
                iStockphoto LP / Getty Images. You can fully manage and upload batches to Getty Images/iStockphoto with
                DeepMeta 4. The upload process starts with creating a submission batch. Once files are selected, upload to
                the Getty ESP server starts immediately, and you can close the Upload panel and re-open it at any time to
                check progress.
            </Paragraph>
            <Paragraph>
                Critically for Ana's situation: DeepMeta 4 supports importing CSV files with metadata to be applied to
                uploaded files — add the <Word>
                    <Verbatim />
                    .csv
                </Word> file at the same time as the JPG/EPS files you're uploading, and the CSV metadata will be applied.
                The format is compatible with Getty ESP import formats.
            </Paragraph>
            <Paragraph>
                Also: the date created and country fields will auto-populate if present in the IPTC/XMP data of the JPG
                thumbnail file for EPS vectors. Since the JPEGs already have IPTC injected, this means title, keywords, and
                country should auto-fill on import.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    qHero
                </Word> is the newer competitor. It's praised for semi-automatic disambiguation and makes it much more
                convenient and significantly faster to choose the meanings of terms and synonyms of keywords for large
                groups of similar files. Several contributors report it's faster than DeepMeta for keywording.
            </Paragraph>
            <Heading>The Critical Constraint: 100 Files Per Batch</Heading>
            <Paragraph>
                A batch can hold a maximum of 100 files. iStock automatically closes batches after 3 months of inactivity.
            </Paragraph>
            <Paragraph>
                With 131 pairs, that means <Word>
                    <Bold />
                    2 batches minimum
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Batch A: <Word>
                        <Verbatim />
                        world-options
                    </Word> first 100 pairs
                </Line>
                <Line>
                    Batch B: remaining 29 <Word>
                        <Verbatim />
                        world-options
                    </Word> + 3 singles from other folders
                </Line>
            </Paragraph>
            <Heading>Recommendation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Use DeepMeta for this upload.
                </Word> It's free-tier sufficient for 131 files, endorsed by Getty, reads the IPTC from the JPEGs
                automatically, and handles the keyword disambiguation UI far better than raw ESP. No coding needed for this
                phase.
            </Paragraph>
            <Paragraph>Steps:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Ana signs up at <Word>
                        <Verbatim />
                        deepmeta.creativ.zone
                    </Word> and connects her ESP account
                </Line>
                <Line>Create 2 batches of type "Creative Illustration"</Line>
                <Line>
                    Drag all EPS+JPEG pairs from the dist folders into each batch (DeepMeta reads IPTC automatically)
                </Line>
                <Line>Review keyword disambiguation in DeepMeta's UI — this is where human judgment is needed anyway</Line>
                <Line>Submit</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For Phase 6 automation
                </Word>, the most viable path is actually Playwright against DeepMeta's UI rather than raw ESP — the
                selectors will be more stable and the keyword disambiguation step still needs human review regardless.
                Alternatively, if we want fully headless, there's a path to apply for ESP API keys through the Getty
                developer portal and replicate what <Word>
                    <Verbatim />
                    espsdk
                </Word> does in TypeScript — but that requires Getty approval and is a bigger lift.
            </Paragraph>
            <Paragraph>The immediate action is: get Ana into DeepMeta today and upload the 131 pairs this week.</Paragraph>
        </Message>
        <Message
            at="2026-03-10T16:18:07.446145Z"
        >
            <Origin>019cd88a-94a2-7d97-85a5-0f267ac23c73</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                That sounds like a lot. We can't get most of the way there with what Claude can do controlling a browser,
                waiting for me to perform manual actions where possible? Integrating through a WHOLE new partner that we are
                not in control of is... not us doing it
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T16:18:23.920288Z"
        >
            <Origin>019cd88a-94a3-7aec-9cae-88eab6b7f6c3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and that's the correct instinct. We already have the Adobe Stock Playwright script — ESP is
                just another web app. Same pattern, different selectors.
            </Paragraph>
            <Paragraph>Here's what Playwright can handle unattended:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Log in to <Word>
                        <Verbatim />
                        esp.gettyimages.com
                    </Word>
                </Line>
                <Line>Create the 2 batches (type: Creative Illustration, non-exclusive)</Line>
                <Line>
                    Upload all 262 files in batches — Playwright can set files on <Word>
                        <Verbatim />
                        &lt;input type="file"&gt;
                    </Word> elements programmatically, no drag-and-drop needed
                </Line>
                <Line>Wait for uploads to complete (polling status)</Line>
                <Line>Read IPTC auto-populated metadata and verify it looks right</Line>
            </Paragraph>
            <Paragraph>Here's what genuinely needs a human:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Keyword disambiguation
                    </Word> — ESP flags terms not in Getty's controlled vocabulary and asks you to pick synonyms. This is
                    judgment work, not automation work. Playwright pauses, you do it, it resumes.
                </Line>
            </Paragraph>
            <Paragraph>
                So the script has two modes: <Word>
                    <Verbatim />
                    --upload
                </Word> (fully unattended, runs overnight if needed) and <Word>
                    <Verbatim />
                    --submit
                </Word> (you've done disambiguation, Playwright clicks Submit on each batch).
            </Paragraph>
            <Paragraph>
                The recipe for this is almost identical to <Word>
                    <Verbatim />
                    RECIPE_playwright_adobe_submit.md
                </Word> — same preflight checks, same session persistence pattern, same <Word>
                    <Verbatim />
                    storageState
                </Word> for auth. The main unknowns are the ESP selectors, which we capture once with <Word>
                    <Verbatim />
                    playwright codegen
                </Word> while Ana is logged in.
            </Paragraph>
            <Paragraph>
                Want me to write the recipe file for Claude Code now? It would cover: auth flow, batch creation, file upload
                loop with progress tracking, the pause-for-disambiguation handoff, and final submission.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T16:19:21.048381Z"
        >
            <Origin>019cd88b-b384-7f56-af3a-e31a83872b0d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Turn this into a well-researched more technical specification and make sure to check if other people have
                written sucnh things so you can reference their code in github or posts they have written about it: You're
                right, and that's the correct instinct. We already have the Adobe Stock Playwright script — ESP is just
                another web app. Same pattern, different selectors. Here's what Playwright can handle unattended:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Log in to <Word>
                        <Verbatim />
                        esp.gettyimages.com
                    </Word>
                </Line>
                <Line>Create the 2 batches (type: Creative Illustration, non-exclusive)</Line>
                <Line>
                    Upload all 262 files in batches — Playwright can set files on <Word>
                        <Verbatim />
                        &lt;input type="file"&gt;
                    </Word> elements programmatically, no drag-and-drop needed
                </Line>
                <Line>Wait for uploads to complete (polling status)</Line>
                <Line>Read IPTC auto-populated metadata and verify it looks right</Line>
            </Paragraph>
            <Paragraph>Here's what genuinely needs a human:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Keyword disambiguation — ESP flags terms not in Getty's controlled vocabulary and asks you to pick
                    synonyms. This is judgment work, not automation work. Playwright pauses, you do it, it resumes.
                </Line>
            </Paragraph>
            <Paragraph>
                So the script has two modes: <Word>
                    <Verbatim />
                    --upload
                </Word> (fully unattended, runs overnight if needed) and <Word>
                    <Verbatim />
                    --submit
                </Word> (you've done disambiguation, Playwright clicks Submit on each batch). The recipe for this is almost
                identical to <Word>
                    <Verbatim />
                    RECIPE_playwright_adobe_submit.md
                </Word> — same preflight checks, same session persistence pattern, same <Word>
                    <Verbatim />
                    storageState
                </Word> for auth. The main unknowns are the ESP selectors, which we capture once with <Word>
                    <Verbatim />
                    playwright codegen
                </Word> while Ana is logged in. Want me to write the recipe file for Claude Code now? It would cover: auth
                flow, batch creation, file upload loop with progress tracking, the pause-for-disambiguation handoff, and
                final submission.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T16:22:17.518026Z"
        >
            <Origin>019cd88b-b384-7958-8505-490fd57d058a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “iStock ESP playwright selenium automation upload script github 2023 2024”</Action>
            <Action>
                Searched the web for “esp.gettyimages.com DOM selectors "file upload" batch create contributor automation
                reverse engineer 2024”
            </Action>
            <Action>
                Searched the web for “playwright "file chooser" "setInputFiles" upload multiple files bulk stock site
                automation pattern”
            </Action>
            <Action>
                Searched the web for “iStock ESP upload batch "keyword disambiguation" UI flow "controlled vocabulary" how
                keywords work istock contributor 2024”
            </Action>
            <Paragraph>Now I have everything I need. Let me write the spec.</Paragraph>
            <Action>Read /mnt/skills/public</Action>
            <Action>Created /mnt/user-data/outputs/RECIPE_istock_esp_playwright.md</Action>
            <Action>Presented files</Action>
            <Paragraph>The key findings that shaped this spec:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    No one has published an ESP Playwright script.
                </Word> The automation space for iStock is dominated by DeepMeta and qHero, which use private ESP API keys
                shared within contributor communities (reportedly via Telegram). The open-source <Word>
                    <Verbatim />
                    dysolution/espsdk
                </Word> Go library is the best public documentation of what the ESP REST API looks like under the hood —
                useful as a reference even though we're not using it directly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Keyword disambiguation is genuinely the hard blocker.
                </Word> Every third-party tool (DeepMeta, qHero, StockSubmitter) exposes it as a human-assisted UI step. The
                approach that works at scale is remembering your choice of a controlled term so that the next time you use
                that keyword it automatically converts — meaning each image takes progressively less time as more terms are
                learned. Since our 129 <Word>
                    <Verbatim />
                    world-options
                </Word> files share nearly identical keyword sets, doing disambiguation once on the first file propagates to
                essentially all the rest.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The two-phase  0  /  1  model is correct.
                </Word> Upload runs unattended overnight, saves batch URLs to a JSON file, then <Word>
                    <Verbatim />
                    --submit
                </Word> picks up where it left off after Ana does disambiguation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one blocker before Claude Code can run this:
                </Word> a <Word>
                    <Verbatim />
                    playwright codegen
                </Word> session with Ana logged in to capture the actual ESP selectors. All unknowns are isolated in <Word>
                    <Verbatim />
                    istock-selectors.ts
                </Word> so they're easy to fill in and maintain.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T17:06:57.601547Z"
        >
            <Origin>019cd8b7-4975-7991-a4cc-c5df36187cf9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                It looks like the UI recently changed. I uploaded a jpg / eps pair but it said it couldn't find date created
                or the keywords. Not clear how its searching the data to find these things. Has iStocks updated very very
                recently?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-10T17:07:31.826335Z"
        >
            <Origin>019cd8b7-4975-7604-99d6-f7a3cc3f3881</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “iStock ESP upload 2025 IPTC metadata not reading date created keywords change”
            </Action>
            <Action>
                Searched the web for “iStock ESP "new upload" interface 2025 redesign metadata fields changed contributor
                community”
            </Action>
            <Paragraph>
                I found the key signal in DeepMeta's changelog. This is almost certainly a <Word>
                    <Bold />
                    metadata namespace mismatch
                </Word>, not an ESP UI change. Let me explain what's happening.
            </Paragraph>
            <Heading>What ESP Actually Reads</Heading>
            <Paragraph>
                The DeepMeta changelog records two directly relevant bugs they had to fix: "Upload: If an illustration is
                added for upload and neither the EPS nor the JPG has a date in the <Word>
                    <Bold />
                    exif
                </Word>, the last modified date of the EPS will be used as the creation date" and "Upload: Fix: upon adding
                files, if creation date was provided as <Word>
                    <Bold />
                    string
                </Word> in exif, it was not read."
            </Paragraph>
            <Paragraph>
                That's the tell. <Word>
                    <Bold />
                    ESP reads date from EXIF, not from IPTC IIM.
                </Word> And it's picky about the format.
            </Paragraph>
            <Paragraph>
                The likely problem with the build pipeline is that <Word>
                    <Verbatim />
                    exiftool
                </Word> was told to write <Word>
                    <Verbatim />
                    -DateCreated
                </Word> which writes to <Word>
                    <Verbatim />
                    IPTC:DateCreated
                </Word> in IIM format (<Word>
                    <Verbatim />
                    YYYYMMDD
                </Word> — a bare integer string). ESP is looking for <Word>
                    <Verbatim />
                    EXIF:DateTimeOriginal
                </Word> or <Word>
                    <Verbatim />
                    XMP:DateCreated
                </Word> in ISO 8601 format (<Word>
                    <Verbatim />
                    YYYY:MM:DD HH:MM:SS
                </Word> for EXIF, or <Word>
                    <Verbatim />
                    YYYY-MM-DD
                </Word> for XMP).
            </Paragraph>
            <Paragraph>
                Similarly for keywords — if they were written as a single semicolon-delimited string to one field rather
                than as individual repeated <Word>
                    <Verbatim />
                    -Keywords
                </Word> tags across both IPTC and XMP namespaces, ESP may not parse them.
            </Paragraph>
            <Heading>The Fix</Heading>
            <Paragraph>Run this on one of the JPEGs to see exactly what's in it right now:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`exiftool -DateCreated -XMP:DateCreated -EXIF:DateTimeOriginal -Keywords -XMP:Subject repo/serens-squares/dist/serens-squares.jpg`}
            </CodeBox>
            <Paragraph>
                Then the corrected exiftool write command for the build pipeline should write to <Word>
                    <Bold />
                    all three namespaces simultaneously
                </Word>:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`exiftool \\
  -IPTC:DateCreated="20250101" \\
  -XMP:DateCreated="2025-01-01" \\
  -EXIF:DateTimeOriginal="2025:01:01 00:00:00" \\
  -IPTC:Keywords="geometric pattern" \\
  -IPTC:Keywords="seamless" \\
  -XMP:Subject="geometric pattern" \\
  -XMP:Subject="seamless" \\
  output.jpg`}
            </CodeBox>
            <Paragraph>
                Note the repeated <Word>
                    <Verbatim />
                    -IPTC:Keywords
                </Word> and <Word>
                    <Verbatim />
                    -XMP:Subject
                </Word> flags — each one is a separate keyword entry, not a delimited string in one field.
            </Paragraph>
            <Heading>What to Do Right Now (Before Re-running the Pipeline)</Heading>
            <Paragraph>
                Run the read command above on Ana's test JPEG first. If the date and keywords show up in IPTC but not in XMP
                or EXIF, that confirms the diagnosis and we just need to update the build script's exiftool flags. The fix
                is a one-line change, then regenerate the JPEGs for all 131 pairs.
            </Paragraph>
        </Message>
    </Chapter>
);
