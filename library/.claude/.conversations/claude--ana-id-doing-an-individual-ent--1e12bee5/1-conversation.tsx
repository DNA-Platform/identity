import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[3 June 2026](2026-06-03)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-03T10:43:44.079124Z"
        >
            <Origin>019e8d15-2b1a-7464-8eaa-18b9e5f3cf7a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Ana id doing an individual entrepreneur application. She just got this:</Paragraph>
            <Paragraph>
                She will click on the link in a second, but are any of those numbers the idea of something where we could go
                to the bank and get a bank account for this?
            </Paragraph>
            <Attachment>Uploaded “IMG_3305.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-03T10:44:24.914356Z"
        >
            <Origin>019e8d15-2b1b-727b-a126-fe7da2335c74</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Short answer: no, none of those three numbers is the identification number you'd hand the bank.
            </Paragraph>
            <Paragraph>Here's what's actually in that message:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        REG#B26372149
                    </Word> — the application/registration reference number
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Dokumentis # NAPB26372149
                    </Word> — the document number for the extract
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        kodi: 40419
                    </Word> — a verification code to view/confirm the document
                </Line>
            </Paragraph>
            <Paragraph>
                "Dasrulebulia" means <Word>
                    <Bold />
                    completed
                </Word> — her individual entrepreneur registration is done. The link goes to the official extract (ამონაწერი
                / <Word>
                    <Emphasis />
                    amonatseri
                </Word>) on my.gov.ge.
            </Paragraph>
            <Paragraph>
                That extract is the thing the bank wants, not these reference numbers. When she opens it, it'll show the
                IE's actual <Word>
                    <Bold />
                    identification number
                </Word> along with registration date, activity, and address. For a Georgian individual entrepreneur (ИП),
                that identification number is normally <Word>
                    <Bold />
                    her own personal number
                </Word> — the 11-digit number on her ID/residence card — rather than a separate company tax ID like an LLC
                would get. She should confirm that by reading the number printed on the extract itself rather than taking my
                word for it.
            </Paragraph>
            <Paragraph>
                So the practical move: open the link, download/save the extract (PDF), and that document — plus her ID — is
                what goes to the bank to open the account. I'd verify the bank's exact list before going in, since some
                Tbilisi banks want a freshly-dated extract (within a certain number of days). Want me to check what TBC /
                Bank of Georgia / Credo currently require to open a business account for an IE?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T10:46:27.452675Z"
        >
            <Origin>019e8d17-a7ba-79a8-aad5-a34c73ddc0c0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, this is what’s on the link and we’re working with exPat hub and they told us to send them something.
                Should we just send them the link? Or any of these numbers the registration numbers that we need to create a
                bank account
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-03T10:46:52.280110Z"
        >
            <Origin>019e8d17-a7bb-7104-a18e-49bf6c4fb0ae</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Right — read carefully, here's what this page actually is and isn't.</Paragraph>
            <Paragraph>
                This is just the <Word>
                    <Bold />
                    document-delivery lookup page
                </Word>. It confirms a document exists and shows its metadata:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        NAPB26372149
                    </Word> — the delivery/lookup reference (what you typed in to find it)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        B26372149
                    </Word> — the document number
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        B26372149/4
                    </Word> — the document's internal title/version
                </Line>
                <Line>
                    Issued <Word>
                        <Bold />
                        03.06.2026
                    </Word> by <Word>
                        <Bold />
                        საჯარო რეესტრი
                    </Word> (the Public Registry / NAPR)
                </Line>
            </Paragraph>
            <Paragraph>
                None of those is the IE registration or identification number the bank wants. They're all just reference
                numbers for <Word>
                    <Emphasis />
                    this document
                </Word>. The number the bank needs lives <Word>
                    <Bold />
                    inside
                </Word> the actual extract, not on this lookup screen.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What to do:
                </Word> tap the <Word>
                    <Bold />
                    download icon
                </Word> (the blue box with the down-arrow on the right side, next to the document info box). That pulls the
                real PDF — the ამონაწერი / extract from the Public Registry. That PDF is the thing ExpatHub asked for.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Send them the PDF, not the link.
                </Word> Two reasons: the link is gated behind the verification code (40419) and these delivery links can
                expire, so a third party may not be able to open it reliably; and ExpatHub almost certainly wants the
                document itself on file. The extract will contain the IE's actual identification number — which for a
                Georgian individual entrepreneur is normally Ana's own 11-digit personal number, the same one on her
                ID/residence card, rather than a separate company code.
            </Paragraph>
            <Paragraph>
                So: download → send the PDF to ExpatHub. If they come back saying they need a specific <Word>
                    <Emphasis />
                    number
                </Word> rather than the document, it'll be the personal/identification number printed on that extract — but
                let them tell you the exact field rather than guessing which number they mean.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T10:50:29.554664Z"
        >
            <Origin>019e8d1b-2a5c-7376-9b03-ce72e8bc9f74</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you translate this for me</Paragraph>
            <Attachment>
                Uploaded “Individual-Entrepreneur-Document-Georgian.pdf”, whose content the export does not carry
            </Attachment>
        </Message>
        <Message
            at="2026-06-03T10:50:45.553202Z"
        >
            <Origin>019e8d1b-2a5c-79e4-bae1-6713c388afd6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the full translation:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    National Agency of Public Registry
                </Word>
            </Paragraph>
            <Paragraph>3 June 2026 — B26372149/4</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Decision # B26372149/4
                </Word> (03/06/2026 14:21:23) <Word>
                    <Bold />
                    On Registration
                </Word>
            </Paragraph>
            <Paragraph>
                The National Agency of Public Registry received application #B26372149 on 02/06/2026 14:27:42 (applicant:
                <Word>
                    <Bold />
                    Anastasiia Krasavina / 75 6549796 /
                </Word>), requesting registration of a new entity.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Legal form:
                </Word> Individual Entrepreneur <Word>
                    <Bold />
                    Name:
                </Word> დიენეი <Word>
                    <Bold />
                    Name in Latin:
                </Word> DNA
            </Paragraph>
            <Paragraph>
                In accordance with the Georgian law "On the Public Registry," a decision was made to grant the request.
            </Paragraph>
            <Paragraph>The decision takes effect upon publication.</Paragraph>
            <Paragraph>The decision may be appealed in court within 30 calendar days from publication.</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    National Agency of Public Registry ::: Address: Tbilisi, Vakhtang Gorgasali Street, N22 ::: www.reestri.gov.ge
                </Word>
            </Paragraph>
            <Paragraph>
                So this confirms the IE is registered: business name <Word>
                    <Bold />
                    DNA
                </Word> (დიენეი), registered to Anastasiia Krasavina, decision dated 03/06/2026.
            </Paragraph>
            <Paragraph>Two things worth flagging:</Paragraph>
            <Paragraph>
                The number printed next to her name, <Word>
                    <Bold />
                    75 6549796
                </Word>, is the identifier the document associates with her — but it's only 9 digits, and a Georgian
                personal number is 11. It may be truncated in how it's displayed here, or it may be her ID-document number
                rather than her 11-digit personal number. Don't assume which one the bank wants — when ExpatHub or the bank
                asks for the "identification number," confirm which field they mean and read it off her actual ID card.
            </Paragraph>
            <Paragraph>
                Also worth noting: this is the <Word>
                    <Bold />
                    registration decision
                </Word> (გადაწყვეტილება), which proves the IE exists. Some banks want this; others specifically ask for the
                current <Word>
                    <Bold />
                    extract
                </Word> (ამონაწერი) showing active status, registered address, and activity code. They're related but not
                identical documents. If ExpatHub said "send us the registration document," this decision is likely fine —
                but I'd send it and ask them to confirm it's the right one before assuming.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T10:51:14.563042Z"
        >
            <Origin>019e8d1b-d9a9-717d-b117-ac79245dc379</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How is this possibly DNA in Georgian?</Paragraph>
            <Paragraph>დიენეი</Paragraph>
        </Message>
        <Message
            at="2026-06-03T10:51:23.370306Z"
        >
            <Origin>019e8d1b-d9a9-7797-9bbd-ac422a10fac9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Sound it out — Georgian is almost perfectly phonetic, one letter per sound:</Paragraph>
            <Paragraph>დ = d ი = i ე = e ნ = n ე = e ი = i</Paragraph>
            <Paragraph>
                So დიენეი reads <Word>
                    <Bold />
                    "di-e-ne-i"
                </Word> → <Word>
                    <Emphasis />
                    dee-eh-neh-ee
                </Word>.
            </Paragraph>
            <Paragraph>
                That's not the word "DNA" — it's the <Word>
                    <Bold />
                    English letters D-N-A spelled out by their English names
                </Word>, transcribed into Georgian:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>D → "dee" → დი</Line>
                <Line>N → "en" → ენ (here written ენე, catching the trailing vowel)</Line>
                <Line>A → "ay" → ეი</Line>
            </Paragraph>
            <Paragraph>
                So someone said the brand out loud as "Dee-En-Ay" and a clerk wrote down what they heard in Georgian script.
                დი-ენ-ეი. It's the <Word>
                    <Emphasis />
                    pronunciation
                </Word> of the acronym, not a translation of the words.
            </Paragraph>
            <Paragraph>
                The Latin field on the document confirms the intended spelling is just <Word>
                    <Bold />
                    DNA
                </Word>. The Georgian line is the Georgian-alphabet rendering of how you'd say those three letters aloud in
                English — which is why it looks nothing like the letters themselves.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T10:52:44.405648Z"
        >
            <Origin>019e8d1d-38fe-776a-bc22-a888b1fa38d1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you put that translation in a PDF so I can save it</Paragraph>
        </Message>
        <Message
            at="2026-06-03T10:53:52.730072Z"
        >
            <Origin>019e8d1d-38fe-778a-973b-9faf8551efa5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/skills/public/pdf/SKILL.md</Action>
            <Action>
                Ran fc-list | grep -iE "georgian|noto|dejavu|sans" | head -40; echo "---"; ls /usr/share/fonts/truetype/
                2&gt;/dev/null
            </Action>
            <Action>
                Ran find /usr/share/fonts -iname "*georgian*" 2&gt;/dev/null; echo "---google-fonts---"; ls
                /usr/share/fonts/truetype/google-fonts/ 2&gt;/dev/null | grep -iE "georgian|notosans" | head; echo "---test
                glyph---"; python3 -c " from fontTools.ttLib import TTFont f =
                TTFont('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf') cmap = f.getBestCmap() print('Georgian present in
                DejaVu:', 0x10D3 in cmap) " 2&gt;&amp;1 | tail -3
            </Action>
            <Action>
                Ran python3 -c " from fontTools.ttLib import TTFont f =
                TTFont('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf') cmap = f.getBestCmap() # Mkhedruli range
                U+10D0–U+10FF missing = &#91;hex(c) for c in range(0x10D0, 0x1100) if c not in cmap&#93; print('Missing
                Georgian codepoints in DejaVu:', missing) "
            </Action>
            <Action>Created /home/claude/make_pdf.py</Action>
            <Action>
                Ran cd /home/claude &amp;&amp; mkdir -p /mnt/user-data/outputs &amp;&amp; pip install reportlab fonttools
                --break-system-packages -q 2&gt;/dev/null; python3 make_pdf.py
            </Action>
            <Action>
                Ran cd /home/claude &amp;&amp; pip install pdf2image --break-system-packages -q 2&gt;/dev/null; python3 -c "
                from pdf2image import convert_from_path imgs =
                convert_from_path('/mnt/user-data/outputs/IE-Registration-Translation.pdf', dpi=110)
                imgs&#91;0&#93;.save('/home/claude/preview.png') print('pages', len(imgs)) " 2&gt;&amp;1 | tail -2
            </Action>
            <Action>Read /home/claude/preview.png</Action>
            <Paragraph>Done — the Georgian name (დიენეი) rendered correctly and the layout is clean.</Paragraph>
            <Action>Presented files</Action>
            <Paragraph>
                Here's the translation as a PDF. I marked it as an unofficial reference translation at the bottom — if any
                official body needs it, they'll require a certified/notarized translation rather than this one.
            </Paragraph>
            <Attachment>Uploaded “preview.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-03T10:55:16.236877Z"
        >
            <Origin>019e8d1f-8982-75e3-b860-326375f91e84</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>These are the three messages we received:</Paragraph>
            <Paragraph>
                &#91;6/3/2026 2:47 PM&#93; Ana Krasavina: GANSX. REG#B26372149--Dasrulebulia--Amonaceri Ixilet
                MY.GOV.GE-ze:Dokumentis #: NAPB26372149https://www.my.gov.ge/ka-ge/doc-delivery/NAPB26372149reestris
                ofisebshi, iusticiis saxlebsa da avtorizebul pirebtan&#91;6/3/2026 2:50 PM&#93; Ana Krasavina: s/n
                (305861868), gacnobebT, rom gagiaqtiurdaT Semosavlebis samsaxuris el.portali (eservices.rs.ge) UserName:
                305861868, erTjeradi Password: YnEpxihy. gacnobebT, rom sistemaSi SesvlisTanave savaldebuloa momxmareblis
                parolis cvlilebamogesalmebiT, individualuri mewarmis saqmianobasTan dakavSirebiT sasargeblo informacia
                ixileT bmulze : https://rs.ge/individualentrepreneur-en&#91;6/3/2026 2:52 PM&#93; Ana Krasavina: gtxovt,
                gaaaqtiurot subieqtis angarishi parametrebit: momkhmareblis sakheli: NAP305861868, aqtivaciis #: 385694,
                bmuli: https://www.my.gov.ge/ka-ge/account/activate
            </Paragraph>
            <Paragraph>And that document was what we downloaded at the first link</Paragraph>
        </Message>
        <Message
            at="2026-06-03T10:55:30.432132Z"
        >
            <Origin>019e8d1f-8982-7a13-8d73-93292c26a263</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good — these three messages together complete the picture. Let me lay out what each one is, because there's
                now a second important number you didn't have before.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Message 1
                </Word> — the registration is complete (<Word>
                    <Emphasis />
                    Dasrulebulia
                </Word>). The extract (<Word>
                    <Emphasis />
                    amonaceri
                </Word>) is available at my.gov.ge under document #NAPB26372149. That's the PDF you already downloaded.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Message 2
                </Word> — this is the big one. The <Word>
                    <Bold />
                    Revenue Service
                </Word> (Semosavlebis samsaxuri / RS.ge) has activated Ana's tax portal:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        s/n (305861868)
                    </Word> — this is her <Word>
                        <Bold />
                        tax identification number
                    </Word> (საიდენტიფიკაციო ნომერი). <Word>
                        <Emphasis />
                        This
                    </Word> is very likely the number the bank and ExpatHub actually want for the IE — not the personal-ID
                    number from earlier. It's the IE's tax ID.
                </Line>
                <Line>
                    Portal: <Word>
                        <Bold />
                        eservices.rs.ge
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        UserName: 305861868
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        One-time password: YnEpxihy
                    </Word>
                </Line>
                <Line>The system will force a password change on first login.</Line>
                <Line>Reference link about being an individual entrepreneur: rs.ge/individualentrepreneur-en</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Message 3
                </Word> — a separate account activation, this time for the <Word>
                    <Bold />
                    my.gov.ge
                </Word> portal:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Username: NAP305861868
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Activation #: 385694
                    </Word>
                </Line>
                <Line>Link: my.gov.ge/ka-ge/account/activate</Line>
            </Paragraph>
            <Paragraph>
                So you now have <Word>
                    <Bold />
                    two portals
                </Word> to set up: the Revenue Service one (eservices.rs.ge — for tax/declarations) and the my.gov.ge one
                (general government services).
            </Paragraph>
            <Paragraph>A few practical flags:</Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    305861868
                </Word> tax number is almost certainly what the bank means by the IE's identification number. When you go to
                the bank or send to ExpatHub, this is the number to give — but confirm with them which they want, since
                it'll also appear printed on the extract PDF.
            </Paragraph>
            <Paragraph>
                That <Word>
                    <Bold />
                    one-time password (YnEpxihy)
                </Word> is a live credential. Log into eservices.rs.ge soon, change it to something Ana controls, and don't
                forward that message around with the password still in it. Same caution with the activation code in message
                3.
            </Paragraph>
            <Paragraph>
                Beyond logging in and setting passwords, I'd hold off on doing anything else inside those portals until you
                know what's required — being an IE comes with monthly tax-declaration obligations (the 1% small-business
                turnover regime has to be applied for separately; it's not automatic). Worth confirming with ExpatHub
                whether they're handling that registration or whether Ana needs to.
            </Paragraph>
            <Paragraph>
                Want me to write out the login-and-secure-the-password steps for Ana in Russian so she can do it directly?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T10:56:24.602399Z"
        >
            <Origin>019e8d20-94b7-709b-8f13-9982ada6c5ed</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so why not make a document based on messages 2 and 3, a pdf in English, so Ana &amp; I have all of this
                information
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T10:57:11.407835Z"
        >
            <Origin>019e8d20-94b8-774b-9a32-3f8511951e22</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /home/claude/make_portal_pdf.py</Action>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 make_portal_pdf.py &amp;&amp; python3 -c " from pdf2image import
                convert_from_path imgs = convert_from_path('/mnt/user-data/outputs/IE-Portal-Access-Summary.pdf', dpi=100)
                imgs&#91;0&#93;.save('/home/claude/preview2.png') print('pages', len(imgs)) "
            </Action>
            <Action>Read /home/claude/preview2.png</Action>
            <Paragraph>Renders cleanly, Georgian name included.</Paragraph>
            <Action>Presented files</Action>
            <Paragraph>
                Here's the summary PDF with everything from messages 2 and 3 in one place — the tax ID number, both portals,
                their credentials, and the security/next-step notes.
            </Paragraph>
            <Paragraph>
                One thing I'd repeat outside the document: the two passwords in there (<Word>
                    <Bold />
                    YnEpxihy
                </Word> and activation <Word>
                    <Bold />
                    385694
                </Word>) are live one-time credentials. Once you log into both portals and set Ana's own passwords, this PDF
                becomes a record of expired codes, which is the safe state to keep it in. Until then, treat the file as
                sensitive.
            </Paragraph>
            <Paragraph>
                The 305861868 tax number is the one I'd lead with for the bank and ExpatHub, but as noted, let them confirm
                it's the field they mean rather than assuming.
            </Paragraph>
            <Attachment>Uploaded “preview2.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-03T10:59:25.374418Z"
        >
            <Origin>019e8d23-5391-7231-ab54-d0f803e9994a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Thank you. So if Ana brought this to a bank, would she be able to get an account. Credo Bank already told us
                they would help her:
            </Paragraph>
            <Paragraph>305861868</Paragraph>
        </Message>
        <Message
            at="2026-06-03T10:59:49.748160Z"
        >
            <Origin>019e8d23-5391-7e93-9b0c-ec9a64534f13</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I want to give you a grounded answer rather than assume, so let me check what Credo Bank currently requires
                for an IE account.
            </Paragraph>
            <Action>
                Searched the web for “Credo Bank Georgia individual entrepreneur business account opening requirements
                documents”
            </Action>
            <Paragraph>Here's the honest picture, separating what's solid from what isn't.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The number alone isn't what opens the account — it's one piece of a document set.
                </Word> The tax ID (305861868) identifies the business, but to actually open the account Ana would bring, in
                person, roughly: her passport, the IE registration documents (the extract / registration decision you
                already have), a Georgian phone number, and proof of address. A passport, Georgian phone number, IE
                registration documents, and proof of address are required, with additional documents possibly requested
                depending on the bank. So the number goes <Word>
                    <Emphasis />
                    on
                </Word> the application; it isn't a key that opens the door by itself.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Credo is genuinely the right choice here, and that they already agreed to help matters a lot.
                </Word> Across sources, Credo is consistently described as the most accommodating of the Georgian banks for
                IEs. Credo Bank is less strict in checks compared to larger banks. And the general process is fast in person
                — the in-person process takes 30–40 minutes if documents are complete, with internet banking and debit cards
                within a few days.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one real caveat I won't soften:
                </Word> Ana is a Russian citizen, and that's the single biggest variable in whether this goes smoothly.
                Since 2022, banks have strengthened checks for Russian nationals, document requirements have become
                stricter, and non-resident entrepreneurs are sometimes refused — though Credo is among the more lenient. Two
                things work in her favor against that: she's now a registered Georgian IE (a registered local business, not
                a tourist), and if she has a TRP / residency, that further helps. No residence permit is strictly required —
                only a registered Georgian company — but having residency increases credibility with the bank.
            </Paragraph>
            <Paragraph>
                So, direct answer to "would she be able to get an account": <Word>
                    <Bold />
                    very likely yes, given Credo already agreed and the IE is registered
                </Word> — but not on the strength of the number alone, and not as an absolute guarantee, because the
                Russian-citizenship KYC step is a real factor that no source can promise the outcome of in advance.
            </Paragraph>
            <Paragraph>
                What I'd do before she goes in: message the Credo contact who offered to help and ask them to <Word>
                    <Bold />
                    confirm the exact document list and whether they want the registration extract specifically
                </Word> — some banks ask for a freshly-dated extract. That one message removes the only real failure mode
                (showing up with the wrong or stale paperwork). Want me to draft that message to the Credo contact, in
                English or Russian?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T12:51:39.677959Z"
        >
            <Origin>019e8d8a-16da-7c9d-834e-770b8e687956</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you make a PDF out of the relevant details of this too:</Paragraph>
            <Paragraph>
                Congratulations! Your business is now registered. You can find your business extract here:
                https://bs.napr.gov.ge/GetBlob?pid=400&amp;bid=boVlyOwlsX3qmYsntmLmFNapE&#93;wvzKGslX4DhMoIMUaTONeaPhJ6cqAqg99AARZZThe
                business extract is what banks usually need; you may provide it to them.Please review the extract carefully
                to ensure all details are correct.Your Small Business Status is now active (the registration certificate is
                attached), and your eligible income will therefore be taxed at a 1% rate on gross turnover.Our Quick Start
                Guide for Individual Entrepreneurs covers essential details such as VAT registration and monthly declaration
                deadlines. Find it here: https://expathub.ge/individual-entrepreneurs-start-guide/I have successfully
                activated both your Revenue Service (RS) and <Word>
                    <Reference>http://my.gov.ge/</Reference>
                    My.Gov.Ge
                </Word> web portals.Your Revenue Service (RS) portal username is 305861868, and the password is
                YnEpxihy.Your <Word>
                    <Reference>http://my.gov.ge/</Reference>
                    My.Gov.Ge
                </Word> portal username is NAP305861868, and the password is NAP305861868YnEpxihy.You may change your login
                details and update the associated contact information (email and phone) on both portals as needed.I believe
                this concludes our services. Let us know if you have any questions.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T12:52:40.717671Z"
        >
            <Origin>019e8d8a-16da-7168-a62a-a70b4611a24b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Created /home/claude/make_handover.py</Action>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 make_handover.py &amp;&amp; python3 -c " from pdf2image import
                convert_from_path imgs = convert_from_path('/mnt/user-data/outputs/IE-Handover-Summary.pdf', dpi=100) for
                i,im in enumerate(imgs): im.save(f'/home/claude/h&#123;i&#125;.png') print('pages', len(imgs)) "
            </Action>
            <Action>Read /home/claude/h0.png</Action>
            <Paragraph>Looks clean and complete.</Paragraph>
            <Action>Presented files</Action>
            <Paragraph>
                Here's the consolidated handover sheet. It captures everything from the ExpatHub message: status, the
                business extract link (the document Credo will want), both portals with their credentials, the Quick Start
                Guide, and the action items.
            </Paragraph>
            <Paragraph>Three things worth saying out loud:</Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    My.Gov.Ge password
                </Word> ExpatHub gave is <Word>
                    <Verbatim />
                    NAP305861868YnEpxihy
                </Word> — that's the username with <Word>
                    <Verbatim />
                    YnEpxihy
                </Word> tacked on the end. I recorded it exactly as they wrote it, but if it doesn't work on first login,
                that's the likely culprit to double-check with them.
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    business extract link
                </Word> has a stray <Word>
                    <Verbatim />
                    &#93;
                </Word> character in the middle of the token (<Word>
                    <Verbatim />
                    ...FNapE&#93;wvzKGsl...
                </Word>). That may be a paste artifact, or it may break the link. Open it and confirm it actually loads the
                right document before counting on it — if it fails, ask ExpatHub to resend a clean link.
            </Paragraph>
            <Paragraph>
                And the practical bottom line connecting this to your bank question: ExpatHub explicitly confirmed the
                <Word>
                    <Bold />
                    business extract is what banks need
                </Word>, which matches what I found for Credo. So once you've opened that extract and checked it's correct,
                that plus Ana's passport is the core of what she walks into Credo with.
            </Paragraph>
            <Attachment>Uploaded “h0.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-03T12:55:00.090802Z"
        >
            <Origin>019e8d8d-2456-7cc2-aaa6-6bece4daeb1c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate this please</Paragraph>
            <Attachment>Uploaded “Document.pdf”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-03T12:55:13.991229Z"
        >
            <Origin>019e8d8d-2456-7fe1-86e9-e52c2e088263</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the full translation:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    REVENUE SERVICE
                </Word>
            </Paragraph>
            <Paragraph>
                Identification code / Personal number: <Word>
                    <Bold />
                    305861868
                </Word> Name: <Word>
                    <Bold />
                    Anastasiia Krasavina — DNA
                </Word> Address: <Word>
                    <Bold />
                    Vake-Saburtalo / Paliashvili St.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    APPLICATION
                </Word> <Word>
                    <Bold />
                    Granting the status of small business (auto +)
                </Word>
            </Paragraph>
            <Paragraph>
                I hereby notify you that my type of activity is <Word>
                    <Emphasis />
                    professional, scientific and technical activities (except consulting activities), and support activities for the performing arts
                </Word>. On the basis of Article 89, Part 1 of the Tax Code of Georgia, I request that you grant me <Word>
                    <Bold />
                    small business status
                </Word> and issue me the corresponding certificate.
            </Paragraph>
            <Paragraph>
                I confirm that I do not carry out any activity prohibited for small business status, and that the activity I
                have specified is not subject to the conditions for activities prohibited for small business as defined in
                Annex N4, approved by Government of Georgia Resolution N415 of 29 December 2010 "On Special Taxation
                Regimes."
            </Paragraph>
            <Paragraph>
                By signing this application, I express my consent for this application to be submitted to the LEPL Revenue
                Service through the relevant electronic program.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Service fee:
                </Word> 1 working day — free
            </Paragraph>
            <Paragraph>Date: 03/06/2026 04:30:00</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    An application submitted electronically on the official Revenue Service website (www.rs.ge), and any document issued electronically on that basis, has the same legal force as a written document (even though it does not bear the signature and seal of an authorized person). Document authenticity can be verified at www.rs.ge/searchapp.
                </Word>
            </Paragraph>
            <Paragraph>
                Account details ID: 38282155, Barcode: 2940008 LEPL "Revenue Service" Receiving bank — State Treasury,
                Tbilisi 0114, Gorgasali St. 16 Bank code: TRESGE22 | 2 299 299 LEPL "Revenue Service" account / treasury
                code: 707017021 — info@rs.ge — www.rs.ge
            </Paragraph>
            <Paragraph>Printed: 03.06.2026 04:54:15 — p. 1</Paragraph>
            <Paragraph>
                So this is the <Word>
                    <Bold />
                    small-business-status application
                </Word> Ana submitted (the <Word>
                    <Emphasis />
                    granting
                </Word> of the 1% regime). Two useful details it confirms:
            </Paragraph>
            <Paragraph>
                Her registered <Word>
                    <Bold />
                    activity category
                </Word> is professional/scientific/technical work (explicitly <Word>
                    <Emphasis />
                    excluding consulting
                </Word>) plus performing-arts support — which lines up with cartography/illustration/design work, and the
                "except consulting" wording matters because consulting is one of the activities that can be barred from the
                1% regime.
            </Paragraph>
            <Paragraph>
                And the document confirms what ExpatHub told you: the status was processed under Article 89 of the Tax Code,
                the 1% small-business regime. This is the application/certificate side; her actual tax ID (305861868) and
                the active status are consistent across all the documents now.
            </Paragraph>
            <Paragraph>Want me to add this translation to the handover PDF, or keep it separate?</Paragraph>
        </Message>
        <Message
            at="2026-06-03T12:56:52.937461Z"
        >
            <Origin>019e8d8e-df00-76c2-9433-7c24d9340154</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Why excluding consulting?</Paragraph>
        </Message>
        <Message
            at="2026-06-03T12:57:05.619244Z"
        >
            <Origin>019e8d8e-df00-7b97-a115-ac7b031f660b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good thing to flag, because it's deliberate, not an accident.</Paragraph>
            <Paragraph>
                Under Georgia's small-business (1%) regime, the law lists certain activities that are <Word>
                    <Bold />
                    barred
                </Word> from the 1% rate. Consulting is the big one. The rule comes from the same Resolution N415 the
                document cites — its Annex N4 names the prohibited activities, and <Word>
                    <Bold />
                    consulting/advisory services
                </Word> are on that list. If your declared activity is consulting, you don't get 1%; that income gets taxed
                at the standard rate instead (effectively the ~20% personal income bracket).
            </Paragraph>
            <Paragraph>
                So the phrase "professional, scientific and technical activities <Word>
                    <Bold />
                    (except consulting)
                </Word>" is doing a specific job: it's the standard activity classification ExpatHub selected for her <Word>
                    <Emphasis />
                    minus
                </Word> the slice of it that would disqualify her from the 1% rate. The classification "professional,
                scientific and technical activities" is a broad bucket that ordinarily <Word>
                    <Emphasis />
                    includes
                </Word> consulting — so they explicitly carved consulting out to keep her cleanly inside the eligible 1%
                zone. The application even has her affirming she doesn't perform any prohibited activity; the "except
                consulting" wording is what makes that affirmation true and consistent.
            </Paragraph>
            <Paragraph>
                Why it matters in practice: the category is about how income is <Word>
                    <Emphasis />
                    labeled
                </Word>, and the labeling determines the tax rate. For cartography, illustration, and design work, the
                eligible category fits naturally. The thing to be aware of going forward is that if some of Ana's actual
                work were ever billed or described as "consulting" or "advisory" — to a client, on an invoice, on Fiverr —
                that specific income could fall outside the 1% protection and be taxable at the higher rate. The
                registration is set up correctly; the discipline is just keeping the <Word>
                    <Emphasis />
                    descriptions of the work
                </Word> aligned with the eligible category rather than drifting into "consulting" language.
            </Paragraph>
            <Paragraph>
                I'd treat the exact boundary — what counts as consulting vs. eligible technical work in a borderline case —
                as a question for ExpatHub or an accountant rather than something to infer, since that line is where the 1%
                status actually lives or dies. But the short answer to your question: consulting is excluded because
                Georgian law excludes it from the 1% regime, and the wording protects her eligibility.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T12:57:34.967119Z"
        >
            <Origin>019e8d8f-81d0-7bf6-8ac6-e5cb5c941c83</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What counts as consulting? Is it a label given by the company that hires?</Paragraph>
        </Message>
        <Message
            at="2026-06-03T12:58:03.802315Z"
        >
            <Origin>019e8d8f-81d0-782f-96ff-8381807c08ce</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is exactly the kind of question where guessing would be worse than useless, so let me check what the
                actual rule turns on rather than reason from intuition.
            </Paragraph>
            <Action>
                Searched the web for “Georgia small business status 1% consulting prohibited activity definition Resolution
                415 what counts as consulting”
            </Action>
            <Paragraph>
                Direct answer: <Word>
                    <Bold />
                    no, it's not the client's label that controls — it's the substance of the work, as the Revenue Service's audit department would characterize it after the fact.
                </Word> That's the crucial and slightly uncomfortable part.
            </Paragraph>
            <Paragraph>Here's how it actually works, and there's a real gap between the two stages:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    At registration
                </Word>, it's self-declared and barely checked. When you state your activity at the service centre, they
                rely on your words and issue the certificate without requesting service contracts or verifying what you
                actually do — say "IT service" and you get it; say "consultation service" and they tell you you don't
                qualify. So the <Word>
                    <Emphasis />
                    label at registration
                </Word> is just what you assert.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    At audit
                </Word>, substance is what governs. If a tax inspection is later initiated, inspectors from the audit
                department (a different department from the one that issued the certificate) analyze the work — and can
                conclude that your activity is, for example, "providing consultations regarding IT" rather than "IT
                service." That's the risk: the certificate doesn't protect you if the underlying work is, in substance,
                consulting. The audit looks through the label.
            </Paragraph>
            <Paragraph>
                So to your question framed precisely: it is <Word>
                    <Bold />
                    not
                </Word> the hiring company's choice of word, and it's <Word>
                    <Bold />
                    not
                </Word> safely the word you put on registration either. Both of those can be overridden by what the tax
                authority decides the work <Word>
                    <Emphasis />
                    was
                </Word> — judged from contracts, invoices, deliverables, and how the service was actually rendered.
            </Paragraph>
            <Paragraph>
                What "consulting/advisory" means in this regime, from the law itself: the prohibited list in Resolution 415
                names medical, architectural, legal or notarial, auditing, and consulting (including tax) activities, and
                the broader reading includes advisory services generally. The conceptual line that recurs across sources is
                <Word>
                    <Bold />
                    doing the work yourself and delivering a product/service
                </Word> (eligible) versus <Word>
                    <Bold />
                    advising a client on what they should do
                </Word> (consulting, ineligible). For Ana, drawing a map or producing an illustration is delivering a work
                product — clearly on the eligible side. Telling a client how to design their own maps, or advising on their
                cartographic strategy, would drift toward advisory.
            </Paragraph>
            <Paragraph>
                Two practical implications worth holding onto, though I'd put the fine line in front of ExpatHub or an
                accountant rather than treat my read as authoritative:
            </Paragraph>
            <Paragraph>
                The protection lives in <Word>
                    <Bold />
                    how the work is described and documented
                </Word> — invoices, Fiverr gig titles, contract language. Keeping those phrased as deliverables ("map
                illustration," "design," "artwork") rather than "consulting" or "advice" is the discipline that keeps her
                cleanly inside the 1% regime, because those documents are exactly what an auditor would read.
            </Paragraph>
            <Paragraph>
                And there's a related trap one source raised that isn't your question but sits right next to it: <Word>
                    <Bold />
                    "disguised employment"
                </Word> — a freelancer whose arrangement actually looks like employment can also be denied the 1% rate.
                Single long-term client, fixed monthly amount, working under their direction — that pattern can get
                recharacterized too. Not a concern if she's invoicing varied clients for discrete pieces of work, but worth
                knowing the audit lens looks at the real shape of the relationship, not the contract's title.
            </Paragraph>
            <Paragraph>
                The boundary in any genuinely borderline case is a question for the accountant — that's where 1% status
                actually lives or dies, and it's not something I'd want you acting on from my read alone.
            </Paragraph>
        </Message>
    </Chapter>
);
