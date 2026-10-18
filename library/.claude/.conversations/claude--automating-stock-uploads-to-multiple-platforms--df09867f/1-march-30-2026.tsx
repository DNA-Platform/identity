import { Bold, Chapter, Date, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 March 2026](2026-03-30)</Date>
        </Dated>
        <Title>[[ 30 March 2026 ]]</Title>
        <Message
            at="2026-03-30T13:24:43.115633Z"
        >
            <Origin>019d3eeb-00e5-7af6-b64a-a9385b1e365f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay I want to research how to upload things stocks, automated with claude code, to alamy, shutterstock and
                spoonflower
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:26:53.991163Z"
        >
            <Origin>019d3eeb-00e5-70de-861a-9dba1eb41fd3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Alamy contributor API upload automation 2024”</Action>
            <Action>Searched the web for “Alamy FTP upload contributor IPTC metadata automation”</Action>
            <Action>Searched the web for “Shutterstock contributor API upload automation 2024 2025”</Action>
            <Action>Searched the web for “Shutterstock contributor FTP SFTP CSV bulk upload vectors EPS”</Action>
            <Action>
                Searched the web for “Shutterstock contributor CSV metadata upload submit portal automation Playwright”
            </Action>
            <Paragraph>Now let me look at Spoonflower.</Paragraph>
            <Action>Searched the web for “Spoonflower API upload design automation contributor 2024”</Action>
            <Action>Fetched https://github.com/rocketbop/spoonflower-api</Action>
            <Paragraph>Good, I have everything I need. Let me write the spec doc.</Paragraph>
            <Action>Created /mnt/user-data/outputs/RECIPE_alamy_shutterstock_spoonflower.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Here's what the research found, per platform:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Alamy
                </Word> — FTP upload (EPS + matching JPEG to <Word>
                    <Verbatim />
                    Vectors/
                </Word> folder), metadata via IPTC embedded in the JPEG before upload. Illustrator's IPTC Description maps
                to their caption field, keywords map to tags. The only wrinkle: QC is batch-level — if one image fails, the
                whole batch fails, so small batches (same discipline as Adobe). They don't accept any AI-generated images,
                which is the main concern for DNA Patternity assets — framing matters. Supertags (10 out of 50 max) require
                Playwright on the Image Manager since they can't be set via IPTC.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Shutterstock
                </Word> — FTPS to <Word>
                    <Verbatim />
                    ftp.shutterstock.com
                </Word>, credentials are in the contributor portal Upload page. Metadata goes in via a CSV uploaded on the
                Submit content page (not via FTPS) — this is the key two-step: FTP the files, then Playwright to hit the
                Submit portal, upload the CSV, and click Submit. CSV columns are Filename, Description, Keywords,
                Categories, Illustration, Mature Content, Editorial. Files are auto-deleted if not submitted within 21 days.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Spoonflower
                </Word> — No API integration available. Full Playwright dependency. Accepts PNG and JPEG, up to 10 files at
                a time for logged-in accounts, 40MB max, sRGB only. The Design Library List View supports batch metadata
                edits which is the efficient Playwright target.
            </Paragraph>
            <Paragraph>
                The doc is stored at <Word>
                    <Verbatim />
                    docs/metadata/RECIPE_alamy_shutterstock_spoonflower.md
                </Word> and is structured as a CC handoff spec.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:38:09.957501Z"
        >
            <Origin>019d3ef7-5116-741b-ac25-268b06c409ad</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay so we already do EPS + JPG for iStock is it possible that alamy is similar?</Paragraph>
            <Paragraph>
                Shutterstock - what type of file is most premium? We have AI, EPS and JPG for others. Embedded metadata
                fdoesn't help at all?
            </Paragraph>
            <Paragraph>Let's worry about Spoonflower later</Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:38:54.358863Z"
        >
            <Origin>019d3ef7-5116-7099-add8-bc71313f8fcc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Shutterstock contributor upload AI file format accepted vectors 2024”</Action>
            <Paragraph>Good questions — a few significant findings here.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Alamy — yes, identical to iStock.
                </Word> EPS + matching JPEG pair, same filename, JPEG carries the IPTC. The only difference is Alamy's FTP
                folder is <Word>
                    <Verbatim />
                    Vectors/
                </Word> and their QC is batch-level. The file prep pipeline you already have for iStock works as-is.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Shutterstock — two important things:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. No .AI files.
                </Word> Shutterstock only accepts EPS, compatible with Illustrator 8 or 10. So your .AI files can't go there
                directly — they'd need to be saved out as EPS first (same export you do for iStock/Alamy anyway).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Embedded metadata does work — and you no longer need a JPEG at all.
                </Word> Shutterstock now automatically generates the JPEG preview from your EPS on ingest, so you only need
                to upload the EPS. They also read descriptions and keywords embedded in the EPS file itself. This means if
                you embed IPTC/XMP into the EPS via exiftool before upload, the Submit portal will pre-populate with your
                metadata — CSV becomes optional, not required.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. On "most premium" format
                </Word> — there's no premium tier by file type. They accept JPEG and TIFF for raster, but all images are
                converted to JPEG on approval anyway. For vectors, EPS is the only option. Premium = resolution and content
                quality, not format.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One more flag:
                </Word> Shutterstock does not allow AI-generated content from contributors, even though they have their own
                AI generator. Same policy as Alamy. Both platforms are closed to contributor-submitted AI content.
            </Paragraph>
            <Paragraph>So the updated picture for your pipeline:</Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Platform</Word>
                    <Word>Files needed</Word>
                    <Word>Metadata delivery</Word>
                </Line>
                <Line>
                    <Word>Adobe Stock</Word>
                    <Word>AI + JPEG</Word>
                    <Word>SFTP → CSV upload</Word>
                </Line>
                <Line>
                    <Word>iStock</Word>
                    <Word>EPS + JPEG</Word>
                    <Word>ESP portal (Playwright)</Word>
                </Line>
                <Line>
                    <Word>Alamy</Word>
                    <Word>EPS + JPEG</Word>
                    <Word>IPTC in JPEG (same as iStock)</Word>
                </Line>
                <Line>
                    <Word>Shutterstock</Word>
                    <Word>EPS only</Word>
                    <Word>Embed in EPS → auto-read on submit</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The EPS export you already do for iStock covers Alamy and Shutterstock too. Shutterstock is actually the
                simplest — one file, embedded metadata, no separate preview step.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:40:01.205472Z"
        >
            <Origin>019d3ef9-032e-7743-b3e6-99409938addc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay but they don't have all the iStock guidelines right and maybe different metadata lengths for the
                different fields? Is it identical identical? Check the docs
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:40:42.661400Z"
        >
            <Origin>019d3ef9-032e-7adc-ac94-ec1c9e2a56b5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Alamy vector EPS contributor guidelines caption tags character limit requirements
                2024”
            </Action>
            <Action>Searched the web for “Alamy keywording tag limit maximum supertags caption length stock”</Action>
            <Action>
                Searched the web for “Shutterstock contributor description title character limit keyword count requirements
                illustrations”
            </Action>
            <Action>Searched the web for “Shutterstock maximum keywords per image 50 limit vectors illustrations”</Action>
            <Paragraph>
                Good — now I have actual numbers from official docs to compare. Let me give you the real diff against
                iStock.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Alamy vs iStock — metadata fields
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Field</Word>
                    <Word>iStock/Getty ESP</Word>
                    <Word>Alamy</Word>
                </Line>
                <Line>
                    <Word>Title/Caption</Word>
                    <Word>Required</Word>
                    <Word>Required, caption only (no separate title field)</Word>
                </Line>
                <Line>
                    <Word>Caption length</Word>
                    <Word>~200 chars</Word>
                    <Word>150 characters for standard stock — notably shorter than iStock</Word>
                </Line>
                <Line>
                    <Word>Keywords</Word>
                    <Word>GIV controlled vocabulary, 20–50</Word>
                    <Word>Free-text, 50 tag max (phrases count as one tag)</Word>
                </Line>
                <Line>
                    <Word>Keyword minimum</Word>
                    <Word>None stated</Word>
                    <Word>Minimum 5 tags to go on sale</Word>
                </Line>
                <Line>
                    <Word>Keyword weighting</Word>
                    <Word>Order-based (first keywords weighted most)</Word>
                    <Word>10 supertags get extra search priority — not settable via IPTC</Word>
                </Line>
                <Line>
                    <Word>Categories</Word>
                    <Word>Required</Word>
                    <Word>Not required</Word>
                </Line>
                <Line>
                    <Word>Editorial flag</Word>
                    <Word>Required</Word>
                    <Word>Optional</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    150-char caption limit
                </Word> is the meaningful difference. iStock's title field is longer. If you're generating captions
                programmatically you need platform-specific truncation.
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    supertag system
                </Word> is also unique to Alamy — not a concept iStock has. They can't be set via IPTC, so if you want them
                you need the Image Manager (Playwright). For an automated pipeline you'd skip supertags initially and do a
                periodic cleanup pass.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Shutterstock — metadata fields
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Field</Word>
                    <Word>iStock/Getty ESP</Word>
                    <Word>Shutterstock</Word>
                </Line>
                <Line>
                    <Word>Title/Description</Word>
                    <Word>Separate title + description fields</Word>
                    <Word>Single description/title field, max 200 characters</Word>
                </Line>
                <Line>
                    <Word>Keywords</Word>
                    <Word>GIV controlled vocabulary</Word>
                    <Word>Free-text, minimum 7, maximum 50</Word>
                </Line>
                <Line>
                    <Word>Categories</Word>
                    <Word>Required</Word>
                    <Word>1 required, 2nd optional — from Shutterstock's own taxonomy</Word>
                </Line>
                <Line>
                    <Word>Keyword spamming</Word>
                    <Word>Not specified</Word>
                    <Word>
                        Actively enforced — no repeated root words (e.g. "seamless pattern blue, seamless pattern green" is
                        flagged as spam)
                    </Word>
                </Line>
                <Line>
                    <Word>Editorial flag</Word>
                    <Word>Separate field</Word>
                    <Word>Optional column in CSV</Word>
                </Line>
                <Line>
                    <Word>Illustration flag</Word>
                    <Word>Auto-detected</Word>
                    <Word>CSV column Illustration: Yes/No — must be set explicitly for JPEGs</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    category codes
                </Word> are the biggest pipeline difference. Shutterstock uses its own numeric taxonomy — you can't reuse
                Getty's GIV categories. You'd need a lookup table mapping your asset types to Shutterstock category IDs, or
                hardcode a default (e.g. <Word>
                    <Verbatim />
                    Backgrounds/Textures
                </Word> and <Word>
                    <Verbatim />
                    Abstract
                </Word> for patterns). The category list is in their docs.
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    keyword spam rule
                </Word> is also operationally important for pattern assets — "seamless pattern blue, seamless pattern
                geometric" would be flagged. Keywords should be individual concepts, not compound phrases with a repeated
                stem.
            </Paragraph>
            <Paragraph>
                So: <Word>
                    <Bold />
                    not identical
                </Word>. The file delivery model is similar (EPS + metadata), but caption length, category system, and
                keyword constraints differ enough that <Word>
                    <Verbatim />
                    metadata.js
                </Word> needs platform-specific output branches for each.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:42:09.019156Z"
        >
            <Origin>019d3efa-f179-7945-9aeb-0f47c611d81a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so what information does Ana need to get me from her portal to do this? Do we need FTP creds? Do they
                need to be generated? Do we need username and password for playright?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:42:31.702983Z"
        >
            <Origin>019d3efa-f179-73e2-a9e7-01e2c39748a5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No search needed — I have everything from the research. Here's exactly what Ana needs to pull from each
                portal:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Alamy
                </Word>
            </Paragraph>
            <Paragraph>From her contributor dashboard → Upload → FTP details:</Paragraph>
            <Paragraph>
                <List />
                <Line>FTP server address</Line>
                <Line>FTP username</Line>
                <Line>FTP password</Line>
            </Paragraph>
            <Paragraph>
                These are pre-generated — no action needed, just copy them out. They're separate from her login credentials.
            </Paragraph>
            <Paragraph>For Playwright (Image Manager, if we want supertags):</Paragraph>
            <Paragraph>
                <List />
                <Line>Her Alamy login email + password</Line>
                <Line>Check whether she has 2FA enabled — if so, same problem as Adobe</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Shutterstock
                </Word>
            </Paragraph>
            <Paragraph>From her contributor portal → Upload page → below the file upload tool:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    FTPS server (likely <Word>
                        <Verbatim />
                        ftp.shutterstock.com
                    </Word> but she should confirm the exact string shown)
                </Line>
                <Line>FTPS username</Line>
                <Line>FTPS password</Line>
            </Paragraph>
            <Paragraph>
                Again pre-generated, no action needed. Per the docs these are the same as her account credentials — unlike
                Adobe Stock which has a separate SFTP password generation step.
            </Paragraph>
            <Paragraph>
                For Playwright (Submit portal at <Word>
                    <Verbatim />
                    submit.shutterstock.com
                </Word>):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Her Shutterstock contributor login email + password</Line>
                <Line>Check for 2FA — same concern as Adobe</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One action item for both:
                </Word> Ana should check whether 2FA / phone verification is active on each account. That's the blocker we
                already hit with Adobe. If either platform has it enabled, she needs to disable it before Playwright can run
                unattended — same fix as the Adobe situation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Summary of what she sends you:
                </Word>
            </Paragraph>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Platform</Word>
                    <Word>Credential</Word>
                    <Word>Where she finds it</Word>
                </Line>
                <Line>
                    <Word>Alamy</Word>
                    <Word>FTP server + username + password</Word>
                    <Word>Dashboard → Upload → FTP details</Word>
                </Line>
                <Line>
                    <Word>Alamy</Word>
                    <Word>Login email + password</Word>
                    <Word>(she knows these)</Word>
                </Line>
                <Line>
                    <Word>Shutterstock</Word>
                    <Word>FTPS server + username + password</Word>
                    <Word>Contributor portal → Upload page</Word>
                </Line>
                <Line>
                    <Word>Shutterstock</Word>
                    <Word>Login email + password</Word>
                    <Word>(she knows these)</Word>
                </Line>
                <Line>
                    <Word>Both</Word>
                    <Word>2FA status</Word>
                    <Word>Account → Security settings</Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:43:00.542658Z"
        >
            <Origin>019d3efb-bfcd-7f3c-83ae-3db49336cba0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you give me this in the shortest form as simple instructions for Ana on what to get and where to look
                for each platform
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:43:21.056126Z"
        >
            <Origin>019d3efb-bfcd-7710-a211-e65bd2a66055</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used visualize:show widget</Action>
            <Paragraph>
                That's everything. The 2FA check is the most important action item — if either is on, she needs to disable
                it before anything can run unattended.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:43:47.159746Z"
        >
            <Origin>019d3efc-7631-7076-ae83-6b48baed8677</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Translate that to RUssian and use plaintext that can be copied to telegram with spacing preserved
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:43:54.264112Z"
        >
            <Origin>019d3efc-7631-769e-b2a7-1ee45365fb27</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox>
                {`ALAMY

FTP данные
Войти в Dashboard → Upload → нажать «FTP details»
Скопировать: сервер, логин, пароль

Логин на сайте
Email и пароль от alamy.com

2FA
alamy.com → Account → Security
Двухшаговая проверка включена? Если да — отключить


SHUTTERSTOCK

FTP данные
contributor.shutterstock.com → страница Upload
Прокрутить ниже поля загрузки — скопировать сервер, логин, пароль

Логин на сайте
Email и пароль от shutterstock.com

2FA
shutterstock.com → Account → Security
Двухшаговая проверка включена? Если да — отключить


Примечание: для Shutterstock FTP-данные скорее всего совпадают
с данными для входа, но лучше проверить что написано на странице Upload.`}
            </CodeBox>
        </Message>
        <Message
            at="2026-03-30T13:45:31.154953Z"
        >
            <Origin>019d3efe-0416-7433-90c0-d6ebb647424c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay now, I want you to write instructions to a system that is already doing metadata for adobe stock and
                istock, with metadata embedded. Describe what is needed for Alamy and Shutterstock. Check if and how we need
                to specify dataset if we use open commons datasets
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T13:47:13.658994Z"
        >
            <Origin>019d3efe-0416-78e6-a557-4b16f8eda081</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Shutterstock contributor data licensing open commons dataset disclosure generative art
                submission”
            </Action>
            <Paragraph>
                Good — the "open commons dataset" question has a specific answer I can now confirm from the docs. Let me
                write this up as a proper CC handoff.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/RECIPE_metadata_alamy_shutterstock_extension.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                On the open commons question specifically: there is no disclosure field on either platform, and no
                submission mechanism for it. Both platforms ask contributors to certify IP ownership of submitted content —
                what matters is that the <Word>
                    <Bold />
                    output
                </Word> is original work yours to license. Using open-license or public domain data as <Word>
                    <Bold />
                    input
                </Word> to your own generative pipeline is fine. The output produced by your code is your IP.
            </Paragraph>
            <Paragraph>
                The one thing to keep separate is Shutterstock's <Word>
                    <Bold />
                    data licensing toggle
                </Word> — that's their own program for selling contributor content as AI training data, nothing to do with
                your source inputs. Ana sets it once in account settings and it never touches the submission pipeline.
            </Paragraph>
            <Paragraph>
                The main actionable differences CC needs to implement are the <Word>
                    <Bold />
                    150-char caption truncation for Alamy
                </Word>, the <Word>
                    <Bold />
                    Shutterstock-specific category ID lookup
                </Word>, and a <Word>
                    <Bold />
                    keyword spam filter
                </Word> that strips repeated root words — that last one is a real rejection risk for pattern assets
                specifically, since Shutterstock explicitly uses "seamless pattern blue, seamless pattern green" as their
                example of what not to do.
            </Paragraph>
        </Message>
    </Chapter>
);
