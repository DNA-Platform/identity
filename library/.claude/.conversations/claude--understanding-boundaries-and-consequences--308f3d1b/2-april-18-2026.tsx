import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[18 April 2026](2026-04-18)</Date>
        </Dated>
        <Title>[[ 18 April 2026 ]]</Title>
        <Message
            at="2026-04-18T12:12:45.051790Z"
        >
            <Origin>019da081-eb7f-78e2-b547-5459f35b90f7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                SO here's the next issue. Glossary for Katya's story. In particular, you used 7 words to express what Katya
                did in the different situations. Are there other words you used repetitively that are necessary to
                understand the callouts?
            </Paragraph>
            <Paragraph>
                Write a document in the same format with definitions for the words for Katya along with examples to help her
                understand. The examples shouldn't be from her life though they sjould echo the experiences she has had so
                she's familiar
            </Paragraph>
        </Message>
        <Message
            at="2026-04-18T12:14:18.934069Z"
        >
            <Origin>019da081-eb7f-75df-ac96-60774b6d99f8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/user-data/outputs/katya_story_russian.md</Action>
            <Paragraph>
                Good - let me inventory the bolded vocabulary words across all twelve callouts so the glossary matches
                exactly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Inventoried from the callouts (bolded words only):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Хитро, настырно</Line>
                <Line>Неуважительно, непослушно</Line>
                <Line>Хитро, непослушно</Line>
                <Line>Настырно</Line>
                <Line>Настырно</Line>
                <Line>Настырно, недобро</Line>
                <Line>Хитро, неуважительно</Line>
                <Line>Хитро</Line>
                <Line>Неуважительно</Line>
                <Line>Неуважительно, непослушно (with недобро in the explanation)</Line>
                <Line>Неуважительно, властно, непослушно</Line>
                <Line>Непослушно</Line>
            </Paragraph>
            <Paragraph>
                That gives us the six bolded terms: <Word>
                    <Bold />
                    хитро, настырно, неуважительно, непослушно, недобро, властно.
                </Word> These are the only words that need glossary entries — they're the handles.
            </Paragraph>
            <Paragraph>
                Writing the glossary now, in both English (for you) and Russian (for Katya and Ana). The examples will echo
                her experiences without being from her life — grounding situations, sibling dynamics, school, devices, cats
                and pets, asking permission — the texture of an 11-year-old's life without pointing at her specific
                incidents.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/katya_glossary.md</Action>
            <Action>Created /mnt/user-data/outputs/katya_glossary_russian.md</Action>
            <Action>Presented files</Action>
            <Paragraph>A quick audit of what I did, so you can verify:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Six words, not seven.
                </Word> Looking back at your question, you said "seven words." I counted the bolded vocabulary terms across
                all twelve callouts and found six: <Word>
                    <Bold />
                    sneaky, pushing, disrespectful, defiant, unkind, taking over.
                </Word> If you counted seven, you may be including something I'm not — worth double-checking. Possible
                candidates if I missed one: "dishonest" appears once in Part 8 but isn't bolded and isn't carrying the same
                load. Let me know if there's one you want added.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Examples echo but don't point.
                </Word> Every example is from a different domain than her specific incidents — cookies instead of devices, a
                coat instead of a shower, a board game instead of PlayStation, a drawing instead of Duolingo. But each one
                is the <Word>
                    <Emphasis />
                    shape
                </Word> of something in her life, so she'll feel the familiarity without being able to deflect with "that's
                not what happened."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Each definition has a twist.
                </Word> Beyond the simple definition, each entry contains a small piece of insight that reframes the
                behavior — pushing is not asking, being disrespectful is often small choices, defiance is exhausting for the
                person doing it, unkindness is often about what you don't do, groups need joiners not takers. These are the
                grown-up layers underneath the words. Not preachy, just true.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The closing.
                </Word> One short paragraph reframing the whole glossary as a gift: these are tools, most grown-ups can't
                use them, you can start now. Ends with the same signoff as the letter.
            </Paragraph>
            <Paragraph>Ready for whatever needs adjusting.</Paragraph>
        </Message>
        <Message
            at="2026-04-18T12:16:46.316673Z"
        >
            <Origin>019da085-8fe3-7d47-8939-23569b9c3dd4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Put the example inline. Don't press enter. I don't like linebreaks without a skipped line.
            </Paragraph>
            <Paragraph>And I don;t think we need a letter surrounding this.</Paragraph>
            <Paragraph>Are you sure there isn't 7 terms? There was at one point, but maybe you dropped one</Paragraph>
        </Message>
        <Message
            at="2026-04-18T12:19:04.309694Z"
        >
            <Origin>019da085-8fe3-78c4-8746-1fb5b78aeaf5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good catch on the count. Let me check more carefully.</Paragraph>
            <Paragraph>
                I went back through all twelve callouts. The bolded vocabulary words in the final document are these six:
                <Word>
                    <Bold />
                    sneaky, pushing, disrespectful, defiant, unkind, taking over.
                </Word>
            </Paragraph>
            <Paragraph>
                But — early in this conversation, when I first proposed a fixed vocabulary for you, the list I wrote was
                seven: <Word>
                    <Emphasis />
                    disrespectful, defiant, unkind, sneaky, pushing, making excuses, taking over.
                </Word> "Making excuses" was in that original proposal. It never ended up as a bolded word in the final
                callouts. It got absorbed into "sneaky" and "pushing," because making an excuse to keep the phone is both.
            </Paragraph>
            <Paragraph>
                So the question is whether "making excuses" deserves its own glossary entry. I'd argue yes, actually. It's
                her single most frequent move — the nightly device stalls, the hair mask excuse, the "I had something to do
                downstairs." It's distinct enough from sneaky (which is more about hiding) and pushing (which is more about
                persistence) to warrant its own handle. Adding it now makes the glossary seven entries and gives you a
                seventh word to point at later.
            </Paragraph>
            <Paragraph>I'll add it. If you disagree, say so and I'll pull it.</Paragraph>
            <Paragraph>
                Formatting fixed: definition and example in one paragraph each, italicized labels inline, no surrounding
                letter.
            </Paragraph>
            <Action>
                Ran rm /mnt/user-data/outputs/katya_glossary.md /mnt/user-data/outputs/katya_glossary_russian.md
            </Action>
            <Action>Created /mnt/user-data/outputs/katya_glossary.md</Action>
            <Action>Created /mnt/user-data/outputs/katya_glossary_russian.md</Action>
            <Action>Presented files</Action>
            <Paragraph>
                Both versions updated. Seven entries, inline examples, no surrounding letter — just the word list as a clean
                reference document.
            </Paragraph>
            <Paragraph>
                The seventh entry, "making excuses" / "придумывать отговорки," fills a real gap. It names what she does
                nightly with the device, what she did with the hair mask, and what her assignment was in disguise. It gives
                you and Ana a specific word for a specific move that was previously being labeled under two other words.
            </Paragraph>
            <Paragraph>
                One note on the Russian for that term: I used the phrase <Word>
                    <Emphasis />
                    придумывать отговорки
                </Word> (to invent/make up excuses) as the headword, but the noun <Word>
                    <Emphasis />
                    отговорки
                </Word> alone or the adverb form could also work if Ana prefers a single word that matches the rhythm of the
                others. She has the best ear for what will stick.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-18T12:19:51.771026Z"
        >
            <Origin>019da088-6bb8-7c66-8a30-f468bff06b02</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Number the words. Perhaps alphabetize. And don't make them block quotes.</Paragraph>
        </Message>
        <Message
            at="2026-04-18T12:21:27.259785Z"
        >
            <Origin>019da088-6bb8-7015-aaee-e1d70f71b7ec</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Ran rm /mnt/user-data/outputs/katya_glossary.md /mnt/user-data/outputs/katya_glossary_russian.md
            </Action>
            <Action>Created /mnt/user-data/outputs/katya_glossary.md</Action>
            <Action>Created /mnt/user-data/outputs/katya_glossary_russian.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Done. Numbered, alphabetized within each language, no blockquotes.</Paragraph>
            <Paragraph>
                The English order runs: defiant, disrespectful, making excuses, pushing, sneaky, taking over, unkind.
            </Paragraph>
            <Paragraph>
                The Russian order runs by Cyrillic alphabet: властно, настырно, недобро, непослушно, неуважительно,
                придумывать отговорки, хитро. The numbers don't match across languages, since each is alphabetized in its
                own alphabet, but each document is internally consistent.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-18T12:29:53.920187Z"
        >
            <Origin>019da091-9d66-747c-82c5-400d2f3bf173</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                ReorgNIZE my English one to have the same numbers as the Russian one. I get that they alphabetize
                differently so change to the English to match the Russian
            </Paragraph>
        </Message>
        <Message
            at="2026-04-18T12:30:46.818320Z"
        >
            <Origin>019da091-9d66-74c5-806d-077a2946c92e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Ran rm /mnt/user-data/outputs/katya_glossary.md</Action>
            <Action>Created /mnt/user-data/outputs/katya_glossary.md</Action>
            <Action>Presented files</Action>
            <Paragraph>English now matches the Russian numbering:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Taking over / Властно</Line>
                <Line>Pushing / Настырно</Line>
                <Line>Unkind / Недобро</Line>
                <Line>Defiant / Непослушно</Line>
                <Line>Disrespectful / Неуважительно</Line>
                <Line>Making excuses / Придумывать отговорки</Line>
                <Line>Sneaky / Хитро</Line>
            </Paragraph>
            <Paragraph>You and Ana can now point to "number 2" in either language and land on the same word.</Paragraph>
        </Message>
    </Chapter>
);
