import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Title>[[ 26 May 2026 ]]</Title>
        <Message
            at="2026-05-26T16:36:16.125040Z"
        >
            <Origin>019e6524-dc30-7f69-9223-e2e1e1ba6b4c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I would like you to help me build a resume. I think we can design it in html with the option to convert to
                PDF in Chrome. How does that sound?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T16:36:49.965556Z"
        >
            <Origin>019e6524-dc30-7904-a98c-bd7041fb2952</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That sounds like a solid approach, and it's the one I'd recommend too. Building the resume as HTML gives you
                precise control over typography, spacing, and layout, and Chrome's "Print → Save as PDF" produces clean,
                consistent output. It also means edits later are trivial — change the text, reprint. We can set it up with
                print-specific CSS so it paginates nicely and drops anything that shouldn't appear on the printed page.
            </Paragraph>
            <Paragraph>
                Before I build anything, I need your actual material. The more concrete you are, the less generic the
                result. Could you send me:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Basics
                    </Word> — name, location, email/phone, and any links (LinkedIn, portfolio, GitHub) you want on it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        What it's for
                    </Word> — the role or kind of role you're targeting. This shapes what gets emphasized and what gets cut.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Experience
                    </Word> — roles, companies, dates, and a few notes on what you did or accomplished in each. Rough is
                    fine; I'll tighten the wording.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Education and anything else
                    </Word> — degrees, certifications, skills, languages, whatever's relevant.
                </Line>
            </Paragraph>
            <Paragraph>
                On style, you can either tell me a direction (clean and minimal, more structured and traditional, a touch of
                color, etc.) or just let me propose something once I see the content and we iterate from there.
            </Paragraph>
            <Paragraph>Want to paste what you've got, and I'll turn it into a first draft?</Paragraph>
        </Message>
        <Message
            at="2026-05-26T16:39:22.168081Z"
        >
            <Origin>019e6527-b4d6-757a-9fa2-3ad0537fde9f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1712945513/</Reference>
                    Computer Programmer
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1712945513/</Reference>
                    Covariant Investment Technologies, LLC · Full-time
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1712945513/</Reference>
                    Dec 2019 - Apr 2025 · 5 yrs 5 mos
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1712945513/</Reference>
                    New York, United States · Remote
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1543329048/</Reference>
                    Software Engineer
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1543329048/</Reference>
                    Fareportal · Full-time
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1543329048/</Reference>
                    Aug 2019 - Dec 2019 · 5 mos
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1543329048/</Reference>
                    New York City Metropolitan Area
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/overlay/1543329048/skill-associations-details/</Reference>
                     Analytical Skills
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1115287201/</Reference>
                    Software Engineer
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1115287201/</Reference>
                    Purplebricks Group PLC · Full-time
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1115287201/</Reference>
                    Sep 2017 - Jul 2019 · 1 yr 11 mos
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/1115287201/</Reference>
                    New York, New York
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/832362059/</Reference>
                    Software Engineer
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/832362059/</Reference>
                    FULLBEAUTY Brands · Full-time
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/832362059/</Reference>
                    Apr 2015 - Sep 2017 · 2 yrs 6 mos
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/832362059/</Reference>
                    New York, New York
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657513497/</Reference>
                    Software Engineer
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657513497/</Reference>
                    PowerInbox
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657513497/</Reference>
                    Oct 2013 - Oct 2014 · 1 yr 1 mo
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657513497/</Reference>
                    New York, New York
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657512575/</Reference>
                    Software Engineer
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657512575/</Reference>
                    TMX Group
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657512575/</Reference>
                    Nov 2012 - Oct 2013 · 1 yr
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657512575/</Reference>
                    New York, New York
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657515326/</Reference>
                    Software Engineer
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657515326/</Reference>
                    Valiant Solutions, Inc.
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657515326/</Reference>
                    May 2011 - Nov 2012 · 1 yr 7 mos
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657515326/</Reference>
                    New York City Metropolitan Area
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657515327/</Reference>
                    Intern
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657515327/</Reference>
                    Infragistics · Full-time
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657515327/</Reference>
                    Nov 2010 - Feb 2011 · 4 mos
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657515327/</Reference>
                    New York City Metropolitan Area
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/overlay/657515327/skill-associations-details/</Reference>
                     Analytical Skills
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657513498/</Reference>
                    Ungergraduate Researcher
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657513498/</Reference>
                    The University of Chicago
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657513498/</Reference>
                    Mar 2004 - Sep 2006 · 2 yrs 7 mos
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/details/experience/edit/forms/657513498/</Reference>
                    Greater Chicago Area
                </Word> <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/overlay/Position/657513498/treasury/?profileId=ACoAABjCLIMBEKaECNLEOmpniFAV7jquNCHlCEI</Reference>
                    propagating waves mediate information transfer in the motor cortex
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Reference>https://www.linkedin.com/in/doug-rubino-143139b7/overlay/657513498/skill-associations-details/</Reference>
                     Analytical Skills
                </Word>
            </Paragraph>
            <Paragraph>
                Okay, that is by background, though with inaccurate job titles. Let's review what each of those will be. And
                hopefully we can find the words to describe what I want to do in each case. The job I am applying for would
                be a research position work at a computational neuroscience lab, so perhaps we can emphasize that
            </Paragraph>
            <Paragraph>
                Don't generate the resume yet, but I suppose we might need to start drafting test ones so we can settle on a
                style. Why don't you read this, take notes in an editable artifact, and we can start reviewing what a modern
                CV is supposed to look like
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T16:39:36.950255Z"
        >
            <Origin>019e6527-b4d7-761a-9473-97c687c81297</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-26T16:41:24.227896Z"
        >
            <Origin>019e6529-9090-78c4-b80e-9848c038aedc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Whoops, tried to copy from LinkedIn. I guess you need to see images. That is what the last message was
                supposed to have in it
            </Paragraph>
            <Attachment>Uploaded “1779813648342_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “1779813672138_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-26T16:43:38.296036Z"
        >
            <Origin>019e6529-9090-7989-8cca-d7a799ab586f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Got the images — that's the full picture now. Let me mirror back what I've captured so you can confirm I
                read it right, then I'll put it all in a working doc.
            </Paragraph>
            <Paragraph>
                Reverse-chronological, the spine is: Covariant Investment Technologies (Dec 2019–Apr 2025), Fareportal
                (2019), Purplebricks (2017–2019), FULLBEAUTY Brands (2015–2017), PowerInbox (2013–2014), TMX Group
                (2012–2013), Valiant Solutions (2011–2012), an Infragistics internship (2010–2011), and then — the one that
                actually matters most for where you're aiming — undergraduate research at UChicago (2004–2006) tied to a
                paper, <Word>
                    <Emphasis />
                    propagating waves mediate information transfer in the motor cortex
                </Word>.
            </Paragraph>
            <Paragraph>
                Before I build the notes file, here's the one strategic thing worth saying up front, because it shapes
                everything: you're not writing a software resume. You're writing a <Word>
                    <Bold />
                    pivot document
                </Word> — a career engineer returning to computational neuroscience. That's actually a strong hand, because
                comp neuro labs are perpetually short on people who can genuinely <Word>
                    <Emphasis />
                    build
                </Word> (clean code, data pipelines, scale, ML) and who already understand the science. The whole job of
                this CV is to make those two facts — the engineering depth and the real prior research — point at each other
                instead of reading as a detour. So the motor-cortex work and your technical range get promoted; the
                e-commerce/fintech specifics get compressed into transferable signal.
            </Paragraph>
            <Paragraph>Let me get it all down.</Paragraph>
            <Action>Created /mnt/user-data/outputs/cv-working-notes.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                That's our working document — edit it directly or just answer me here and I'll fold it in.
            </Paragraph>
            <Paragraph>Two questions are doing the heavy lifting, and both are gaps rather than corrections:</Paragraph>
            <Paragraph>
                The bigger one is <Word>
                    <Bold />
                    education and the 2006–2010 window
                </Word>. Right now I have UChicago only as a research role, no degree listed anywhere, and a roughly
                four-year gap between that research ending and your next job. For most resumes that's a footnote; for a
                comp-neuro research application it might be the opposite of a footnote. If those years held a graduate
                program — even a master's, even one you didn't finish — that's not a gap to paper over, it's a credential to
                lead with. So: what's your degree (and in what), and what happened between 2006 and 2010?
            </Paragraph>
            <Paragraph>
                The smaller one: <Word>
                    <Bold />
                    the paper
                </Word>. I've tentatively guessed it's Rubino, Robbins &amp; Hatsopoulos in <Word>
                    <Emphasis />
                    Nature Neuroscience
                </Word> (2006) — that title and the Hatsopoulos lab at UChicago line up — but I don't want to put a citation
                on your CV that I confabulated. Can you confirm the authors/journal/year and whether you're first author? If
                it's what I think it is, that's a genuinely well-cited paper and it changes how aggressively we foreground
                the research.
            </Paragraph>
            <Paragraph>
                The job-title corrections we can do in one pass whenever you're ready — give me the real titles and a
                sentence or two on what each role actually involved, and I'll handle the wording. No need to do all nine at
                once; the only one that really needs care is Covariant, since five years is your anchor.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T17:02:08.178823Z"
        >
            <Origin>019e653c-8ee6-7749-a521-ee76d4408eb1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes that's my paper. And I already have the job. I've been doing independent research, and I will be
                collaborating with an old colleague of mine from the Hatsopoulos Lab named Jake Reimer. You can see his work
                collaborating with Tolias. We'll need to get my PhD work in there with Chuck Stevens. I was all but
                dissertation, had a health crisis and had to leave school. It's not accurate quite to say that I did my
                masters with Chuck, because I was in his lab for maybe four years. We'll have to find a way to say that
            </Paragraph>
            <Paragraph>
                But it's not for an application. Jake needs my CV for his school so we can set something up. I want to
                provide him with something nice and appropriately focused
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T17:05:28.434576Z"
        >
            <Origin>019e653c-8ee6-7749-a521-ee777319f2d2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Congratulations — that reframes everything in a good way. A CV that supports a collaboration you've already
                secured is a much more pleasant object to build than a competitive application: it just needs to be
                accurate, dignified, and pointed at the work you and Jake are actually going to do. No keyword-stuffing, no
                defensive gap-filling.
            </Paragraph>
            <Paragraph>Let me ground a couple of things so I get the details right rather than guessing.</Paragraph>
            <Action>
                Searched the web for “Rubino Hatsopoulos propagating waves motor cortex Nature Neuroscience 2006”
            </Action>
            <Paragraph>
                First author, confirmed: Rubino, D., Robbins, K.A. &amp; Hatsopoulos, N.G. (2006), <Word>
                    <Emphasis />
                    Nature Neuroscience
                </Word> 9(12), 1549–1557, doi:10.1038/nn1802. Now let me check Jake's current setup so I frame the document
                toward the right kind of work.
            </Paragraph>
            <Action>Searched the web for “Jacob Reimer neuroscience lab Tolias Baylor”</Action>
            <Paragraph>
                That's a meaningful lineage, and it changes the document from a "make the case" exercise into a "represent
                it accurately" one. Let me say what I found and then deal with the part you flagged — how to phrase the
                Stevens years — because that's the real craft question here.
            </Paragraph>
            <Paragraph>
                I looked at Jake's setup: he's Assistant Professor of Neuroscience at Baylor College of Medicine, in the
                orbit of the Center for Neuroscience and AI, and the Reimer/Tolias work is large-scale two-photon calcium
                imaging, cortical brain states, and big-data neuroscience — the MICrONS connectome data, foundation models
                of cortex, spike inference, that whole world. Knowing that tells me how to point your CV: this is a lab that
                lives or dies on people who can handle large neural datasets and <Word>
                    <Emphasis />
                    build real software
                </Word>, and who also genuinely understand the signals they're analyzing. Your own first-author paper is
                spatiotemporal analysis of neural field data — wave propagation across cortex — and you've spent fifteen
                years as a serious engineer. That's not a career to apologize for on a comp-neuro CV; it's close to the
                ideal profile for this lab. So the document should read research-first, with the engineering depth as the
                thing that makes you unusually useful rather than as the bulk of the page.
            </Paragraph>
            <Paragraph>
                On the Stevens work — and I'll just say it plainly, because you did: I'm sorry the health crisis took the
                dissertation from you. That's a hard way for years of real work to end. The good news for the document is
                that a CV never owes anyone an explanation for why something ended — it states <Word>
                    <Emphasis />
                    what the work was
                </Word>, and the "why" stays yours. The honest academic term for your situation is <Word>
                    <Bold />
                    "advanced to candidacy"
                </Word> or <Word>
                    <Bold />
                    ABD (all but dissertation)
                </Word> — it means precisely what happened: you completed the program through candidacy and did the
                research, short of writing and defending. It claims no master's, invents nothing, and every academic reading
                it knows exactly what it signifies. Here's the phrasing I'd recommend:
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Bold />
                    &#91;Enrolling university&#93;, &#91;City&#93; — Ph.D. program in Neuroscience
                </Word> Doctoral candidate; advanced to candidacy (ABD). &#91;2006–2010&#93; Dissertation research in the
                laboratory of <Word>
                    <Bold />
                    Charles F. Stevens
                </Word>, Salk Institute for Biological Studies.
            </Paragraph>
            <Paragraph>
                Naming Stevens explicitly does a lot of work — he's a foundational figure, and "trained by Stevens,
                published first-author with Hatsopoulos" reads as a genuine pedigree even with the doctorate unfinished. The
                only thing I'd want to settle is the <Word>
                    <Emphasis />
                    enrolling
                </Word> institution: Stevens was at the Salk, so students typically registered through UC San Diego's
                neurosciences program — was that yours?
            </Paragraph>
            <Paragraph>I've rewritten our working notes to reflect all of this. Let me update it.</Paragraph>
            <Action>
                Ran cat &gt; /mnt/user-data/outputs/cv-working-notes.md &lt;&lt; 'EOF' # CV Working Notes — Doug Rubino
                *Status: planning / raw material. Not the CV itself. Edit freely — blanks marked `&#91; &#93;` are for you
                to fill or for us to settle together.* --- ## Purpose (revised) - **Not** a competitive application — the
                collaboration is already secured. - This CV is for **Jacob Reimer**'s institution (**Baylor College of
                Medicine**, Dept. of Neuroscience / Center for Neuroscience &amp; AI) to formalize / set up the
                collaboration. - Goal: a clean, accurate, dignified, appropriately focused **academic CV** that credibly
                establishes Doug as a research collaborator. - Reimer/Tolias domain: large-scale two-photon calcium imaging,
                cortical brain states, big-data neuroscience (MICrONS connectome, foundation models of cortex, spike
                inference). → frame Doug toward **large-scale neural data + scientific software + genuine neuroscience
                grounding**. --- ## The thesis of this CV (the angle) Research-first. A trained neuroscientist (Stevens lab
                doctoral work; first-author *Nature Neuroscience* paper) who also brings fifteen years of serious
                software-engineering muscle — exactly the profile a big-data imaging lab needs. Engineering is the
                *differentiator*, not the bulk of the page. Lead with research and publications; condense the industry roles
                into credible signal (scale, reliability, systems). --- ## Education ### Doctoral work — laboratory of
                Charles F. Stevens (Salk Institute) - **Enrolling university:** `&#91; &#93;` (UC San Diego neurosciences
                program? — confirm) - **Years:** ~2006–2010 (this fills the gap I'd flagged earlier — it was the PhD, not a
                void) - **Status:** advanced to candidacy (ABD). ~4 years in the lab. Departed prior to completing the
                dissertation. - **Recommended phrasing:** &gt; **&#91;University&#93;, &#91;City&#93; — Ph.D. program in
                Neuroscience** &gt; Doctoral candidate; advanced to candidacy (ABD). &#91;2006–2010&#93; &gt; Dissertation
                research in the laboratory of Charles F. Stevens, Salk Institute for Biological Studies. - The "why it
                ended" (health) does **not** go on the CV. CVs state what the work was, not why it stopped. ###
                Undergraduate degree - **Institution:** `&#91; &#93;` (University of Chicago? — the 2004–06 research was in
                UChicago's Dept. of Organismal Biology &amp; Anatomy) - **Degree &amp; field:** `&#91; &#93;` - **Year:**
                `&#91; &#93;` --- ## Publications - **Rubino, D., Robbins, K. A., &amp; Hatsopoulos, N. G. (2006).**
                Propagating waves mediate information transfer in the motor cortex. *Nature Neuroscience, 9*(12), 1549–1557.
                https://doi.org/10.1038/nn1802 (PMID: 17115042). **First author.** ✓ confirmed - Any posters / talks /
                preprints / other work to add? `&#91; &#93;` - Google Scholar / ORCID link? `&#91; &#93;` --- ## Research
                experience ### University of Chicago — Hatsopoulos Lab (undergraduate research) - **Mar 2004 – Sep 2006** -
                Spatiotemporal analysis of motor-cortex LFPs; propagating beta-band waves; information encoding. → directly
                relevant to Reimer-lab large-scale neural signal work. - One-liner on your role / contribution: `&#91;
                &#93;` ### Doctoral research — Stevens Lab, Salk (see Education) - Brief description of the research focus:
                `&#91; &#93;` ### Independent research (current) - **Apr 2025 – present** (since Covariant) - What is it /
                topic / outputs? `&#91; &#93;` — this is your current activity and belongs near the top. - Note the Reimer
                collaboration here, or leave it for Jake to convey separately? `&#91; &#93;` --- ## Technical skills *(does
                real work for a computational lab — keep prominent)* - Languages: `&#91; &#93;` (Python? C/C++? others?) -
                Scientific computing / data: `&#91; &#93;` (NumPy / Pandas / SciPy / MATLAB / R / Julia?) - ML / signal
                processing: `&#91; &#93;` - Tooling / infra: `&#91; &#93;` (databases, pipelines, cloud, version control)
                --- ## Professional (software engineering) experience — condensed *(Titles flagged as inaccurate on
                LinkedIn. Recent roles get a few lines; older ones get one line or get grouped. The only one needing real
                care is Covariant.)* | # | Company | Dates | LinkedIn title | Real title `&#91; &#93;` |
                |---|---|---|---|---| | 1 | Covariant Investment Technologies (Remote) | Dec 2019 – Apr 2025 | Computer
                Programmer | `&#91; &#93;` (Software Engineer? Quant Dev?) | | 2 | Fareportal | Aug – Dec 2019 | Software
                Engineer | `&#91; &#93;` | | 3 | Purplebricks Group PLC | Sep 2017 – Jul 2019 | Software Engineer | `&#91;
                &#93;` | | 4 | FULLBEAUTY Brands | Apr 2015 – Sep 2017 | Software Engineer | `&#91; &#93;` | | 5 |
                PowerInbox | Oct 2013 – Oct 2014 | Software Engineer | `&#91; &#93;` | | 6 | TMX Group (exchange infra) |
                Nov 2012 – Oct 2013 | Software Engineer | `&#91; &#93;` | | 7 | Valiant Solutions | May 2011 – Nov 2012 |
                Software Engineer | `&#91; &#93;` | | 8 | Infragistics (internship) | Nov 2010 – Feb 2011 | Intern | likely
                drop or fold | - For Covariant (the 5-year anchor): real title + 2–3 lines on what you built / scale /
                stack: `&#91; &#93;` --- ## Open questions / things to settle 1. **Enrolling university for the PhD**
                (UCSD?). `&#91; &#93;` 2. **Undergraduate institution, degree, field, year.** `&#91; &#93;` 3. **What the
                current independent research is.** `&#91; &#93;` 4. **Whether to name the Reimer collaboration on the CV**
                or leave it to Jake. `&#91; &#93;` 5. **Covariant real title + description**, and real titles for the rest.
                `&#91; &#93;` 6. **Technical-skills inventory.** `&#91; &#93;` 7. Links: Google Scholar / ORCID / GitHub?
                `&#91; &#93;` --- ## Format conventions for this target - This is an **academic CV**, not an industry
                resume. For establishing a research collaborator at a neuroscience department, the section order I'd use: 1.
                Header — name, location, email, links (Scholar / ORCID / GitHub). 2. (optional) one-line summary / research
                interests. 3. **Education** — doctoral work (ABD) + undergraduate degree. 4. **Publications.** 5. **Research
                Experience.** 6. **Technical Skills** — kept visible; this is your edge. 7. **Professional Experience**
                (software) — condensed. - **Length:** 2 pages is comfortable and appropriate. - **No need to explain gaps or
                departures** — the doctoral years now fill the old "gap," and CVs don't narrate why things ended. - **Style
                for the HTML build:** clean single-column, generous whitespace, restrained accent, print CSS tuned for
                Chrome → Save as PDF. Mock up 2–3 looks once content is settled. --- ## Next steps - &#91; &#93; Settle the
                open questions above (conversationally is fine). - &#91; &#93; Lock Education + current research. - &#91;
                &#93; Then: 2–3 quick HTML style mockups to choose from. EOF echo "updated"
            </Action>
            <Action>Presented files</Action>
            <Paragraph>
                The notes now reflect the real shape of things. Three small factual blanks are all that stand between us and
                a first draft, and none of them need much from you:
            </Paragraph>
            <Paragraph>
                What was the <Word>
                    <Bold />
                    enrolling university
                </Word> for the doctoral program (I'm guessing UCSD, given Stevens was at the Salk)? Where's your <Word>
                    <Bold />
                    undergraduate degree
                </Word> from, in what field, and what year? And what's the <Word>
                    <Bold />
                    independent research
                </Word> you've been doing since Covariant — even a sentence, since it's your current work and sits up top?
            </Paragraph>
            <Paragraph>
                Once I have those, plus a real title and a couple of lines for the Covariant role, I can write a complete
                first draft and then we'll do the style pass in HTML. We don't have to nail the older software jobs in
                detail — for this CV they'll mostly compress to a line each, since the lab cares far more about the research
                and the engineering capability than about which e-commerce platform you maintained in 2016.
            </Paragraph>
        </Message>
    </Chapter>
);
