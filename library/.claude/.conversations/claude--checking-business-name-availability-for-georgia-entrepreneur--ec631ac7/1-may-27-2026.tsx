import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Title>[[ 27 May 2026 ]]</Title>
        <Message
            at="2026-05-27T12:36:39.132507Z"
        >
            <Origin>019e696f-d4fd-7a39-a1e0-4d7e64f5a0c2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We are being asked to provide a business name for an individual entrepreneur in Georgia. Is there a search
                to check what is available? They ask this:
            </Paragraph>
            <Paragraph>Business Name (not mandatory in case of Individual Entrepreneur (IE) registration)</Paragraph>
        </Message>
        <Message
            at="2026-05-27T12:37:31.172304Z"
        >
            <Origin>019e696f-d4fd-7784-8e26-103dfffdd754</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Georgia individual entrepreneur registration business name check availability NAPR”
            </Action>
            <Action>Fetched https://enreg.reestri.gov.ge/main.php?m=new_index&amp;l=en</Action>
            <Paragraph>
                Yes — there's a public search, but first the thing that actually matters for your form: for an Individual
                Entrepreneur the name field is genuinely optional, and "optional" here means something specific. An IE
                registers under your own personal name; a separate firm/trade name isn't required at all. For sole
                proprietors, a separate business name is not required — the business is registered under your personal name.
                So you can leave that field blank and be fully registered. You'd only fill it in if you want to trade under
                a name different from your own.
            </Paragraph>
            <Paragraph>
                If you do want a trade name, it should be unique, and you can check what's already taken at the National
                Agency of Public Registry's entrepreneurs registry:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    https://enreg.reestri.gov.ge/main.php?m=new_index&amp;l=en
                </Word>
            </Paragraph>
            <Paragraph>
                I just confirmed the page loads. Click <Word>
                    <Bold />
                    "Search Application"
                </Word> (top of the page) — it opens a search form where you can look up any registered subject (including
                IEs) by identification code, by <Word>
                    <Bold />
                    name/designation
                </Word>, or by legal form. So you can type a candidate name and see if anything comes back.
            </Paragraph>
            <Paragraph>
                Two honest caveats, since this is the registry and I'd rather flag them than have you trust a clean-looking
                search:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The registered data is stored in <Word>
                        <Bold />
                        Georgian
                    </Word> — according to the General Administrative Code, the language of administrative proceedings is
                    Georgian, so name, surname and firm name are recorded in Georgian. An English-spelled search may miss a
                    name that exists only in Georgian transliteration. If a name matters to you, search the Georgian form
                    too.
                </Line>
                <Line>
                    What I can verify is that the search <Word>
                        <Emphasis />
                        exists
                    </Word> and shows existing registrations. What I can't verify for you is the exact enforcement mechanism
                    for an <Word>
                        <Bold />
                        IE
                    </Word> trade name — for LLCs a unique name is mandatory and NAPR blocks duplicates and even lets you
                    reserve one in advance; for an IE trade name the sources say uniqueness applies but are vaguer on how
                    hard the registrar enforces it. If the name is commercially important, that's worth a one-line question
                    to whoever's processing the registration at the Public Service Hall rather than my guess.
                </Line>
            </Paragraph>
            <Paragraph>
                Bottom line: if you don't have a specific brand reason, leave it blank — it's not slowing anything down. If
                you do, the link above is the place to check.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T12:39:00.140641Z"
        >
            <Origin>019e6971-fb7c-7e9e-bb55-325c89b3b38a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I searched DNA just to see. I get this back</Paragraph>
            <Attachment>Uploaded “1779885527693_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-27T12:41:08.845416Z"
        >
            <Origin>019e6971-fb7c-744e-8975-c25193d59426</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Sakpatenti Georgia trademark search database online”</Action>
            <Paragraph>
                That result is telling you something useful, but not the thing you were hoping for. Look at the <Word>
                    <Bold />
                    Legal form
                </Word> column — every one of the 3,460 rows is <Word>
                    <Verbatim />
                    ინდივიდუალური მეწარმე
                </Word>, "individual entrepreneur," and every entry in <Word>
                    <Bold />
                    Firm name
                </Word> is just <Word>
                    <Verbatim />
                    ინდივიდუალური მეწარმე &#91;a person's name&#93;
                </Word>: "Individual Entrepreneur Giorgi Sharashenidze," "Individual Entrepreneur Luka Gagnidze,"
                "Individual Entrepreneur Artem Mikhailov," "Individual Entrepreneur Ksenia Melekova," and so on. None of
                them contain "DNA."
            </Paragraph>
            <Paragraph>
                So what you're looking at isn't a "DNA" match — it's a list of sole proprietors filed under their own
                personal names. The search didn't filter on "DNA" in any meaningful way (a Latin string won't match the
                Georgian-script name field cleanly, and the firm-name field here doesn't hold brand names to begin with).
            </Paragraph>
            <Paragraph>
                And that's actually the concrete confirmation of what I flagged before: <Word>
                    <Bold />
                    for an individual entrepreneur, the "firm name" is the person's own name.
                </Word> This whole screen is the proof — 3,460 people, each registered as "Individual Entrepreneur + their
                name." Sole proprietors don't get a separate brand slot in this registry the way an LLC does. Which is
                exactly why that field on your form is optional and why you can leave it blank.
            </Paragraph>
            <Paragraph>Two things worth separating, since they live in different places:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Company-name uniqueness
                    </Word> (the "is this name taken / can I reserve it" mechanic) is an <Word>
                        <Emphasis />
                        LLC
                    </Word> thing in this registry. It doesn't really apply to a sole-proprietor brand, so searching here
                    won't give you a clean yes/no on "DNA."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Brand / trademark protection
                    </Word> — if you actually want to <Word>
                        <Emphasis />
                        operate
                    </Word> under "DNA" (signage, invoices, marketing) and have it protected — lives at <Word>
                        <Bold />
                        Sakpatenti
                    </Word>, the National Intellectual Property Center (sakpatenti.gov.ge), which runs the trademark
                    register and has an online trademark search. That's the database that would tell you whether "DNA" is
                    already claimed as a mark.
                </Line>
            </Paragraph>
            <Paragraph>
                I'll be straight about the edge of what I can verify: I can read what this screen shows, but I haven't
                confirmed the exact mechanics of <Word>
                    <Emphasis />
                    how
                </Word> an IE would attach a distinct trade name in Georgia or how Sakpatenti's filing process runs end to
                end — so if the "DNA" brand matters commercially, that's a question to put to whoever's handling the
                registration, not something I'd want to improvise. For the IE form itself, none of this blocks you: leave
                the name blank and you're registered under your own name.
            </Paragraph>
        </Message>
    </Chapter>
);
