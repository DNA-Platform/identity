import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 March 2026](2026-03-30)</Date>
        </Dated>
        <Title>[[ 30 March 2026 ]]</Title>
        <Message
            at="2026-03-30T10:33:30.106946Z"
        >
            <Origin>019d3e4e-c12a-7c90-af28-c4c702c18803</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Why does she have a negative balance read in Georgian. And why does when she pays it tells her that she has
                a balance left? What is credo bank doing to give her a negative balance
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-30T10:33:55.018594Z"
        >
            <Origin>019d3e4e-c12a-7582-9ca2-d119a52efb3f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>This is actually straightforward once you understand how Credo Bank presents the data.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The negative balance in the app (-119.80 GEL)
                </Word> means this is a <Word>
                    <Bold />
                    credit card
                </Word>, not a debit card. Credo Bank displays the amount <Word>
                    <Emphasis />
                    owed
                </Word> as a negative number. She has charged 119.80 GEL to the card and hasn't paid it back yet — that's
                normal credit card behavior. Nothing is wrong.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The "Balance" in the SMS notifications
                </Word> (37.81 GEL, then 28.11 GEL) is showing her <Word>
                    <Bold />
                    remaining available credit limit
                </Word> — how much more she can still spend. After the Bolt charge of 9.70 GEL, it dropped from 37.81 →
                28.11 exactly (37.81 − 9.70 = 28.11 ✓), which confirms this interpretation.
            </Paragraph>
            <Paragraph>So Credo is showing two different things in two different places:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        App
                    </Word>: Total amount owed on the card (negative = debt)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        SMS
                    </Word>: Remaining credit available to spend
                </Line>
            </Paragraph>
            <Paragraph>
                She has a small credit limit on this card (looks like roughly 150 GEL total), has used most of it, and has
                about 28 GEL left to spend before hitting the limit. She's not overdrawn — she just needs to make a payment
                to Credo to pay down the balance and free up her credit again.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:34:19.318563Z"
        >
            <Origin>019d3e4f-82fc-7e42-b2e5-0bcfef5c6ebd</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But it’s not a credit card. We were told that it is not.</Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:34:48.543189Z"
        >
            <Origin>019d3e4f-82fc-75b2-9fa5-312ffb5d6bb4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair enough, I should back off my confident assertion then. I don't actually know Credo Bank's specific
                products well enough to have stated that so definitively.
            </Paragraph>
            <Paragraph>
                Looking at the evidence with fresh eyes: the same card (6308) shows -119.80 in the app, but the SMS shows a
                remaining "balance" that decreases with each purchase (37.81 → 28.11 after a 9.70 GEL Bolt charge). That
                math is consistent, but I can't confidently explain what product structure produces this behavior if it's
                not a credit card.
            </Paragraph>
            <Paragraph>Possible alternatives worth raising with Credo directly:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    A debit account with an <Word>
                        <Bold />
                        authorized overdraft facility
                    </Word> — she's dipped below zero but has a pre-approved overdraft limit, and the SMS "balance" shows
                    remaining overdraft headroom
                </Line>
                <Line>
                    Some kind of <Word>
                        <Bold />
                        hybrid prepaid/debit product
                    </Word> with Credo-specific accounting logic
                </Line>
            </Paragraph>
            <Paragraph>
                The honest answer is: I don't know Credo Bank's product lineup well enough to say with certainty, and "we
                were told it's not a credit card" is important information I should weight. The most useful next step is
                asking Credo directly — specifically: <Word>
                    <Emphasis />
                    why is the app balance negative, and what does the "Balance" figure in the SMS represent?
                </Word> Those are the two concrete questions that would resolve it.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:38:54.533930Z"
        >
            <Origin>019d3e53-b5b5-7717-86e5-bcd8b45a478f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do debit cards from a credo bank frequently have small credit limits for overdraft peotection
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:39:09.294934Z"
        >
            <Origin>019d3e53-b5b6-773d-ada3-c2b5b3949836</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Credo Bank Georgia debit card overdraft limit”</Action>
            <Paragraph>
                Yes — Credo Bank explicitly offers an overdraft product that adds an additional limit to your account, which
                you can utilize at any time via internet banking and plastic cards. They offer a pre-approved amount that
                can be used for banking operations, and customers who receive their salary at Credo can get an increased
                overdraft limit.
            </Paragraph>
            <Paragraph>
                So the most likely explanation is exactly what I suggested in the revised answer: her debit card has a Credo
                overdraft attached to it — a small pre-approved limit (~150 GEL or so based on the numbers visible). The app
                shows how deep into that overdraft she is (-119.80 GEL owed), and the SMS notifications show how much
                overdraft headroom she has remaining.
            </Paragraph>
            <Paragraph>
                She should check whether interest is accruing on the negative balance. The Credo overdraft product does
                charge interest — it's calculated on a daily basis — so if she's been sitting at -119 GEL for a while, she
                may be accumulating daily interest charges she's not aware of.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:46:13.627161Z"
        >
            <Origin>019d3e5a-69d0-7644-a6c3-9e80357ea1d1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Different but does adobe stock accept stock metadata in different languages? Can you extend your business
                with multiple metadata afiles
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:46:28.568489Z"
        >
            <Origin>019d3e5a-69d0-7c7a-96e9-d7cd023c1e13</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Adobe Stock metadata multiple languages accepted”</Action>
            <Paragraph>The answer to both questions is clear from Adobe's own documentation.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On language:
                </Word> Adobe Stock recommends using a single language — whichever you're most comfortable with. Once you've
                chosen it, enter all metadata consistently in that language, and the Adobe Stock search engine will
                automatically translate it into other available languages. So Ana can keyword in Russian if that's most
                natural for her, and it will reach English-speaking buyers automatically.
            </Paragraph>
            <Paragraph>
                The critical catch: you must verify the selected language in the "I'm writing title &amp; keywords in"
                dropdown when submitting. If there's a language mismatch between the menu selection and the actual metadata,
                the content won't be surfaced in searches at all. That's an easy mistake to make since the dropdown defaults
                to the OS language.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On mixing languages:
                </Word> If you enter keywords in multiple languages, the translation function won't work properly. So mixing
                Russian and English keywords in the same file is actively harmful — pick one and stay consistent.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the second question (multiple metadata files/accounts):
                </Word> The search didn't return anything specific about running multiple contributor accounts to extend
                reach. That's a separate question — do you mean running a second Adobe Stock contributor account under a
                different name, or something else? Worth clarifying before I dig into it, since Adobe's terms on multiple
                accounts may be relevant.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:47:14.593215Z"
        >
            <Origin>019d3e5b-56e3-7e07-9660-08f39db81553</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No we would submit with different langauves - same art with digfetent embedded metadata</Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:47:30.279027Z"
        >
            <Origin>019d3e5b-56e4-70f3-ade4-115a1ddcf19f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Adobe Stock duplicate submission same image different metadata rejected policy”
            </Action>
            <Paragraph>
                This strategy would backfire badly. Adobe Stock explicitly prohibits content spamming, which includes
                sending multiple submissions of identical or almost identical files. Submitting the same artwork twice with
                different embedded metadata languages would almost certainly trigger that — and spamming is strictly
                prohibited and may prompt them to block or permanently close the account.
            </Paragraph>
            <Paragraph>
                More importantly, it's entirely unnecessary. As we established earlier, once you choose a language and enter
                metadata consistently in that language, the Adobe Stock search engine automatically translates it into other
                available languages. The multilingual reach you're trying to engineer manually is already handled for you
                from a single submission.
            </Paragraph>
            <Paragraph>
                So the correct workflow is: submit once, pick one language for the metadata, declare it correctly in the
                dropdown, and Adobe's system distributes it across all languages automatically. Attempting to game that with
                duplicate submissions would risk the whole account.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:47:54.191254Z"
        >
            <Origin>019d3e5b-f2d4-7cce-a992-fa7c6581adc1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Oh well</Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:47:58.808181Z"
        >
            <Origin>019d3e5b-f2d5-713a-9383-aceee43ee0ce</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yeah, it was a reasonable idea — just not necessary given how Adobe's system already handles it. The
                automatic translation actually works in Ana's favor since Russian metadata for locally relevant content
                (Georgian/Caucasus subjects, etc.) gets flagged as a language-specific nuance that can improve regional
                search results, while still reaching English buyers automatically.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:48:12.283691Z"
        >
            <Origin>019d3e5c-37ba-79ba-bb68-c967f15721ec</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Well we do english</Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:48:16.143125Z"
        >
            <Origin>019d3e5c-37ba-7480-a495-58e6fb7d520f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's probably the right call. English is the dominant search language on Adobe Stock and the translation
                engine is built around it, so you're starting from the strongest possible base. No real reason to change.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:48:52.305681Z"
        >
            <Origin>019d3e5c-d2cd-7555-a99c-e356dc62bf0c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is there no readon to choose different panguages for different art? What if the art is cities in china
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:49:02.503142Z"
        >
            <Origin>019d3e5c-d2ce-7a63-a4e5-48c510710779</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Actually yes — Adobe specifically called this out. They actively encourage using local language for assets
                that have local relevancy, such as people, uniforms, traditional dresses, architecture, flora and fauna.
            </Paragraph>
            <Paragraph>
                The reasoning is that a buyer in China searching in Chinese for images of Shanghai will get more nuanced,
                accurate results from Chinese metadata than from machine-translated English. The translation engine works,
                but it can miss culturally specific terms, neighborhood names, architectural styles, or regional nuances
                that a native speaker would naturally include.
            </Paragraph>
            <Paragraph>
                So a reasonable strategy for Ana would be: English as the default for most work, but switch to the locally
                relevant language for art that depicts specific cultural or geographic subjects where a native-language
                buyer would be the primary customer. Chinese cities, Georgian landmarks, Central Asian subjects — those
                might all benefit from native-language metadata.
            </Paragraph>
            <Paragraph>
                The key operational requirement is making sure the language dropdown in the contributor portal is set
                correctly to match whichever language the metadata is actually written in, otherwise the content won't
                surface in searches at all.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:50:52.853233Z"
        >
            <Origin>019d3e5e-ac4c-777e-8b1b-5b6f29cfb082</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Oh it has to be the language in the portal? Can’t just update art with metadata in the language used on the
                art?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:51:01.444744Z"
        >
            <Origin>019d3e5e-ac4d-7b20-9dea-dd56ef92617b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, the portal declaration has to match. From what we found earlier, it's important to always verify the
                selected language in the "I'm writing title &amp; keywords in" dropdown menu — in case of a language
                mismatch between the menu selection and your metadata, your content won't be surfaced in searches at all.
            </Paragraph>
            <Paragraph>
                So even if Ana embeds perfect Chinese metadata in the file, if the portal dropdown is still set to English,
                Adobe's system won't process it correctly and the file effectively becomes invisible. The portal setting is
                what tells Adobe's translation and indexing engine how to handle the keywords.
            </Paragraph>
            <Paragraph>
                Practically speaking this means for any non-English submission she'd need to actively change that dropdown
                before uploading that batch, then switch it back for English work. A small but critical step.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:51:29.532332Z"
        >
            <Origin>019d3e5f-3c4f-73e3-9380-6f7c9c7e2bde</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>This matters with sftp?</Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:51:40.824459Z"
        >
            <Origin>019d3e5f-3c50-7b4a-b7e7-7d07182c7a27</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Adobe Stock SFTP upload keyword language setting metadata”</Action>
            <Paragraph>
                Yes it still matters. When you upload via SFTP, files appear in the "New" tab of your contributor portal,
                where you then title and keyword them just as you would with direct uploads. So the language dropdown in the
                portal still governs how Adobe indexes the metadata — the SFTP transfer just handles the file delivery, the
                metadata step still happens in the portal afterward.
            </Paragraph>
            <Paragraph>
                You can keyword in your own language, but you must set the correct language in the contributor portal,
                otherwise the terms may never be indexed properly.
            </Paragraph>
            <Paragraph>
                The one exception is if you embed metadata directly in the file before upload via Illustrator's File Info —
                Adobe will read that embedded metadata and pre-populate the fields. But the portal language setting still
                needs to match whatever language is embedded, otherwise the indexing breaks.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:52:02.540009Z"
        >
            <Origin>019d3e5f-bc86-74b2-b28c-93e0835909ac</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>We are embedding in the file</Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:52:12.572859Z"
        >
            <Origin>019d3e5f-bc87-7bbc-8e2c-9b1daa5f3ddb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Then for your current English workflow it's probably a non-issue — English is almost certainly the portal
                default, and English embedded metadata will match it automatically.
            </Paragraph>
            <Paragraph>
                But if you ever did want to try Chinese or another language for regionally specific art, you'd need to
                remember to change the portal language setting for that upload batch before the files go through. The
                embedded metadata pre-populates the fields, but the portal setting is still what tells Adobe's indexing
                engine what language it's actually reading. A mismatch means the file becomes invisible in search regardless
                of how good the embedded keywords are.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:52:44.306822Z"
        >
            <Origin>019d3e60-4f1a-727f-a007-1ad565516af6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I thought you said the exception was if it was embedded in the mediator, so why can’t I embedded French and
                one piece of art and a bed Chinese and another piece of art
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:52:58.149535Z"
        >
            <Origin>019d3e60-4f1a-7ae4-812c-21a92e37dce9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I slightly muddled that last message — I didn't actually say embedding bypasses the portal language setting,
                but I can see how it read that way. Sorry for the confusion.
            </Paragraph>
            <Paragraph>
                The portal language setting is a single session-level dropdown, not per-file. So when you upload a batch,
                every file in that batch gets indexed under whichever language is currently selected. The embedded metadata
                pre-populates the keyword fields, but the language declaration still comes from the portal setting, not from
                the file itself.
            </Paragraph>
            <Paragraph>
                So if you uploaded a French file and a Chinese file in the same batch with the portal set to English, both
                would be indexed as English — and the translation engine would try to translate what is actually French or
                Chinese text as if it were English, which would break search.
            </Paragraph>
            <Paragraph>
                To do what you're describing, you'd need to upload in separate batches and change the portal language
                setting between them. Workable, but adds friction to the workflow.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:53:30.233866Z"
        >
            <Origin>019d3e61-1343-70e5-8b0a-8e794f457d61</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Are you sure do more rigorous research?</Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:53:49.437990Z"
        >
            <Origin>019d3e61-1343-7fb0-925a-097628677421</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Adobe Stock contributor portal language setting per file embedded metadata IPTC
                language override”
            </Action>
            <Paragraph>
                Honestly, I can't find a definitive answer to this specific question from the search results. Adobe's
                documentation is consistently framed around contributors typing metadata into the portal UI, where the
                dropdown clearly applies as a session-level setting. For files with pre-embedded metadata, it's genuinely
                unclear whether Adobe reads a language tag from the XMP data per-file, or whether the portal dropdown still
                governs indexing regardless.
            </Paragraph>
            <Paragraph>
                What the documentation does say clearly: keywords and titles need to be in a single language — the one
                selected in the "I'm writing title &amp; keywords in" dropdown in the contributor portal. But that guidance
                is written assuming you're typing in the portal, not embedding in advance.
            </Paragraph>
            <Paragraph>
                The honest answer is I don't know whether Adobe's system is smart enough to detect language per-file from
                embedded XMP, or whether the portal dropdown overrides everything. This is a narrow enough technical
                question that it's probably worth asking Adobe support directly, or testing with a small non-English batch
                and checking whether it surfaces correctly in search. I'd rather flag my uncertainty here than keep
                asserting something I can't verify.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:54:21.242259Z"
        >
            <Origin>019d3e61-d6ba-7c21-9cb2-418605534135</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But metadata is prepopukated</Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:54:32.266575Z"
        >
            <Origin>019d3e61-d6ba-7114-9597-0b9b34d8d94e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's a fair point and it cuts to the heart of what I don't know. If the metadata pre-populates the fields
                from the embedded file, it's plausible that Adobe's system reads the XMP language tag per-file and sets the
                language accordingly — which would mean each file could effectively declare its own language independently
                of the portal dropdown.
            </Paragraph>
            <Paragraph>
                But I genuinely can't confirm that from anything I found. The documentation just doesn't address this
                specific scenario clearly. I've been reasoning from general principles and I may be wrong.
            </Paragraph>
            <Paragraph>
                The only way to know for certain is either to ask Adobe support directly, or run a small test — embed French
                metadata in one file, upload it, and see whether it indexes and surfaces correctly in French searches
                without manually changing the dropdown. That would answer the question definitively.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:55:04.188872Z"
        >
            <Origin>019d3e62-81ac-793f-bd90-592cce69b66b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How would we know if it qorks?</Paragraph>
        </Message>
        <Message
            at="2026-03-30T10:55:11.582436Z"
        >
            <Origin>019d3e62-81ad-7c76-a762-e8c5668b32f3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good question — you can't easily verify it from the outside since you'd need to search Adobe Stock in French
                and see if the file appears, which requires either a French-language Adobe Stock account or changing your
                region setting to France and searching.
            </Paragraph>
            <Paragraph>
                A more practical test would be to upload a small batch with mixed embedded languages, then check the
                individual files in the contributor portal after upload and see what language the dropdown shows for each
                file. If Adobe is reading the language per-file from XMP, you'd expect to see different language
                declarations per file. If it's just the session setting, they'd all show the same language.
            </Paragraph>
            <Paragraph>
                That portal check after upload is probably the fastest way to get your answer without needing to actually
                verify search behavior across multiple language markets.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:00:49.563665Z"
        >
            <Origin>019d3e67-c6e7-7377-a815-48d74cd3e2e6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Does our georgian credo bank have an app that I can use to add money to my card?</Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:00:59.424781Z"
        >
            <Origin>019d3e67-c6e7-7442-bcc4-a52169643e1c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Credo Bank Georgia MyCredo app top up card transfer”</Action>
            <Paragraph>
                Yes. The app is called <Word>
                    <Bold />
                    MyCredo
                </Word> and it's available on both the App Store and Google Play. You can instantly transfer money between
                any Georgian bank cards 24/7. So Ana can transfer money from another Georgian bank account directly to her
                Credo card through the app to pay down the negative balance.
            </Paragraph>
            <Paragraph>
                The app also handles utility bills, mobile top-ups, currency exchange, and international transfers if
                needed. She may already have it — that looks like the same app shown in the first photo you shared.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:01:59.173646Z"
        >
            <Origin>019d3e68-d52c-7865-b953-011a63207ec1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Great. What is the cheapest way to add money to the card from a exchange fee perspective</Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:02:11.244487Z"
        >
            <Origin>019d3e68-d52c-77b8-9fd1-80a92a79bb0b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                To give you a useful answer I need to understand the source of the funds — are you looking to move money
                from your US accounts (Citibank, Chase, Wise) into her Credo card, or from another Georgian bank account you
                already hold GEL in?
            </Paragraph>
            <Action>Used ask user input v0</Action>
        </Message>
        <Message
            at="2026-03-30T11:03:10.020293Z"
        >
            <Origin>019d3e69-ec3c-777e-8be9-841313dc29f5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Q: Where is the money coming from? A: Us bank or wise. I think the credo card has a usd account too so their
                own exchange fee might be worth looking up
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:03:34.503265Z"
        >
            <Origin>019d3e69-ec3c-75e9-810a-8f6dd46a002e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Credo Bank Georgia USD account exchange rate fee GEL conversion”</Action>
            <Paragraph>Here's what the search confirms and the logical framework for the cheapest route:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Credo does support USD accounts
                </Word> alongside GEL, so you have a clean option: send USD from Wise directly to her Credo USD account via
                SWIFT (Credo's SWIFT code is JSCRGE22). Wise uses mid-market rate with a transparent small fee — no hidden
                spread. The USD lands in her Credo USD account with no conversion loss yet.
            </Paragraph>
            <Paragraph>
                Then she converts USD→GEL inside MyCredo at Credo's own rate. The question is how good Credo's internal
                conversion rate is, which I couldn't pin down precisely. Georgian banks typically have a spread of 1-3% on
                conversion.
            </Paragraph>
            <Paragraph>The alternative paths and their problems:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        US bank wire directly
                    </Word> — your US bank will likely charge $15-45 wire fee plus a poor exchange rate
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wise sending GEL directly
                    </Word> — Wise supports GEL but the USD→GEL conversion fee on Wise's end may or may not beat doing it
                    inside Credo
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wise → your own TBC/BOG account → transfer to Credo
                    </Word> — adds an unnecessary hop
                </Line>
            </Paragraph>
            <Paragraph>
                The practical answer is probably <Word>
                    <Bold />
                    Wise → Credo USD account → convert inside MyCredo
                </Word>, but to confirm whether Wise's USD→GEL beats Credo's internal conversion, you could check myfin.ge
                which aggregates all Georgian bank exchange rates in real time and compare against whatever Wise quotes you
                at the moment of transfer.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:04:25.866855Z"
        >
            <Origin>019d3e6b-10d5-7042-b077-efb7c0f34317</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Why not my bank to credo usd to usd</Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:04:33.299253Z"
        >
            <Origin>019d3e6b-10d5-7bfd-a0a0-94b10dc6dbe6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That works too — if your US bank can do a SWIFT wire in USD to her Credo USD account, no conversion happens
                at all, and you'd just pay your bank's outgoing wire fee (typically $25-45 for Chase/Citi international
                wires).
            </Paragraph>
            <Paragraph>
                The reason I led with Wise is that Wise's fee on international transfers is usually cheaper than a US bank
                wire fee — often $5-15 versus $25-45 — for the same outcome of USD arriving at Credo.
            </Paragraph>
            <Paragraph>So the comparison is really just:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Your US bank wire
                    </Word>: ~$25-45 flat fee, USD arrives at Credo clean
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wise
                    </Word>: ~$5-15 fee, USD arrives at Credo clean
                </Line>
            </Paragraph>
            <Paragraph>
                Same end result, Wise is just cheaper to execute. But if you already have the wire setup or have a bank that
                waives international wire fees (some Citibank accounts do), that changes the math.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:05:45.709855Z"
        >
            <Origin>019d3e6c-4b9d-7caf-acc3-9ed3c4397058</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How does wise do better than my bank if it uses my bank</Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:05:53.573845Z"
        >
            <Origin>019d3e6c-4b9e-70c2-97b6-6cf14b136972</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good catch. If you're funding Wise from your US bank account via ACH or debit, Wise is essentially a layer
                on top of your bank — it pulls from your bank, converts/transfers, and delivers. It doesn't bypass your
                bank, it just handles the international leg more cheaply than your bank's own wire service would.
            </Paragraph>
            <Paragraph>
                But if you're sending USD to a USD account with no conversion needed, Wise's advantage shrinks — you'd just
                be paying Wise's transfer fee instead of your bank's wire fee, and for a simple USD-to-USD SWIFT wire the
                difference may not be dramatic.
            </Paragraph>
            <Paragraph>The cleanest comparison is just to check both quotes side by side before sending:</Paragraph>
            <Paragraph>
                <List />
                <Line>Chase/Citi international wire fee for USD to Georgia</Line>
                <Line>Wise quote for the same USD amount to Credo's SWIFT</Line>
            </Paragraph>
            <Paragraph>
                Citibank in particular sometimes waives international wire fees depending on account tier, which could make
                the direct bank wire the clear winner.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:06:48.383643Z"
        >
            <Origin>019d3e6d-402e-78d6-a98f-7e53eaf266c8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How about interactive brokers. Don’t they have a free transfer per month?</Paragraph>
        </Message>
        <Message
            at="2026-03-30T11:06:57.073247Z"
        >
            <Origin>019d3e6d-402e-7362-be2e-39d6dbeffd60</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, that's right — Interactive Brokers offers free withdrawals, and their USD wire fees are very low or
                free depending on your account. The key advantage with IBKR for this specific situation is actually their
                currency conversion if you ever needed it — they use near-interbank rates for FX, which beats both Wise and
                any Georgian bank's spread significantly.
            </Paragraph>
            <Paragraph>But for USD-to-USD specifically:</Paragraph>
            <Paragraph>
                <List />
                <Line>IBKR allows one free withdrawal per month, additional withdrawals have a small fee</Line>
                <Line>You'd wire USD from IBKR directly to her Credo USD account via SWIFT — no conversion, no spread</Line>
                <Line>
                    The only question is whether IBKR treats an international SWIFT wire to Georgia as a standard withdrawal
                    or charges separately
                </Line>
            </Paragraph>
            <Paragraph>
                I'm not 100% certain on IBKR's specific fee structure for international SWIFT wires versus domestic ACH, so
                it's worth checking in your IBKR account under the withdrawal/transfer section before assuming it falls
                under the free monthly withdrawal. But conceptually it's probably your cleanest and cheapest option for a
                one-time top-up.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T12:44:08.920127Z"
        >
            <Origin>019d3ec6-5618-7af6-b5e2-9ea87c67ea11</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am trying to deposit from interactive brokers and it is asking me for a correspondent bank. Shpuld I not
                have called Credo bank a bank?
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T12:44:25.996375Z"
        >
            <Origin>019d3ec6-5618-7f43-8666-8bc93591ad49</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Credo Bank Georgia SWIFT USD correspondent bank details”</Action>
            <Paragraph>
                Good news — found exactly what you need. For USD transfers to Credo Bank, the correspondent bank is Bank of
                Georgia, Tbilisi, with SWIFT code BAGAGE22.
            </Paragraph>
            <Paragraph>So in IBKR fill it in as:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Beneficiary bank
                    </Word>: JSC Credo Bank
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Beneficiary SWIFT
                    </Word>: JSCRGE22
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Correspondent bank
                    </Word>: Bank of Georgia
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Correspondent SWIFT
                    </Word>: BAGAGE22
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Beneficiary account
                    </Word>: Ana's Credo IBAN (GE format, 22 characters)
                </Line>
            </Paragraph>
            <Paragraph>
                Also worth noting: if the intermediary bank is not specified, the transaction may not reach the addressee —
                so filling in the correspondent bank isn't optional, it's required for the transfer to actually land.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-30T12:45:07.378201Z"
        >
            <Origin>019d3ec7-42e2-799e-9038-8deb5f4899d4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do ypu know that? Provide a website citation</Paragraph>
        </Message>
        <Message
            at="2026-03-30T12:45:14.555521Z"
        >
            <Origin>019d3ec7-42e2-7c82-88cf-c252e30a4e94</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The source is Credo Bank's own official incoming transfer instructions document. Here's the exact quote from
                it:
            </Paragraph>
            <Paragraph>
                "USD - The main correspondent is BANK OF GEORGIA (SWIFT CODE: BAGAGE22). If money is transferred from abroad
                with incomplete requisites, in which the intermediary bank of Credo Bank is not specified, a similar
                transaction may not reach the addressee."
            </Paragraph>
            <Paragraph>
                The URL is:
                https://s3.eu-central-1.amazonaws.com/cms-storage.noxtton.com/8f2508cf-07a2-4b6b-929f-7a409b8e7c38.pdf
            </Paragraph>
            <Paragraph>
                That appears to be a PDF hosted on Credo Bank's own AWS storage based on the domain pattern matching their
                other documents.
            </Paragraph>
        </Message>
    </Chapter>
);
