import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 March 2026](2026-03-05)</Date>
        </Dated>
        <Title>[[ 5 March 2026 ]]</Title>
        <Message
            at="2026-03-05T09:32:25.685949Z"
        >
            <Origin>019cbd57-5c18-700f-9eea-92cb4028bb75</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Let us explore the idea of pushing stock art to adobe stock. How can this be done programmatically? What
                tools exist and what does one have to do to qualify to use them? How do stock artists at scale automate if
                they had coding skills? Please do comprehensive research
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T09:33:37.190465Z"
        >
            <Origin>019cbd57-5c18-7e67-8a87-458fb9b5e6da</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Adobe Stock contributor API programmatic upload 2024”</Action>
            <Action>
                Searched the web for “Adobe Stock contributor SFTP upload automation scripting workflow qualified accounts”
            </Action>
            <Action>Searched the web for “Shutterstock contributor API upload programmatic stock images 2024 2025”</Action>
            <Action>
                Searched the web for “Xpiks StockSubmitter microstock automation tools scale contributor workflow 2024 2025”
            </Action>
            <Action>
                Searched the web for “Adobe Stock contributor CSV metadata upload bulk XMP IPTC automation generative AI
                content requirements 2025”
            </Action>
            <Paragraph>
                This is a rich and somewhat surprising landscape — Adobe's actual contributor infrastructure is more
                constrained than most people expect. Here's a comprehensive breakdown:
            </Paragraph>
            <Heading>The Hard Truth: No Public Contributor Upload API</Heading>
            <Paragraph>
                Adobe explicitly states there is no API for Stock Contributors — no public endpoint to upload new content,
                get sales data, see top sellers, or see creation dates. Requests for Contributor API access are rejected
                outright. This is the wall everyone hits first.
            </Paragraph>
            <Paragraph>
                The Adobe Stock API that <Word>
                    <Emphasis />
                    does
                </Word> exist is for <Word>
                    <Bold />
                    customers
                </Word> (buyers/licensors), not suppliers. It supports searching for photos, videos, illustrations and
                vectors, and lets applications handle licensing of assets programmatically — but that's entirely the buyer
                side.
            </Paragraph>
            <Heading>The Real Programmatic Path: SFTP</Heading>
            <Paragraph>
                The closest thing to automation Adobe offers contributors is SFTP. Qualified accounts can use SFTP to upload
                file types, and when uploading large volumes of video content, SFTP is specifically recommended.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The catch:
                </Word> Only qualified accounts can use SFTP to upload files — if the SFTP option doesn't appear in the
                contributor portal, you must use the drag-and-drop method. The qualification criteria are opaque. No one
                seems to know exactly why certain accounts have access. It appears to be older, established accounts —
                contributors active since 2016 or earlier seem to have it, but the criteria have never been officially
                specified.
            </Paragraph>
            <Paragraph>
                If you <Word>
                    <Emphasis />
                    do
                </Word> have SFTP access, the server is <Word>
                    <Verbatim />
                    sftp.contributor.adobestock.com
                </Word> on port 22. Once files are on the SFTP site, they are automatically imported by a recurring job.
                This means you can script uploads using standard <Word>
                    <Verbatim />
                    ssh2-sftp-client
                </Word> in Node.js or <Word>
                    <Verbatim />
                    paramiko
                </Word> in Python — the file delivery itself becomes fully automatable.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Metadata via SFTP
                </Word> works through either embedded XMP/IPTC tags in the files themselves, or through a companion CSV
                file. If a file doesn't have a title or any embedded keywords, Adobe Stock will automatically suggest a
                title and up to 25 keywords — but if you've already added titles and keywords in Photoshop, Lightroom,
                Bridge, or another image editor, Adobe Stock will preserve them. That XMP-embedding path is important for a
                code-first workflow.
            </Paragraph>
            <Heading>The Metadata Layer: Where Coders Win</Heading>
            <Paragraph>
                Even without upload API access, the metadata pipeline is fully automatable using standard open formats.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    XMP/IPTC embedding
                </Word> is the key. Adobe reads <Word>
                    <Verbatim />
                    dc:title
                </Word>, <Word>
                    <Verbatim />
                    dc:description
                </Word>, and <Word>
                    <Verbatim />
                    dc:subject
                </Word> (keyword array) from XMP sidecar data embedded in the file. You can write this programmatically with
                libraries like <Word>
                    <Verbatim />
                    exiftool
                </Word> (command-line, wraps everything), <Word>
                    <Verbatim />
                    sharp
                </Word> in Node.js, or <Word>
                    <Verbatim />
                    pillow
                </Word>/<Word>
                    <Verbatim />
                    pyexiftool
                </Word> in Python. A code-savvy contributor can generate 500 files, run them through an AI vision model to
                generate titles and keywords, embed the metadata programmatically, then batch-push via SFTP — with zero
                manual UI interaction for the upload itself.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    CSV import
                </Word> is the other path. Adobe's contributor portal accepts CSV files to bulk-apply metadata to
                already-uploaded files. Contributors who upload titles, tags, and releases through CSV files have flagged a
                limitation: there's no way to mark content as AI-generated through CSV — that checkbox must be done manually
                in the portal. For non-AI content, CSV is fully scriptable.
            </Paragraph>
            <Heading>The Ecosystem of Automation Tools</Heading>
            <Paragraph>A whole category of desktop software has emerged to fill the gap Adobe left:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Xpiks
                </Word> — Cross-platform (Windows/Mac/Linux), it automates metadata workflows and uploads to microstocks and
                any server supporting FTP, SFTP, or FTPS. It automatically creates zip archives for vectors and previews and
                detects the best uploading mode. The primary benefit is that it lets you tag, title, describe, and do
                automatic uploads to all marketplaces from one interface. It has AI keywording and costs ~$35 one-time for
                Pro, ~$79/year for Pro+. It handles <Word>
                    <Emphasis />
                    upload
                </Word> but not <Word>
                    <Emphasis />
                    submission
                </Word> (you still confirm in the portal).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    StockSubmitter
                </Word> — Completely automates the microstock workflow: filling, translating and storing metadata, uploading
                and submitting content to dozens of agencies simultaneously. It includes a QuickMeta tagging system and lets
                you track sales and approval of content. Windows-only, subscription-based.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    SendStock AI
                </Word> — A newer desktop app that integrates metadata editor, CSV exporter, and FTP uploader in one tool.
                It includes a local AI model that runs entirely on your computer with no API costs, plus portfolio analytics
                synced from your Adobe Stock contributor account.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Auto Metadata AI / CSVNest / Adobe Contributor
                </Word> — A new wave of web-based tools that use OpenAI's vision API or local models to auto-generate
                titles, descriptions, and keywords, then export Adobe-compatible CSV files. One tool claims you can process
                up to 10,000 image metadata entries with approximately $10 of OpenAI credit.
            </Paragraph>
            <Heading>Other Platforms: Shutterstock Has More</Heading>
            <Paragraph>
                Shutterstock in 2025 expanded options for developers by launching self-serve API subscription plans that
                make it easier to preview and license images within applications at scale. Their API is far more open than
                Adobe's, with an official JavaScript SDK. That said, like Adobe, the public Shutterstock API is also
                oriented toward <Word>
                    <Emphasis />
                    buyers
                </Word>, not contributors submitting content.
            </Paragraph>
            <Paragraph>
                In a major industry development, Getty Images announced a planned merger with Shutterstock in early 2025,
                creating what many observers expect to become an even more dominant force in licensed imagery. This
                consolidation matters for strategy decisions about where to focus your distribution effort.
            </Paragraph>
            <Heading>What a Coder-Contributor Automation Stack Looks Like at Scale</Heading>
            <Paragraph>
                Putting this all together, here's the actual architecture a technical microstock contributor would build:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Generation pipeline
                    </Word> — AI image generation (Midjourney, SD, Firefly) or procedural generation (which is exactly what
                    DNA Patternity could become)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Quality/compliance filter
                    </Word> — automated checks for min resolution (4MP), anatomical errors in AI art, restricted brand names
                    in metadata
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        AI metadata generation
                    </Word> — vision model (GPT-4o, Gemini Vision, or a local model) generates title, description, and 25–50
                    ranked keywords per image, optimized per platform's SEO rules
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        XMP embedding
                    </Word> — <Word>
                        <Verbatim />
                        exiftool
                    </Word> or equivalent writes the metadata directly into the file headers
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Batch SFTP push
                    </Word> — Node/Python script deposits files to <Word>
                        <Verbatim />
                        sftp.contributor.adobestock.com
                    </Word> and equivalent endpoints for Shutterstock, Dreamstime, Pond5, Depositphotos simultaneously
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        CSV fallback
                    </Word> — for platforms without SFTP, export a companion CSV and automate browser submission using
                    Playwright or Puppeteer
                </Line>
            </Paragraph>
            <Paragraph>
                The single biggest remaining bottleneck is the <Word>
                    <Bold />
                    final submission click
                </Word> on Adobe's side — once files are uploaded and indexed, you still need to confirm each batch through
                the UI (or let tools like StockSubmitter handle it via browser automation). The AI checkbox for generative
                content is an additional manual step with no current CSV workaround.
            </Paragraph>
            <Heading>Relevance to DNA Patternity</Heading>
            <Paragraph>
                This is actually quite promising context for your project. Procedurally generated vector patterns like what
                you're building could be an ideal fit for the stock market — patterns, backgrounds, and seamless tiles are
                consistently high-demand categories. Your WebAssembly-accelerated generation pipeline could produce hundreds
                of unique, mathematically sound variations from a single algorithm, each with programmatically derived
                metadata describing the pattern properties. The SFTP+XMP pipeline means the entire workflow from generation
                to submission could be code-driven, with Xpiks or a custom Node script handling the final delivery.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T09:43:28.759245Z"
        >
            <Origin>019cbd61-771f-7630-a7ce-a7d3afcd3844</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay well we use stock submitter currently, or at least when Ana last worked actively on this. Can one use
                that programmatically? I want to be talking to Claude Code and Claude Code drives the process. Perhaps we
                can even use Selenium to interface with the site if need be but I don't want to hand roll that if
                unnecessary. Can stock submitter help with Claude Code automation? Or is it fundamentally UI bound?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T09:44:20.842412Z"
        >
            <Origin>019cbd61-771f-7591-867f-ed0cdbf4e774</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “StockSubmitter API CLI command line automation programmatic interface”</Action>
            <Action>
                Searched the web for “stocksubmitter.com automation headless batch upload API integration developer”
            </Action>
            <Action>Searched the web for “StockSubmitter CSV import bulk metadata import file format specification”</Action>
            <Action>Searched the web for “StockSubmitter watch folder hot folder automatic file detection workflow”</Action>
            <Action>Searched the web for “microstock.plus API REST endpoint programmatic upload documentation”</Action>
            <Paragraph>
                Here's the honest bottom line after that research: <Word>
                    <Bold />
                    StockSubmitter has no API, no CLI, no programmatic interface whatsoever.
                </Word> It's a Windows desktop GUI application that does its magic by internally running a headless Chromium
                browser to automate the submission portals. There's nothing to hook into from Claude Code without
                essentially reverse-engineering or scraping it.
            </Paragraph>
            <Paragraph>Here's the full picture of what your options actually are:</Paragraph>
            <Heading>What StockSubmitter Actually Is Under the Hood</Heading>
            <Paragraph>
                StockSubmitter's competitive edge is its automatic submit functionality — it visits each agency site and
                does the necessary assignment of metadata, model releases, and categories automatically. The way it does
                this is by running embedded browser automation internally. It's not exposing that as a hookable interface —
                it's the product itself.
            </Paragraph>
            <Paragraph>
                StockSubmitter and Microstock Plus both allow for automatic submission — not just getting files to agencies
                but filling all metadata fields on the websites and sending files for review, so you don't even need to
                visit agency websites at all. That functionality is baked into the closed application, not an SDK.
            </Paragraph>
            <Paragraph>
                There's no CSV import into StockSubmitter that triggers uploads. There's no named pipe, no local HTTP
                server, no file-system contract Claude Code could speak to. It's fundamentally a GUI app you sit in front
                of.
            </Paragraph>
            <Heading>The Microstock+ FTP Path — The Closest Thing</Heading>
            <Paragraph>
                M+ will recognize all the metadata and statuses saved in StockSubmitter. For now you can upload directly to
                M+ using its web uploader or FTP. This is the crack in the wall. Microstock+ (the cloud sibling of
                StockSubmitter) accepts files via FTP — meaning you can script a push to their ingest endpoint with XMP
                metadata embedded in the files, and their servers handle submission to all agencies from there.
            </Paragraph>
            <Paragraph>The workflow Claude Code could drive:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Generate SVG/EPS pattern files</Line>
                <Line>
                    Embed XMP metadata (title, keywords, description) programmatically via <Word>
                        <Verbatim />
                        exiftool
                    </Word>
                </Line>
                <Line>SFTP the files to Microstock+'s FTP endpoint</Line>
                <Line>Their servers handle the multi-agency submission</Line>
            </Paragraph>
            <Paragraph>
                The weakness: Microstock+'s FTP ingest is <Word>
                    <Bold />
                    not documented as a stable API
                </Word> — it's the same credentials you'd enter manually, not a developer contract. It also still requires
                that someone has set up and configured the Microstock+ account with agency credentials in the web UI first.
            </Paragraph>
            <Heading>The Honest Architecture for Claude Code</Heading>
            <Paragraph>
                Given what exists, the cleanest path to Claude Code owning the entire pipeline is to <Word>
                    <Bold />
                    skip StockSubmitter entirely
                </Word> and build directly on the primitives:
            </Paragraph>
            <CodeBox>
                {`Claude Code
  │
  ├── Generates pattern files (SVG/EPS/PNG)
  │
  ├── Calls vision LLM (GPT-4o or Gemini) → title + 25 keywords per file
  │
  ├── exiftool → embeds XMP metadata into each file
  │
  ├── For Adobe Stock: ssh2-sftp-client → push to sftp.contributor.adobestock.com
  │   └── (requires "qualified" account — may need to verify Ana's account has SFTP access)
  │
  ├── For Shutterstock/others: same SFTP push to their FTP endpoints
  │
  └── For final "submit" click (if SFTP doesn't auto-submit):
      └── Playwright/Puppeteer browser automation → minimal targeted script
          per agency portal`}
            </CodeBox>
            <Paragraph>
                The only place you'd need Selenium/Playwright is the <Word>
                    <Bold />
                    final submission confirmation
                </Word> — after files arrive via SFTP, some agencies require you to click "Submit for Review" in their
                portal. That's a targeted 20-line Playwright script per agency, not a full StockSubmitter replacement.
            </Paragraph>
            <Heading>Practical Next Steps Before Committing to Any Path</Heading>
            <Paragraph>Two things to verify first:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Does Ana's Adobe Stock account have SFTP access?
                </Word> Log into the contributor portal, click Upload, look for "Learn more / import via SFTP." If you don't
                see that link, the account doesn't qualify for FTP upload and you'll need to use drag-and-drop or contact
                Adobe support. Without this, the cleanest path is blocked.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Does StockSubmitter still have the Adobe Stock SFTP credentials saved?
                </Word> If so, those same credentials (host + user ID) are what you'd use directly — you don't need
                StockSubmitter to get them.
            </Paragraph>
            <Heading>Summary Recommendation</Heading>
            <Paragraph>
                Don't try to automate StockSubmitter — it's a sealed GUI app with no programmatic surface. The right move
                for a Claude Code–driven pipeline is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        XMP metadata embedding
                    </Word> via <Word>
                        <Verbatim />
                        exiftool
                    </Word> (scriptable, well-documented, cross-platform)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Direct SFTP upload
                    </Word> using Ana's existing contributor credentials
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Minimal Playwright scripts
                    </Word> only for the submit-confirmation step on portals that require it
                </Line>
                <Line>
                    Consider <Word>
                        <Bold />
                        Microstock+
                    </Word> as the multi-agency distribution layer if you want one upload to fan out to Shutterstock,
                    Dreamstime, Depositphotos etc. simultaneously — you'd SFTP to M+ once and they redistribute
                </Line>
            </Paragraph>
            <Paragraph>
                This gives Claude Code genuine end-to-end control over the pipeline, rather than trying to puppet a desktop
                app it can't speak to.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T09:46:22.179880Z"
        >
            <Origin>019cbd64-19f4-7549-9a71-3299656db856</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so just think about adobe stock. Either SFTP is or isn't available. If it is &#123;what&#125; and if it
                isn't &#123;what&#125; from an automation perspective? One way or another we can automate, but in one case
                we need to drive the browser like stock submitter
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T09:46:34.697084Z"
        >
            <Origin>019cbd64-19f4-7f27-b773-835fbbbc60d6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    If SFTP is available:
                </Word>
            </Paragraph>
            <Paragraph>
                Claude Code uses <Word>
                    <Verbatim />
                    ssh2-sftp-client
                </Word> (Node) or <Word>
                    <Verbatim />
                    paramiko
                </Word> (Python) to push files directly to <Word>
                    <Verbatim />
                    sftp.contributor.adobestock.com
                </Word>. Files land in the contributor portal's "Uploaded Files" tab automatically. XMP metadata embedded in
                the files pre-populates title and keywords. The only remaining manual step is clicking "Submit for Review" —
                which is a single targeted Playwright script that logs in, selects all pending files, and clicks submit.
                Fully headless, fully scriptable, Claude Code owns the entire pipeline.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If SFTP is not available:
                </Word>
            </Paragraph>
            <Paragraph>
                You're in StockSubmitter territory — browser automation all the way. The contributor portal upload is a
                drag-and-drop web UI, which means Playwright driving a real browser session: navigate to <Word>
                    <Verbatim />
                    contributor.stock.adobe.com
                </Word>, authenticate, trigger the file input element, feed it the generated files, wait for processing,
                fill metadata fields, click submit. This is exactly what StockSubmitter does internally. It's more fragile
                (Adobe can change the DOM and break it) but entirely doable. The metadata pre-population via XMP still helps
                because the portal reads embedded tags and auto-fills fields, reducing how much the browser script needs to
                type.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The practical difference:
                </Word>
            </Paragraph>
            <Paragraph>
                SFTP path is stable, fast, and Claude Code–native. The browser path needs maintenance when Adobe updates
                their UI, but it's the same class of problem StockSubmitter has been solving for 10+ years — meaning it's a
                solved problem, just one you'd be owning yourself rather than paying them to maintain.
            </Paragraph>
            <Paragraph>Worth checking Ana's account today before designing anything further.</Paragraph>
        </Message>
        <Message
            at="2026-03-05T09:48:11.491543Z"
        >
            <Origin>019cbd65-ca35-76ad-972c-1df4c1c57b10</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so do hard research into how stock submitter does it, what resources or repos are packages are out
                there to help, in each case. Architect a solution and tell me what I would say to Claude code - perhaps you
                could writing your coding reflection an editable markdown artifact to tell him how to accomplish this
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T09:50:27.366311Z"
        >
            <Origin>019cbd65-ca35-7139-b88a-5530d8bd05aa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “StockSubmitter internals browser automation Electron Chromium embedded how it works
                technically”
            </Action>
            <Action>
                Searched the web for “playwright adobe stock contributor portal upload file automation selectors”
            </Action>
            <Action>
                Searched the web for “exiftool embed XMP metadata EPS SVG vector file title keywords programmatic node.js”
            </Action>
            <Paragraph>Now I have everything needed to write the Claude Code brief. Let me build the artifact.</Paragraph>
            <Action>Read /mnt/skills/public</Action>
            <Action>Created /mnt/user-data/outputs/adobe-stock-automation.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                The document is ready and fully editable. A few things worth calling out from the research:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On StockSubmitter's internals:
                </Word> It's almost certainly CEF (Chromium Embedded Framework) — a pre-Electron approach to embedding a
                browser in a desktop app. The submission automation is just DOM scripting against the contributor portal
                inside that embedded browser. There's nothing proprietary about <Word>
                    <Emphasis />
                    what
                </Word> it does, only that they've maintained the selectors for 10+ years. Playwright does exactly the same
                thing, you just own the maintenance.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The most important thing in the document
                </Word> is the <Word>
                    <Verbatim />
                    playwright codegen
                </Word> instruction. Don't let Claude Code guess at Adobe's DOM selectors — run the recorder for 5 minutes
                against a real logged-in session and you'll get working TypeScript for free. Adobe's portal is a React SPA
                and the actual selectors won't match anything intuitive.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The  0  package
                </Word> is the right choice over the alternatives — it bundles the exiftool binary (no separate install),
                has excellent TypeScript types, and handles EPS/SVG/JPEG uniformly. The XMP embedding into EPS specifically
                is important for vectors because that's how Adobe Stock reads keywords from <Word>
                    <Verbatim />
                    .eps
                </Word> files before you even touch the portal UI.
            </Paragraph>
            <Paragraph>
                The doc assumes the project is already in Node/TypeScript given the Vite/React stack — let me know if you
                want a Python version of any section instead.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T09:57:41.614230Z"
        >
            <Origin>019cbd6e-a3aa-7681-adac-beebaa62793a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do I check adobe contributor portal to see if there’s SFTP access</Paragraph>
        </Message>
        <Message
            at="2026-03-05T09:57:48.616554Z"
        >
            <Origin>019cbd6e-a3aa-78e7-96d0-f5500a4eed9a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <List ordered />
                <Line>
                    Go to <Word>
                        <Bold />
                        https://contributor.stock.adobe.com
                    </Word>
                </Line>
                <Line>Log in with Ana's Adobe ID</Line>
                <Line>
                    Click the <Word>
                        <Bold />
                        Upload
                    </Word> button in the top right corner
                </Line>
                <Line>
                    Look for a line of text that says <Word>
                        <Bold />
                        "You can also import files using your SFTP"
                    </Word> with a <Word>
                        <Bold />
                        "Learn more"
                    </Word> link next to it
                </Line>
            </Paragraph>
            <Paragraph>If that text and link are there → SFTP is available.</Paragraph>
            <Paragraph>
                If you only see the blue drag-and-drop circle with no mention of SFTP → the account isn't qualified and
                you're on Path B (Playwright).
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T09:59:53.719199Z"
        >
            <Origin>019cbd70-a174-775c-9a77-628764e1a06e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>This means we have it right and what do we need to do to use it?</Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-05T10:00:04.340553Z"
        >
            <Origin>019cbd70-a174-740e-9c90-6f7a4f25a3fd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're on <Word>
                    <Bold />
                    Path A (SFTP)
                </Word>. That's the good news — clean, scriptable, no browser automation needed for the upload itself.
            </Paragraph>
            <Paragraph>
                Next, click <Word>
                    <Bold />
                    "Learn more"
                </Word> right there on that page. It will show you:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Hostname
                    </Word> — <Word>
                        <Verbatim />
                        sftp.contributor.adobestock.com
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Username
                    </Word> — Ana's numeric Adobe ID (a long number)
                </Line>
                <Line>
                    A <Word>
                        <Bold />
                        "Generate password"
                    </Word> button — click it to get the SFTP password
                </Line>
            </Paragraph>
            <Paragraph>
                Screenshot or copy those three things and put them in your <Word>
                    <Verbatim />
                    .env
                </Word> file:
            </Paragraph>
            <CodeBox
                language="env"
            >
                {`ADOBE_SFTP_USERNAME=208282878       # the numeric ID shown
ADOBE_SFTP_PASSWORD=xxxxxxxxxxxx    # the generated password
ADOBE_SFTP_AVAILABLE=true`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    One caveat:
                </Word> that generated password may expire or need to be regenerated periodically. If uploads start failing,
                come back here and hit "Generate password" again.
            </Paragraph>
            <Paragraph>
                Once you have those credentials, Claude Code can run the SFTP pipeline from the brief — embed XMP into the
                files, push them to the server, then run the small Playwright script just for the final "Submit for Review"
                click. The upload itself is fully headless.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T11:05:31.864859Z"
        >
            <Origin>019cbdac-bfe3-7f04-b53f-faea66541cc5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is this small playwright script? Is this a known thing?</Paragraph>
        </Message>
        <Message
            at="2026-03-05T11:05:47.535209Z"
        >
            <Origin>019cbdac-bfe3-779c-bc57-efd58e6b0d16</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                It's not a pre-built package — it's something we'd write, but it's very simple and well-understood
                territory.
            </Paragraph>
            <Paragraph>Here's what it actually needs to do after the SFTP upload lands the files in the portal:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Log into the contributor portal with Adobe credentials</Line>
                <Line>Navigate to the "Uploaded Files" tab</Line>
                <Line>Select all pending files</Line>
                <Line>Click "Submit for Review"</Line>
            </Paragraph>
            <Paragraph>
                That's maybe 30-50 lines of Playwright. The reason it exists at all is that SFTP handles the <Word>
                    <Emphasis />
                    file delivery
                </Word> but Adobe still requires a human (or script) to confirm the metadata and press submit in the portal
                UI.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one genuinely unknown part
                </Word> is the exact DOM selectors — what the "Select All" checkbox is called, what the Submit button's
                selector is. Adobe's contributor portal is a React app and the class names are often generated/unstable.
            </Paragraph>
            <Paragraph>
                The answer to that is <Word>
                    <Verbatim />
                    playwright codegen
                </Word> — a built-in tool that records a real browser session:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`npx playwright codegen https://contributor.stock.adobe.com`}
            </CodeBox>
            <Paragraph>
                It opens a real browser, you log in and manually do one submit cycle (select files → click submit), and
                Playwright writes the TypeScript for you in real time. You get working selectors without guessing.
            </Paragraph>
            <Paragraph>So the flow for Claude Code would be:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    You run <Word>
                        <Verbatim />
                        playwright codegen
                    </Word> once manually with Ana's account
                </Line>
                <Line>Copy the generated script</Line>
                <Line>Claude Code cleans it up and wraps it into the pipeline</Line>
            </Paragraph>
            <Paragraph>
                It's a one-time recording effort, then it runs headlessly forever after. The only maintenance is re-running
                codegen if Adobe changes their UI significantly.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T11:06:58.150913Z"
        >
            <Origin>019cbdae-1045-727f-8db0-e31b8c0d2c1c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Why don’t you write a short recipe for yourself for writing the playwright script because you have more
                context and more Internet access so you can help yourself over there by generating something here and why
                don’t you put it in a file form so I can stick it in the project and have you understand what you yourself
                need - this is a funny perspective thing, but it truly is useful
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T11:07:16.446439Z"
        >
            <Origin>019cbdae-1045-71a7-bdc2-59d877fb6f12</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/project</Action>
            <Action>
                Searched the web for “Adobe Stock contributor portal "contributor.stock.adobe.com" upload tab selectors
                submit button DOM structure 2024 2025”
            </Action>
            <Action>
                Searched the web for “adobe stock contributor portal "uploaded files" tab submit review button automation
                selenium playwright script”
            </Action>
            <Action>
                Searched the web for “adobe stock contributor portal login IMS adobe identity "ims-na1.adobelogin.com" auth
                flow oauth”
            </Action>
        </Message>
        <Message
            at="2026-03-05T11:09:03.008599Z"
        >
            <Origin>6d7f9793-ac5c-4ffd-bc81-e8a9cb17ea88</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /mnt/user-data/outputs/RECIPE_playwright_adobe_submit.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Drop this in the root of the DNA Patternity project as <Word>
                    <Verbatim />
                    RECIPE_playwright_adobe_submit.md
                </Word> and Claude Code will find it.
            </Paragraph>
            <Paragraph>The key things I encoded that you'd otherwise have to re-explain:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Why
                    </Word> <Word>
                        <Verbatim />
                        playwright codegen
                    </Word> is mandatory before writing selectors (React SPA, unstable class names)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Adobe's SUSI auth flow
                    </Word> — it's multi-step and you have to let the browser handle it, not construct tokens
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Session persistence pattern
                    </Word> with <Word>
                        <Verbatim />
                        storageState
                    </Word> so it doesn't log in every run
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Confidence levels
                    </Word> on each part — so Claude Code knows where to be careful vs. where to just write it
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        What not to do
                    </Word> — specifically not to try to reverse-engineer the XHR calls (a tempting but dead-end path)
                </Line>
            </Paragraph>
            <Paragraph>
                The self-referential framing is genuinely useful because you're essentially writing the project brief <Word>
                    <Emphasis />
                    to the executor
                </Word> — and the executor happens to be me, so I can be quite precise about what I'll need and where I'll
                get confused.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T11:10:53.064133Z"
        >
            <Origin>019cbdb1-a497-7088-b34b-ef4e27c8926b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Read the last prompt and your current progress. You just didn’t either finish the file or share it so finish
                your work please because sometimes we get into little UI blurps
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T11:11:02.616251Z"
        >
            <Origin>019cbdb1-a497-7db1-b35e-f0d638bad156</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Ran wc -l /mnt/user-data/outputs/RECIPE_playwright_adobe_submit.md &amp;&amp; tail -20
                /mnt/user-data/outputs/RECIPE_playwright_adobe_submit.md
            </Action>
            <Paragraph>
                The file is complete — 250 lines, ending properly. Looks like it was just a UI blip on the share. Here it is
                again:
            </Paragraph>
            <Action>Presented files</Action>
            <Paragraph>Good to go — drop it in the project root and Claude Code will have everything it needs.</Paragraph>
        </Message>
        <Message
            at="2026-03-05T11:12:01.948448Z"
        >
            <Origin>019cbdb2-b388-7ad2-b0d0-1da3c83ecc84</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you also put in there information about how to store whatever Ana needs to get from Adobe in a file so
                that Claude will know whether or not it’s there and can tell us what he needs
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T11:12:30.165273Z"
        >
            <Origin>019cbdb2-b388-7ab8-8c3d-58706cf81b6e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Edited /mnt/user-data/outputs/RECIPE_playwright_adobe_submit.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Added a full "What Ana Needs to Gather" section with a table showing exactly where each credential comes
                from, plus a <Word>
                    <Verbatim />
                    preflight()
                </Word> function that Claude Code must implement at the top of the script.
            </Paragraph>
            <Paragraph>
                The key behavior it enforces: if anything is missing, the script exits immediately with a plain-English
                explanation of <Word>
                    <Emphasis />
                    what
                </Word> is missing and <Word>
                    <Emphasis />
                    where to get it
                </Word> — no cryptic errors. That way Ana (or you) can hand it to Claude Code cold and it'll guide whoever
                runs it through setup automatically.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-05T11:45:11.915746Z"
        >
            <Origin>019cbdd0-e62f-7cad-b7c4-0d2c71cec316</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We got this info from adobe. Can you put it into whatever file format you expect in code and tell me where
                to put it in the project and with what name?
            </Paragraph>
            <Attachment>Uploaded “1772711084182_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-05T11:45:31.157492Z"
        >
            <Origin>019cbdd0-e62f-716b-a6f9-57539e58b736</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /mnt/user-data/outputs/.env</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Put this file at the <Word>
                    <Bold />
                    root of the DNA Patternity project
                </Word> — same level as <Word>
                    <Verbatim />
                    package.json
                </Word> — named exactly <Word>
                    <Verbatim />
                    .env
                </Word> (the dot is important, it's a hidden file).
            </Paragraph>
            <Paragraph>Two things still need filling in:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        ADOBE_EMAIL
                    </Word> — Ana's Adobe login email
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        ADOBE_PASSWORD
                    </Word> — Ana's Adobe account password
                </Line>
            </Paragraph>
            <Paragraph>
                Also, the SFTP password <Word>
                    <Verbatim />
                    x:_rBJ-&#125;dJVTQO3&#123;
                </Word> has special characters so it's wrapped in quotes — that's intentional and correct.
            </Paragraph>
            <Paragraph>
                One important note: <Word>
                    <Bold />
                    that SFTP password is session-generated and will expire.
                </Word> When it stops working, Ana goes back to the same "Learn more" dialog in the portal, hits "Generate
                password," and pastes the new one in here to replace it.
            </Paragraph>
            <Paragraph>
                And make sure <Word>
                    <Verbatim />
                    .gitignore
                </Word> has <Word>
                    <Verbatim />
                    .env
                </Word> in it before the first commit — this file has live credentials in it.
            </Paragraph>
        </Message>
    </Chapter>
);
