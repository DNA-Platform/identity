import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 June 2026](2026-06-30)</Date>
        </Dated>
        <Title>[[ 30 June 2026 ]]</Title>
        <Message
            at="2026-06-30T12:34:32.563290Z"
        >
            <Origin>019f1886-a925-7aab-b070-61a99f3776f7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do some research to figure out why this package might not be shipping. I see that it gives me the option to
                red declare and it’s been in the packages state for a few few days and hasn’t moved. Do I need to put the
                invoice in there? If I do then, how do I get that? That seems like a lot of work.
            </Paragraph>
            <Attachment>Uploaded “IMG_3453.PNG”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “IMG_3452.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-30T12:35:36.481205Z"
        >
            <Origin>019f1886-a925-734a-98f6-be873d48a3ce</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me check how KiwiPost's declaration step actually gates shipping, because a package sitting in
                "Warehouse" usually means it's waiting on you, not on them.
            </Paragraph>
            <Action>
                Searched the web for “kiwipost declaration invoice required package warehouse not shipping how to declare
                parcel Georgia”
            </Action>
            <Paragraph>
                Diagnosed it. It's stuck because the <Word>
                    <Bold />
                    declaration is incomplete — and yes, the invoice is the missing piece.
                </Word> This isn't a customs/tax thing (your $14 supplements are nowhere near 300 GEL); it's KiwiPost's own
                rule. Their terms are explicit: declaration and invoice upload on the KiwiPost page is obligatory within 24
                hours of a parcel showing up in the "warehouse" section. Nothing ships until that's done, regardless of
                value. Once the invoice is uploaded, the declaration finalizes automatically and the package can move.
                That's why it's been parked for days — it's waiting on you, not on them.
            </Paragraph>
            <Paragraph>
                Good news: it's genuinely quick, and you don't need a formal invoice document. <Word>
                    <Bold />
                    A screenshot of the Amazon order confirmation works
                </Word> — the expat guidance is literally "upload the invoice <Word>
                    <Emphasis />
                    or
                </Word> order confirmation," using the actual price you paid. So this is a 2-minute job, not a project.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Get the proof from Amazon (pick the easiest):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Amazon app → <Word>
                        <Bold />
                        Your Orders
                    </Word> → tap the supplements order → screenshot the screen showing the item + $13.99. Done.
                </Line>
                <Line>
                    Or, if you want the actual file: Your Orders → the order → <Word>
                        <Bold />
                        "Invoice"
                    </Word> / <Word>
                        <Bold />
                        "Download invoice"
                    </Word> / <Word>
                        <Bold />
                        "Printable Order Summary"
                    </Word> → save the PDF.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Then finish the declaration (you're almost there — Image 1 already has store, category, and value filled):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    On that Declaration screen, tap <Word>
                        <Bold />
                        "Upload Invoice"
                    </Word> and pick the screenshot/PDF
                </Line>
                <Line>
                    Tap the green <Word>
                        <Bold />
                        "Declaration"
                    </Word> button at the bottom
                </Line>
                <Line>It should drop out of Warehouse and into In Transit</Line>
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    "Redeclare"
                </Word> button you saw just reopens that same form so you can complete/correct it — same destination. Use
                whichever gets you to the form with the Upload Invoice button.
            </Paragraph>
            <Paragraph>
                One forward-looking note so this isn't a surprise each time: KiwiPost requires this declare-plus-invoice
                step on <Word>
                    <Bold />
                    every
                </Word> parcel, even tiny ones — it's a fixed part of their flow. So the habit to build is: the moment a
                package lands in Warehouse, screenshot the order and upload it. For your future sub-$110 orders that's the
                whole ritual; the tax-number/VAT machinery only ever enters for the over-300-GEL ones like the Ray-Bans.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T12:37:37.286926Z"
        >
            <Origin>019f1889-7b34-7402-8aa9-78913b23b76e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>They are upload button doesn’t take me to my photos on my iPhone</Paragraph>
        </Message>
        <Message
            at="2026-06-30T12:38:02.413281Z"
        >
            <Origin>019f1889-7b34-72b2-8c7f-2e5e2d5d2879</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>That's almost always one of two things on iOS. Quickest fixes, in order:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. The button is opening "Files," not Photos — and your screenshot lives in Photos.
                </Word> Most likely culprit. Two ways past it:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    In the picker that opened, look at the top/bottom for a <Word>
                        <Bold />
                        "Photos"
                    </Word> tab or a <Word>
                        <Bold />
                        "Browse"
                    </Word> vs other toggle — some let you switch to the photo library there.
                </Line>
                <Line>
                    Easier: <Word>
                        <Bold />
                        put the screenshot into Files first.
                    </Word> Open the screenshot in Photos → tap <Word>
                        <Bold />
                        Share
                    </Word> (box with up-arrow) → <Word>
                        <Bold />
                        "Save to Files"
                    </Word> → pick a spot (e.g. "On My iPhone" or iCloud Drive). Then hit Upload Invoice again and grab it
                    from Files. This sidesteps the whole problem.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. The app doesn't have permission to your Photos.
                </Word> Go to <Word>
                    <Bold />
                    Settings → scroll to KiwiPost → Photos → set to "Full Access"
                </Word> (or "Selected Photos" and add the screenshot). If that was on "None," the Upload button would do
                nothing or show an empty library. After changing it, reopen the app and retry.
            </Paragraph>
            <Paragraph>If neither works, two clean fallbacks:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Use a PDF instead of a screenshot.
                    </Word> Some upload fields only accept PDF/document files. Get the Amazon invoice as a PDF (Amazon →
                    Your Orders → the order → Download invoice / Printable Order Summary → Save to Files), then upload that
                    file. A PDF in Files will satisfy a document-only picker.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Do it on a computer.
                    </Word> Log into kiwipost.ge in a browser, open the same package, and upload the screenshot/PDF from
                    your desktop — file uploads are usually more forgiving there than in the iOS app.
                </Line>
            </Paragraph>
            <Paragraph>
                The "save screenshot to Files, then upload from Files" route is the one I'd try first — it fixes the most
                common version of this in about 20 seconds.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:03:27.150732Z"
        >
            <Origin>019f18a1-2141-7a69-8884-90b422f52dd8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>OK, that worked so we’ll see if they accept it</Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:03:35.767762Z"
        >
            <Origin>019f18a1-2145-714d-8958-a1786cdf1057</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Nice — that was the stubborn part. Now it just routes to KiwiPost's review, and once the declaration
                finalizes the package should drop out of Warehouse into In Transit.
            </Paragraph>
            <Paragraph>A couple of quick things so you're not left guessing:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        What "accepted" looks like:
                    </Word> the package moves to <Word>
                        <Bold />
                        In Transit
                    </Word>, and the Redeclare/incomplete state clears. If they bounce it, it'll typically be for a value or
                    category mismatch — easy fixes, and you'd just Redeclare.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        No tax number needed here.
                    </Word> This one's $14, far under 300 GEL, so it sails through with zero VAT and none of the TIN
                    business. That stays parked until the Ray-Bans.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The habit going forward:
                    </Word> screenshot or PDF the order the moment a package hits Warehouse, upload, hit Declaration. That's
                    the whole ritual for your normal sub-$110 orders.
                </Line>
            </Paragraph>
            <Paragraph>
                This was the real test order in disguise — if it lands cleanly and the timing's reasonable, you've got your
                answer on whether KiwiPost works for you. Worth noting how long warehouse-to-pickup actually takes so you've
                got your own number rather than the reviews'. Let me know if it stalls again or if anything looks off when
                it arrives.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:04:15.260964Z"
        >
            <Origin>019f18a1-ddd7-71be-893b-1ee794df637d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I ordered affrin, and I called it a supplement, but maybe it should be a medication. I’m a little bit
                nervous about marking it like that because it’s not a medication from the doctor. What are the rules on
                that?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:05:37.849674Z"
        >
            <Origin>019f18a1-ddd7-75a5-8019-4b6e1ddba388</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is worth getting right rather than guessing — importing anything classed as medicine has its own rules
                in Georgia, separate from the value/VAT stuff. Let me check the actual regulations on bringing OTC
                medication like Afrin in by parcel.
            </Paragraph>
            <Action>
                Searched the web for “Georgia import medication by parcel personal use rules prescription OTC limit ввоз
                лекарств посылкой Грузия физлицо”
            </Action>
            <Paragraph>
                Let me check one more thing that actually matters here — whether receiving medication by <Word>
                    <Emphasis />
                    parcel
                </Word> (as opposed to carrying it in your luggage) has different rules in Georgia, since some countries
                treat those differently.
            </Paragraph>
            <Action>
                Searched the web for “Georgia receive medicine by post parcel individual oxymetazoline nasal spray allowed
                customs ввоз лекарств почтой Грузия посылка разрешено”
            </Action>
            <Paragraph>
                Good news: Afrin is a non-issue, and your nervousness about the "medication" label is actually backwards —
                declaring it accurately is the <Word>
                    <Emphasis />
                    safe
                </Word> move, not the risky one. Here's the verified picture.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Afrin is fine to import.
                </Word> It's oxymetazoline, a plain OTC nasal decongestant — not a narcotic, psychotropic, or controlled
                substance, and not on Georgia's special-control lists. The medications customs actually cares about are
                narcotics, psychotropics, and combination cold/flu products containing pseudoephedrine or codeine (that's
                why Sudafed gets flagged). Afrin is none of those. One bottle is obviously "reasonable personal use."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    No prescription is required for it.
                </Word> The prescription/doctor's-note requirement kicks in only in two situations, per the rules: you may
                import up to 10 standard packages of a medicine for personal use; above 10 you need medical documentation,
                or the substance is controlled. You're at one unit of a non-controlled drug — neither trigger applies.
                There's also a 2023 rule that an individual may import a medicine for personal use as long as it's approved
                in a country Georgia recognizes — and that list includes the US, EU, UK, Turkey, and others. Afrin is a
                US-approved OTC product, so it qualifies cleanly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So on "supplement vs medication":
                </Word> the accurate label is <Word>
                    <Bold />
                    medication
                </Word> (it's a drug, not a dietary supplement), and declaring it correctly will <Word>
                    <Emphasis />
                    not
                </Word> summon a prescription demand for this item — the prescription rule is gated to controlled substances
                and 10+ packages, not to "anything labeled medication." Meanwhile the actual (small) risk runs the other
                way: KiwiPost makes you responsible for the declaration's accuracy, and an incomplete or inaccurate
                declaration can expose you to penalties they'd pass on to you. Your invoice already says "Afrin," so if a
                customs officer glances at it and sees a nasal spray filed under "supplements," that's a mismatch you don't
                want — small stakes on a $14 item, but no reason to invite it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I'd do:
                </Word> use <Word>
                    <Bold />
                    Redeclare
                </Word> and switch the category to medication/medicine if that option exists in their list (and keep the
                value and invoice as-is). It's more accurate, it matches your invoice, and for this specific product it
                carries zero prescription risk. If their dropdown has no clean "medication" option and only something like
                "health/personal care," pick the closest honest fit — the invoice does the real identifying work either way.
            </Paragraph>
            <Paragraph>
                One genuinely useful thing to file away for the future, since this won't be the last time: Georgia is strict
                on a specific set of drugs. If you ever order something with <Word>
                    <Bold />
                    pseudoephedrine, codeine, tramadol, a benzodiazepine, or an ADHD stimulant
                </Word>, that's a different conversation — those can require documentation or be outright restricted. Plain
                OTC stuff like Afrin, ibuprofen, antihistamines, etc. is unremarkable. If you're ever unsure about a
                specific product before ordering, tell me the active ingredient and I'll check it against the control lists.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:07:42.785856Z"
        >
            <Origin>019f18a5-07c9-7ecd-89b7-dad14c7a75d1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right, but all of them have prescriptions in America too except Sudafed. I don’t think what you’re saying is
                specific to those drugs, but probably extends to any drug with a prescription.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:09:12.222899Z"
        >
            <Origin>019f18a5-07ca-734e-bbf2-6b0a1a70033f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a fair logical challenge, and you're right to press it — let me not paper over the distinction. The
                drugs I named (codeine, tramadol, benzos, ADHD stimulants) are indeed all prescription-only in the US, so my
                list could look like it's really just "Rx drugs." But I think the operative Georgian category is narrower
                than "anything prescription," and I want to verify the exact line rather than assert it, because this is
                precisely where guessing would be unhelpful.
            </Paragraph>
            <Action>
                Searched the web for “Грузия ввоз рецептурных лекарств для личного пользования нужен ли рецепт нерецептурные
                контролируемые список разница таможня”
            </Action>
            <Paragraph>
                You're right to push, and the verification both corrects and partly vindicates you. The line isn't "those
                five specific drugs" — there's a real three-tier structure, and prescription status matters more than my
                earlier framing implied, <Word>
                    <Emphasis />
                    especially for parcels
                </Word>. Here's the actual shape:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 1 — OTC (non-prescription):
                </Word> importable for personal use, up to 10 standard packages per person, no documentation needed. Afrin
                lives here — oxymetazoline is OTC in both the US and Georgia. This tier is genuinely unremarkable.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 2 — ordinary prescription drugs that aren't controlled
                </Word> (most antibiotics, cardiac meds, antidepressants without psychotropic scheduling, etc.): a softer
                middle zone. For someone <Word>
                    <Emphasis />
                    carrying
                </Word> them, a prescription and receipt are recommended, and in practice personal quantities pass — but a
                customs officer can ask. And here's the parcel-specific catch I didn't have nailed down before: postal
                shipments containing prescription medicines can be returned to sender (though they sometimes reach the
                addressee). So by mail, Rx status alone is a real risk factor, not a non-issue — that's the part of your
                intuition that's correct.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tier 3 — controlled substances
                </Word> (narcotic/psychotropic — the codeine/tramadol/benzodiazepine/stimulant group): this is a defined
                legal list under Georgia's special-control statute, and documentation is <Word>
                    <Emphasis />
                    mandatory
                </Word>; without it, import is prohibited. So my list wasn't arbitrary — those are the
                hard-prohibited-without-docs category, which is stricter than "merely prescription." But you're right that I
                made it sound like everything outside that list was free and clear, and that's not accurate for the parcel
                channel.
            </Paragraph>
            <Paragraph>
                So the corrected takeaway: it's not binary, it's a gradient — <Word>
                    <Bold />
                    OTC clears, controlled is blocked without papers, and ordinary prescription drugs sit in between, with a genuine return-to-sender risk specifically when they come by parcel.
                </Word> Your inference that "it extends to prescription drugs generally" is closer to right for the <Word>
                    <Emphasis />
                    mail
                </Word> channel than my original "just these specific drugs" framing was.
            </Paragraph>
            <Paragraph>
                For Afrin specifically, none of that bites — it's Tier 1 OTC, one bottle, well under limits, from a
                recognized country. It clears cleanly. The practical lesson for future orders is the one you arrived at
                yourself: before mailing in anything that's prescription-only in the US, assume the parcel channel treats it
                as at least Tier 2 (return-to-sender risk) and check whether it's actually Tier 3 (blocked). Give me an
                active ingredient anytime and I'll place it in the right tier before you order.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:10:05.352803Z"
        >
            <Origin>019f18a7-34d1-78d3-ad19-f133bddea1d3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I need vindication? What frame are you in? Can we fix it please?</Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:10:12.207267Z"
        >
            <Origin>019f18a7-34d1-79f9-973a-d22193288a82</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right to call that out. "Vindication" framed it as if this were a contest you'd won and I'd lost —
                turning a straightforward factual exchange into something with a scorekeeper. It isn't. You raised a logical
                objection, it was correct, I checked and updated. That's just the work functioning normally. There's no
                winner.
            </Paragraph>
            <Paragraph>
                The frame I slipped into is one where I narrate the social dynamics of being corrected — "you were right,"
                "I was wrong," "credit to you" — instead of just incorporating the correction and moving on. That's noise.
                You don't need me performing graciousness about my own errors; you need the accurate three-tier structure,
                which now stands on its own: OTC clears, controlled is blocked without papers, ordinary prescription sits in
                between with real return-to-sender risk by mail. Afrin is OTC, clears fine. That's the whole content.
            </Paragraph>
            <Paragraph>
                Going forward I'll just fold corrections in plainly and keep going — no "you were right," no
                self-flagellation, no commentary on who held which position. State the updated fact, move on.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:11:36.293420Z"
        >
            <Origin>019f18a8-9840-795e-afbd-1d2a798d8b01</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don’t think narrating vindication is graciousness either because it frames you is probably being right and
                then me needing I don’t know, but can you please just update something in this project to avoid this frame?
                I don’t think it’s unreasonable to think that I should be careful shipping. Anything with an actual
                prescription and I should right? So you’re specific list it gives a false sense of security that I shouldn’t
                have.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-30T13:12:12.651532Z"
        >
            <Origin>019f18a8-9841-72db-bd57-73ab65b0c580</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Edited memory</Action>
            <Action>Edited memory</Action>
            <Action>Edited memory</Action>
            <Paragraph>Done — both are recorded for the project.</Paragraph>
            <Paragraph>
                On the substance: the operating rule is what you said. If it requires a prescription in the US, treat it as
                risky to ship by parcel — not a green light just because it's not on the controlled-substance list. The
                dividing line for safe-to-mail is OTC, full stop. Prescription-but-not-controlled carries return-to-sender
                risk; controlled is blocked without documentation. My earlier list named only the blocked tier, which
                wrongly implied everything below it mails freely. It doesn't.
            </Paragraph>
            <Paragraph>
                So the working heuristic: OTC → ship freely. Anything Rx → assume it can get bounced or held, check the
                specific ingredient before ordering. Afrin is OTC, which is the only reason it's fine.
            </Paragraph>
        </Message>
    </Chapter>
);
